//console.log(isFinite(Infinity));
//let guestList = "Guests:\n John\n Pete\n Mary";
//console.log(guestList);
//let str = "Hello, world!";
//let negativeSubStr = str.slice(-5, -6);
//console.log(negativeSubStr);
//let str = "Ослик Иа-Иа посмотрел на виадук";
//let target = "Иа";
//let pos = 0;
//while (true) {
//let foundPos = str.indexOf(target, pos);
//if (foundPos == -1) break;
//alert(`Найдено тут: ${foundPos}`);
//pos = foundPos + 1;
//}
function ucFirst(name) {
  FirstLetter = name.slice(0, 1).toUpperCase();
  newString = FirstLetter + name.slice(1);
  console.log(newString);
}
ucFirst("Вася");
