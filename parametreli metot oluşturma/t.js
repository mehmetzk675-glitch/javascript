function yazdır(isim,soyisim){
    console.log(isim+""+soyisim);
}

yazdır("mehmet zeki ","ışıldak");
yazdır("serhat ","ışıldak");



function küp(sayi){
    console.log(sayi*sayi*sayi);
}

küp(3);
küp(5);
küp(9);

let yas=Number(prompt("yaşınızı giriniz:"));

kontrolEt(yas);

function kontrolEt(yas){
    if(yas>=18){
        console.log("ehliyet alabilirsiniz");
    }
    else{
        console.log("ehliyet alamazsınız");
    }
}