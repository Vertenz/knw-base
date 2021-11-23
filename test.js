const test = {};

test['some str'] = true
test.test_nam = false

//узнать флаги
let res = Object.getOwnPropertyDescriptor(test, 'some str')

console.log(res)

//изменить флаги
//Object.defineProperty(obj, prop, descriptor)

Object.defineProperty(test, 'some str', {
    writable: false
})
let res2 = Object.getOwnPropertyDescriptor(test, 'some str')
console.log(res2)
