/*
?veri türleri

1.string
2.number
3.boolean
4.null
5.undefined
6.object
7.function
*/ 
let isim="mehmet";
console.log(isim);
console.log(typeof isim);

let sayi1=10;
 console.log(sayi1);
console.log(typeof sayi1);

let stringdeğişken="yaşınız:";
let yaş=19;
console.log(stringdeğişken+yaş);
//boolean : true ve false'dan oluşur
console.log(5>1);
console.log(5<1);

let a=null;//null: boş değer
a=9;
console.log(a);
//undefined: tanımlanmamış değer
let b;
console.log(b);
//object: birden fazla değeri tek bir değişkende tutabilirsin
let insan={
    isim:"mehmet zeki",
    soyisim:"ışıldak",
    yaş:19,   
}

console.log(insan);
//function: bir işlemi gerçekleştirmek için kullanılır
let func=function(){
    console.log("merhaba");
}
func();