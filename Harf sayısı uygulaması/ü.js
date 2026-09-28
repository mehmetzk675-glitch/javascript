
let metin="ben bir öğrenciyim.";
let harf=prompt("harfi giriniz:");

let sonuc=bul(harf);
alert("harf sayisi:"+sonuc);

function bul(harf){
let toplam=0;

for(let i =0;i<metin.length;i++){
    if(metin.charAt(i)===harf){
        toplam+=1;
    }
}
return toplam;

}