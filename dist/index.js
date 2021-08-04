"use strict";
// JSではブラウザの互換性を気にすることなくclassを使用できる
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}
// 上記のコードは以下のJSにコンパイルされる
/**
var Point = (function () {

    function Point(x, y) {
        this.x = x; // 宣言していないxにthisでアクセスできる謎
        this.y = y;
    }

    Point.prototype.add = function(point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;

})()
 */
// 継承
class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    add(point) {
        var point2D = super.add(point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}
// 継承によってプロパティやメソッドを引き継げる。
// コンストラクタを定義するときは親コンストラクタを呼び出す。
// オーバーライドにoverride修飾子は不要。そのまま同じ名前で定義して親クラスのメソッドをsuperで呼び出す。s
// Static
class Something {
    constructor() {
        Something.instances++;
    }
}
Something.instances = 0;
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances); // 2
// インスタンスの初期化の度に静的な変数であるinstancesがインクリメントされる。
// この変数の内容は個々のインスタンスに依存せず、どこからでもクラス名を介してアクセスできる。
// アクセス修飾子
/**
 * 以下の3つがある
 * public: どこからでもいける
 * private: そのクラスのインスタンスのみアクセスできる
 * protected: 子クラスもいける
 */
class FooBase {
    constructor(x, z) {
        this.x = x;
        this.z = z;
    }
}
// インスタンスにおける効果
var foo = new FooBase(1, 2);
foo.x; // okay
// foo.y; // ERROR : private
// foo.z; // ERROR : protected
// サブクラスにおける効果
class FooChild extends FooBase {
    constructor() {
        super(1, 2);
        this.x; // okay
        // this.y; // ERROR: private
        this.z; // okay
    }
}
// abstract
// abstract classをつけてclassを宣言する。
// abstractクラスabstract修飾子でインターフェースを定義し、それを継承するクラスは子クラスが具体的な実装を提供する
// いわゆるinterface、protocol
class FooCommand {
}
// class BarErrorCommand extends FooCommand {} // 'BarErrorCommand' needs implement abstract member 'execute'.
class BarCommand extends FooCommand {
    execute() {
        return `Command Bar executed`;
    }
}
const barCommand = new BarCommand();
barCommand.execute(); // Command Bar executed
// コンストラクタの省略
// コンストラクタの引数は自動的にクラス内にプロパティが用意される
class Test {
    constructor(x) {
        this.x = x;
    }
}
var test = new Test(45);
test.x; //45
// プロパティ初期化子
// 宣言と同時に導入することでコンストラクタを書かずにプロパティを初期化できる。
// swiftと同じ
// 暗黙的initalizerのイメージ
class Foo {
    constructor() {
        this.members = []; // Initialize directly
    }
}
var foooo = new Foo();
foooo.members; // []
//# sourceMappingURL=index.js.map