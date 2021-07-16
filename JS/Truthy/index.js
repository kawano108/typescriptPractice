if (123) {
    console.log('Any number other than 0 is truthy');
}

// 0以外はTruthyと呼ばれるらしい。

// 要0か1かのことでJSでは型によってのその判定が違うということ？

// boolean false true
// string '' (空文字列) その他の文字列
// number 0  NaN その他の数値 
// null 常にfalsy なし
// undefined 常にfalsy なし
// その他のオブジェクト({}や[]といった空のものも含む) なし 常にtruthy


const hasName = !!foo;

// Boolに!で真偽を反転するのはSwift同様使える

const someObj = {
    hasName: !!foo
}

// !!だと一回めの!でBoolに変換されてその後の!で真偽が反転する。ややこしい。