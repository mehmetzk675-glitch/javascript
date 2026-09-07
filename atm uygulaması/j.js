/*ATM uygulaması

1-bakiye görüntüleme
2-para çekme 
3-para yatırma
4-çıkış

*/

let yenisatır="\r\n";
let bakiye=1000000000;

let metin="1-bakiye görüntüleme"+yenisatır
+"2-para çekme"+yenisatır
+"3-para yatırma"+yenisatır
+"4-çıkış"+yenisatır
+"lütfen yapmak istediğiniz işlemi seçiniz:";

let seçim=prompt(metin);

switch(seçim){
    case "1":
alert("bakiyeniz:"+bakiye);
break;
case "2":
let çekilecekTutar=Number(prompt("çekmek istediğiniz tutarı giriniz:"));
if(çekilecekTutar<bakiye){
bakiye-=çekilecekTutar;
alert("kalan bakiye:"+bakiye);
}
else{
    alert("bakiye yetersiz"+yenisatır
    +"bakiyeniz:"+bakiye+"çekilecek tutar:"+çekilecekTutar);
}
break;
case "3":
let yatırılacakTutar=Number(prompt("yatırmak istediğiniz tutarı giriniz:"));
bakiye+=yatırılacakTutar;
alert("yeni bakiyeniz:"+bakiye);
break;
case "4":
    console.log("çıkış yapılıyor...");
    break;
    default:
console.log("lütfen 1 ile 4 arasında değer giriniz!");
break;

}