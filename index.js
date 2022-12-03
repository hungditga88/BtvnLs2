const fruit = [["Grape",15],["Banana",12],["Apple",2],["Watermelon",1],["Kiwi",5],["Durian",3]];
for(let j = 0; j < fruit.length; j++){
    let Number = fruit[j].length;
    for(let i = 0; i < Number; i++){
        console.log("I have" + " " + fruit[j] + fruit[i] + " ");
    }
}
