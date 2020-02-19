/**
 * @description param参数例一
 * @param {String} p1
 * @param {String|Number} p2 参数2的说明，有可能是字符串也有可能是数字，
 * 比较长那就换行了.
 * @param {Number} [p3=1] p3有默认值，可以不传参
 * @param {any} p4 类型不限,当参数类型超过三种，建议用any取代，不过一般不会出现这种情况
 * @param {Array<Number>} p5 如果知道是某种类型的数组，可以用 Array<typeName>描述参数类型
 * Promise同样使用
 * @returns {Object} 返回值描述
 */
function foo(p1, p2, p3 = 1, p4, p5) {
    return {
        p1: p1,
        p2: p2,
        p3: p3,
        p4: p4,
        p5: p5
    };
}
