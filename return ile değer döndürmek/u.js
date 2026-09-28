//Geriye değer dödüren metot tanımlamak.(return)


let donenDeger=cube(5);
kareAl(donenDeger);


function kareAl(sayi){
    let sonuc=sayi*sayi;
    console.log(sonuc);
}

function cube(sayi){
    let sonuc=sayi*sayi*sayi;
    return sonuc;
}