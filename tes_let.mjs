// let leo = 'hello1'
// let leo = 'hello2'
// console.log(leo)

// var x
// x - 1
// console.log(x)


// x - 10
// var x
// console.log(x)

// var c = 2
// if (true) {
//     var d = 3
// }
// console.log(c)


// var c = 2
// function myScope() {
//     var d = 3
// }
// myScope()
// console.log(c)


// let user = {
//     school: 'SMK Bina Nusantara',
//     address: 'Jln Ngaliyan rt 2 rw 1'
// };

// let proxyUser = new Proxy(user, {});

// console.log(user.school);
// console.log(user.address);

// let user = {
//     name: 'joko',
//     age: 32
// };
// let proxyUser = new Proxy(user, {});
// console.log(user.name);

// function a(name) {
//     console.log('Merah', name)
// }
// function b(name) {
//     console.log('Jingga', name)
// }
// function c(name) {
//     console.log('Kuning', name)
// }
// function d(name) {
//     console.log('Hijau', name)
// }
// function e(name) {
//     console.log('Biru', name)
// }
// function f(name) {
//     console.log('Nila', name)
// }
// function g(name) {
//     console.log('Unggu', name)
// }

function a(name) {
    setImmediate(function () {
        console.log('Warna', name)
    })
}
function b(name) {
    setImmediate(function () {
        console.log('Warna', name)
    })
}
function c(name) {
    setImmediate(function () {
        console.log('Warna', name)
    })
}
function d(name) {
    setImmediate(function () {
        console.log('Warna', name)
    })
}
function e(name) {
    setImmediate(function () {
        console.log('Warna', name)
    })
}
function f(name) {
    setImmediate(function () {
        console.log('Warna', name)
    })
}
function g(name) {
    setImmediate(function () {
        console.log('Warna', name)
    })
}

a('Merah')
b('Jingga')
c('Kuning')
d('Hijau')
e('Biru')
f('Nila')
g('Unggu')