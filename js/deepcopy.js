function testJsonParse() {
    const tpl = {
        a: 1,
        b: 2,
        c: [{
            a: 1, b: 2
        }, {
            a: [1, 2, 3],
            b: {
                a: 1,
                b: [1, 2, 3],
                c: {
                    a: 1,
                    b: 2
                }
            }
        }]
    }
    let i = 1
    let output = {}
    console.time('stringify&parse')
    while (i < 10000) {
        output = JSON.parse(JSON.stringify(tpl))
        ++i
    }
    console.timeEnd('stringify&parse')
}


function deepCopy(obj) {
    // bool/string/number/null/undefined
    if (typeof obj !== 'object' || obj == undefined) {
        return obj
    }
    if (Array.isArray(obj)) {
        return obj.map(o => deepCopy(o))
    }
    // map{}
    return Object.keys(obj).reduce((m, n) => {
        m[n] = deepCopy(obj[n])
        return m
    }, {})
}

function testDeepCopy() {
    const tpl = {
        a: 1,
        b: 2,
        c: [{
            a: 1, b: 2
        }, {
            a: [1, 2, 3],
            b: {
                a: 1,
                b: [1, 2, 3],
                c: {
                    a: 1,
                    b: 2
                }
            }
        }]
    }
    let i = 1
    let output = {}
    console.time('deepcopy')
    while (i < 10000) {
        output = deepCopy(tpl)
        ++i
    }
    console.timeEnd('deepcopy')
}

// vuex
function deepCopy2 (obj, cache = []) {
    function find (list, f) {
        return list.filter(f)[0]
    }

    // just return if obj is immutable value
    if (obj === null || typeof obj !== 'object') {
        return obj
    }

    // if obj is hit, it is in circular structure
    const hit = find(cache, c => c.original === obj)
    if (hit) {
        return hit.copy
    }

    const copy = Array.isArray(obj) ? [] : {}
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
        original: obj,
        copy
    })

    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy2(obj[key], cache)
    })

    return copy
}

function testDeepCopy2() {
    const tpl = {
        a: 1,
        b: 2,
        c: [{
            a: 1, b: 2
        }, {
            a: [1, 2, 3],
            b: {
                a: 1,
                b: [1, 2, 3],
                c: {
                    a: 1,
                    b: 2
                }
            }
        }]
    }
    let i = 1
    let output = {}
    console.time('deepcopy2')
    while (i < 10000) {
        output = deepCopy2(tpl)
        ++i
    }
    console.timeEnd('deepcopy2')
}

// 分别运行，不然会有干扰
// stringify&parse: 50ms
testJsonParse()
// deepcopy: 33ms
testDeepCopy()
// 45ms，用上cache可能快些
testDeepCopy2()
