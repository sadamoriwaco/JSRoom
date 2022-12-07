const obj={
    first_name:'Mafia',
    last_name:'Code',
    printFullName:function(){
        console.log(this.first_name);//thisはキーワード
        const fn =function(){
            console.log(this);
        };
        window.setTimeout(function(){
            console.log(this);
        })
    }
}

const window={
    setTimeout: function(fn){
        fn();
    }
}

//クラスを定義した時点ではオブジェクトが生成されない
class MyObj{
    constructor(){
        this.first_name = 'Mafia';
        this.last_name = 'Code';
    }
    printFullName(){
        console.log(this.first_name);
    }
}

const obj2=new MyObj();//new演算子でオブジェクトを生成する

obj.printFullName();
obj2.printFullName();//一般的には省略して記載
