// undefined: 初期化されてない
// null: 利用されてない

// nullは意図的にnullを代入することで値が利用されていないことを示すために使う

// undefinedは変数を宣言しているが、値が代入される前の状態

// JSでは上記の両者によって値が利用できない可能性があるため、どちらもチェックする必要がある。
// Swiftのアンラップよりめんどくさいね。

var a = null
console.log(a) // null

var b = ""
console.log(b) // ''

var c
console.log(c) // undefined

var object = {}
console.log(object.aaaaa) // objectの存在しないkeyを指定した時もundefinedになる。

var arrraayyyyy = [1, 2, 3]
console.log(arrraayyyyy[1])
console.log(arrraayyyyy[10]) // arrayの存在しない添字を指定した時もundefinedになる。

// よくわからんけどルートレベルとやらではundefinedのチェックはしないほうがいいらしい。
// クラッシュするので。
if (typeof someglobal !== 'undefined') {
    console.log(someglobal)
}

// ルートレベル＝ツリーの一番上

fs.readFile('someFile', 'utf8', (err,data) => {

    // ここでnullチェックをしているらしい
    // swiftでいうif let error
    if (err) {
      // 何らかのエラー処理をする
    } else {
      // エラーなし
    }
  });


  // typescriptではnullは使わない