// const is = {} 

is.num = function (obj) {
    return typeof (obj) == "number"
}
is.nan = function (obj) {
    return Number.isNaN(obj)
}
is.str = function (obj) {
    return typeof (obj) == "string"
}
is.bool = function (obj) {
    return typeof (obj) == "boolean"
}
is.undef = function (obj) {
    return typeof (obj) == "undefined"
    //return typeof (obj) === undefined
}
is.def = function (obj) {
    return typeof (obj) != "undefined"
}

is.arr = function (obj) {
    return Array.isArray(obj)
}
is.obj = function (obj) {
    return typeof (obj) == "object" && !is.fun(obj) && !is.arr(obj) && obj !== null
}
is.fun = function (obj) {
    return typeof (obj) == "function"
}
is.truthy = function (obj) {
    if (obj) {
        return true
    } else {
        return false
    }
}
is.falsy = function (obj) {
    if (obj) {
        return false
    } else {
        return true
    }
}
