// ------DERS ORTALAMASI BULMA-------

//vize1%30,vize2%30,final%40   

let vize1=Number(prompt("vize1 notunu giriniz:"));

let vize2=Number(prompt("vize2 notunu giriniz:"));

let final=Number(prompt("final notunu giriniz:"));

let ortalama=((vize1*30)/100)+((vize2*30)/100)+((final*40)/100);

console.log("ortalama:"+ortalama);
if(ortalama>=45){
    console.log("geçtiniz");
}
else{
    console.log("kaldınız");
}