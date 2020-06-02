//課題8
function calcArea(number) {
    return number * number *3.14
}
alert('課題8： ' + calcArea(3));

//課題6,7
var animals = [
    {'name': 'パンダ', 'weight': 80},
    {'name': 'ライオン', 'weight': 200},
    {'name': 'キリン', 'weight': 300}
    ];
var animal = prompt('[課題6,7]パンダ、ライオン、キリンから一つ選んでください');
var i = 0;
while (i < animals.length) {
    if (animal == animals[i].name) {
        alert(animals[i].weight + 'kgです');
        break;
    }
    i++;
}

//課題5
var animals = [ 'パンダ', 'ライオン', 'キリン'];
var animal = prompt('[課題5]パンダ、ライオン、キリンから一つ選んでください');
var number = animals.indexOf(animal);
var i = 0;
while (i < animals.length) {
    if (animal == animals[1]) {
        alert(animal + number);
        break;
    }
    i++;
}

//課題4
var animals = ['パンダ', 'ライオン', 'キリン'];
var animal = prompt('[課題4]パンダ、ライオン、キリンから一つ選んでください');
var i = 0;
while (i < animals.length) {
    if (animal == animals[1]) {
        break;
    }
    alert(animals[i]);
    i++;
}

//課題3
var animals = ['パンダ', 'ライオン', 'キリン'];
var i = 0;
while (i < animals.length) {
    alert('課題3：' + animals[i]);
    i++;
}

//課題2
var number = prompt('[課題2]数字を入力してください');
if (number > 0) {
    alert('正の数です');
} else if (number < 0) {
    alert('負の数です');
} else {
    alert('数値を入力してください');
}

//課題1
var number = prompt('[課題1]数字を入力してください');
if (number > 0) {
    alert('正の数です');
} else {
    alert('負の数です');
}