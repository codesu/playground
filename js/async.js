// 返回值为一个promise
// 执行到最后一句，如果不需要await返回值，可以不用写return，直接等待默认promise的resolve即可
// @return [asy]: default return: 1002.174072265625ms
async function asy() {
    await new Promise(r => {
        setTimeout(r, 500)
    })
    await new Promise(r => {
        setTimeout(r, 500)
    })
    // 返回值123，不加return默认返回一个空值promise
    return 123
}
console.time('[asy]: default return')
asy().then(_ => console.timeEnd('[asy]: default return'))

// reject 会跑到 catch 中
// @return [foo]: exception 123
async function foo() {
    try {
        await Promise.reject(123);
        console.log('[foo]: success, no console')
    }
    catch (e) {
        console.log('[foo]: exception', e)
    }
}

foo()

// 最后一句会等待try里的await执行完再执行
// @return [bar]: finally time: 1001.138916015625ms
async function bar() {
    console.time('[bar]: finally time')
    try {
        await new Promise(r => {
            setTimeout(r, 1000)
        })
    } catch (e) {
        console.log('[bar]: ', e)
    }
    console.timeEnd('[bar]: finally time')
}

bar()
