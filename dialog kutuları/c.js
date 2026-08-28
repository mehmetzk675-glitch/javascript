/*
DİALOG KUTULARI
    -alert
    -Prompt
    -Confirm
*/

alert("uyarı geldi");

let isim=prompt("isminizi giriniz:");
console.log(isim);

let adı=prompt("isminizi giriniz:");
let yas=prompt("yaşınızı giriniz:");

console.log("isminiz:"+adı);
console.log("yaşınız:"+yas);

let sonuc=confirm("silmek istediginize emin misiniz?");
console.log(sonuc);