//---ÇOKLU İF YAPISI----




let ad=prompt("adınızı giriniz:");

let tckn=prompt("tckn giriniz:");

kontrolEt(ad,tckn);

function kontrolEt(ad,tckn){

if(ad!=""){

    if(tckn.length==11){
        console.log("adınız ve tckn'niz geçerli");
       
    }
    else{
        console.log("lütfen geçerli bir tckn giriniz!");
    }

}
else{
console.log("lütfen geçerli bir isim giriniz!");
}





}