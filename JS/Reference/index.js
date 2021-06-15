var foo = {}
var bar = foo // bar と fooは同じ{}への参照であるらしい

foo.baz = 123
console.log(bar.baz) //124

var penpen = {
    name: 'penguin',
    size: 'M'
}

var penpenBox = penpen
console.log(penpenBox) // { name: 'penguin, size: 'M' }

console.log(penpenBox.name) // penguin
console.log(penpenBox['name']) // penguin
console.log(penpenBox['penguin']) // undefined

// objectは{}で囲ったやつ
// .や[{key}]で中身にアクセスできる
// swiftでいうdictionaly的なやつ？

var foo = {}
var bar = foo // barはfooへの参照
var baz = {} // bazはfooとは異なる新しいオブジェクト

console.log(foo === bar) // true
console.log(foo === baz) // false