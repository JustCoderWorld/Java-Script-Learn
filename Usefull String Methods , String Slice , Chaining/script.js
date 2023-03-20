// Useful string methods

console.log("------------");
console.log("Useful string methods ");
console.log("------------");

let MyPetFullName = "Joe Cupe ";
console.log(MyPetFullName.length); // Stringin harf sayısı
console.log(MyPetFullName.charAt(6)); // 6ınıncı harfi söyler
console.log(MyPetFullName.indexOf("e")); // ilk e nin kaçıncı sırada olduğunu söyler
console.log(MyPetFullName.lastIndexOf("e")); //Son e nin kaçıncı sırada olduğunu söyler
console.log(MyPetFullName.toUpperCase()); // Harfleri büyütür
console.log(MyPetFullName.toLowerCase()); // Harfleri küçültür
console.log(MyPetFullName.endsWith("e")); // e ile biterse true bitmezse false
console.log(MyPetFullName.trim()); // boşlukları alır
console.log(MyPetFullName.replaceAll("e" , "i" )); // e yazan her yeri i ile değiştirir.

console.log("------------");
console.log("String slicing");
console.log("------------");
// String slicing

let MyFriendName = "Joseph Alan";

console.log(MyFriendName.slice(7)); // 7nci kısımdan keser
console.log(MyFriendName.slice(MyFriendName.indexOf(" ") + 1)); // boşluk olan yeri bulur ve ordan +1 ekler ve keser
console.log(MyFriendName.slice(0, MyFriendName.indexOf(" "))); // 0dan boşluk olan yere kadar keser


// Method channing

console.log("------------");
console.log("Method channing");
console.log("------------");


let nickname = "justfeel";

let letter = nickname.charAt(0).toUpperCase()
let ACorrectNickName = nickname.replace(nickname.charAt(0) , letter)
console.log(ACorrectNickName)