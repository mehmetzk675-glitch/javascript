// 153 = 1^3 + 5^3 + 3^3= 1 + 125 + 27 = 153 armstrong sayısı.


let sayi =prompt("bir sayı giriniz:");
let toplam = 0;
for(let i=0;i<sayi.length;i++){
    let rakam = sayi.charAt(i);
toplam += rakam**3;
}

if(Number(sayi) == toplam){

    alert("bu sayı armstrong sayısıdır :)");

}
else{
    alert("bu sayı armstrong sayısı değildir.");
}