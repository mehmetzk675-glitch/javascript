

let a =Number(prompt("bir sayi giriniz:"));
isperfectnumber(a);

function isperfectnumber(number){
let toplam=0;
for(let i=2;i<=number/2;i++){
    if(number%i==0){
        toplam+=i;
    }
}
toplam+=1+number;
if(toplam==number*2){
    alert("mükemmel sayı");
}
else{
    alert("mükemmel sayı değil");
}
}