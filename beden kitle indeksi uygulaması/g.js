// BEDEN KİTLE İNDEKSİ HESAPLAMA UYGULAMASI

let  kilo =Number(prompt ("Lütfen kilonuzu giriniz kg cinsinden:"));
let boy=Number(prompt("lütfen boyunuzu giriniz m cisinden:"));

let sonuc=kilo/(boy**2);
if(sonuc<18.5){
console.log("ideal ilonun altında");
}else if(sonuc>=18.5 && sonuc<24.9){
console.log("ideal kilodasınız");
}else if(sonuc>=25 && sonuc<29.9){
console.log("fazla kilolusunuz");
}else if(sonuc>=30 && sonuc<34.9){
console.log("obezsiniz");
}else if(sonuc>=40){
console.log("morbid obezsiniz");
} 
else{
    
}