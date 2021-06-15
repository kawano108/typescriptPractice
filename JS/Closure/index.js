function outerFunction(arg) {
    var variableInOuterFunction = arg
    
    function bar() {
        console.log(variableInOuterFunction) // 外部のスコープの変数もアクセスできる
    }

    bar()
}

outerFunction('hello closure') // hello closure

// 内側の関数は外側の関数がreturnされた後も変数にアクセスできる

function outerFunctionBar(arg) {
    var variableInOuterFunction = arg

    return function() {
        console.log(variableInOuterFunction)
    }
}

var innerFunction = outerFunctionBar('hellow closure')
innerFunction() //'hello closure'

// outerFunctionは引数を元に一次変数を作成し、一次変数を出力するfunctionを返す。

function createCounter() {
    let val = 0;
    return {
        increment() { val++ },
        getVal() { return val }
    }
}

let counter = createCounter()
counter.increment()
console.log(counter.getVal()) // 1
counter.increment()
console.log(counter.getVal()) // 2