// Benzin istasyonu 

/*

1-dizel : 78,85
2-benzin :75,58
3-LPG :33,68

Gelen müşteriden alacağımız bilgiler
1-yakıt tipi
2- kaç litre yakıt alacağı


*/

let dizel=78.85,benzin=75.58,lpg=33.68;
const yenisatır="\r\n";

const yakıtmetni="1-dizel"+yenisatır
+"2-benzin"+yenisatır
+"3-LPG"+yenisatır
+"yakıt türünü seçiniz";

let yakıtTipi=prompt(yakıtmetni);
if(yakıtTipi=="1"||yakıtTipi=="2"||yakıtTipi=="3"){
let yakıtlitresi=Number(prompt("kaç litre yakıt alacaksınız?"));
let bakiye=Number(prompt("bakiyeniz ne kadar?"));

if(yakıtTipi=="1"){
//dizel
let ödenecektutar=dizel*yakıtlitresi;
if(ödenecektutar<bakiye){
    //bakiye yeterli
    alert("yakıt alımınız gerçekleşti, iyi yolculuklar dileriz!"+yenisatır
        +"ödenecektutar: "+ödenecektutar+yenisatır
+"kalan bakiye:"+(bakiye-ödenecektutar));
}else{
    //bakiye yetersiz
    alert("bakiyeniz yeterli değildir!"+yenisatır
+"ödenecektutar: "+ödenecektutar+yenisatır
 +"bakiye: "+bakiye
+"eksik tutar:"+(ödenecektutar-bakiye));
}

}else if(yakıtTipi=="2"){
//benzin
let ödenecektutar=benzin*yakıtlitresi;
if(ödenecektutar<bakiye){
    //bakiye yeterli
    alert("yakıt alımınız gerçekleşti, iyi yolculuklar dileriz!"+yenisatır
+"ödenecektutar: "+ödenecektutar+yenisatır
+"kalan bakiye:"+(bakiye-ödenecektutar));
}else{
    //bakiye yetersiz
    alert("bakiyeniz yeterli değildir!"+yenisatır
+"ödenecektutar: "+ödenecektutar+yenisatır
 +"bakiye: "+bakiye
+"eksik tutar:"+(ödenecektutar-bakiye));
}
}else if(yakıtTipi=="3"){ 
//LPG
let ödenecektutar=LPG*yakıtlitresi;
if(ödenecektutar<bakiye){
    //bakiye yeterli
    alert("yakıt alımınız gerçekleşti, iyi yolculuklar dileriz!"+yenisatır
+"ödenecektutar: "+ödenecektutar+yenisatır
+"kalan bakiye:"+(bakiye-ödenecektutar));
}else{
    //bakiye yetersiz
    alert("bakiyeniz yeterli değildir!"+yenisatır
+"ödenecektutar: "+ödenecektutar+yenisatır
 +"bakiye: "+bakiye
+"eksik tutar:"+(ödenecektutar-bakiye));
}
} } 
else{
    alert("lütfen geçerli bir yakıt tipi seçiniz!");
}