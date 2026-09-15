let sayi = prompt("Lütfen bir sayı giriniz: ");
let sonuc = true;
for(let i = 2; i <=Math.floor(sayi/2); i++) {
   
    if(sayi % i == 0) {
        sonuc = false;
        break;
    }
}
if(sonuc) {
    if(sayi==1){
    alert(sayi+"bir asal sayi değildir.");
}
  else{  alert(sayi + " bir asal sayıdır.");}
} else {
    alert(sayi + " bir asal sayı değildir.");
}