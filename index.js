// Bài 1
const fruits = [["Grape",15],["Banana",12],["Apple",2],["Watermelon",1],["Kiwi",5],["Durian",3]];
for (let i = 0; i < fruits.length; i++){
        console.log("I have" + " " + fruits[i][1] + " " + fruits[i][0]);
}


// Bài 2
// Vòng lập for
for (let h = 0; h < fruits.length; h++){
    console.log(fruits[h][1] + " " + fruits[h][0])
}
// Vòng lập for of
for (let fruit of fruits){
    console.log(fruit[1] + " " + fruit[0])
}
// Vòng lập for in
for (fruit in fruits){
    console.log(fruit)
}

// Bài 3
var myDog = {
    "name": "Ngáo",
    "legs": "4",
    "friends": ["everything!"],
}
myDog.name = "Husky"
myDog.color = 'Brown';
delete myDog["friends"];
console.log(myDog);
