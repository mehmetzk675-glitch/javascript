//global scope:heryerden erişebilirsin
//function scope: sadece tanımlandığı fonksiyon içinde erişebilirsin
//block scope: sadece tanımlandığı blok içinde erişebilirsin


// var değer=10;//buna her yerden erişebilirsin

// if(true){
//     console.log(değer); //10
// }


function method1(){
    var deger=5;
    console.log(deger); //5
}

method1();