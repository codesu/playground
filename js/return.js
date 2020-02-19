/**
 * https://blog.csdn.net/qq_30816657/article/details/80297646
*/

// @return [t1]: in try before return
function tryReturn() {
    try {
        console.log('[t1]: in try before return')
        return 1
        console.log('[t1]: in try after return')
    } catch (error) {
        console.log('[t1]: ', error)
    }
    return 2
    console.log('[t1]: end func')
}

// @return 3
function finallyReturn(a, b) {
    try {
        return a + b
    } catch (e) {
        return 2
        console.log(e)
    } finally {
        return 3
    }
    // 忽略
    return 0
}

// @return 3
finallyReturn(2, 2)

// @return a + b
function finallyReturn2(a, b) {
    try {
        return a + b
    } catch (e) {
        return 2
        console.log(e)
    } finally {
        a = 1000
    }
    return 0
}

// @return 4
finallyReturn2(2, 2)

// @return 1 -> 1
// @return 0 -> 死循环
function whileReturn(arg) {
    while (1) {
        if (arg) {
            return arg
        }
    }
}
