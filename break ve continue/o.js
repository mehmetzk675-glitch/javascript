
let sayac = 1;

while(sayac<=10){
 
    console.log(sayac);
    if(sayac==7){
        break;
    }
    sayac++;
       
}


let sayac2 =0;

while(sayac2<=10){
    sayac2++;
    if(sayac2>10){
        break;
    }
    if(sayac2==8){
        continue;
    }
    console.log(sayac2);
}