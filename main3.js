const toDoList = [
  "почитать", // 0
  "помыть посуду", // 1
  "помыть машину", // 2
  "посадить цветы", // 3
];

const taskCount = toDoList.length; // 4
const firstTask = toDoList[0]; // "почитать"

const lastTask = toDoList[toDoList.length - 1]; // "посадить цветы"

toDoList[0] = "прогуляться";

// push()
toDoList.push("полить цветы");

// // pop()
toDoList.pop();

// // unshift()
toDoList.unshift("покоромить кота");

// // shift()
toDoList.shift();

// slice()
const newTaskList = toDoList.slice(0, 2);

// splice()
const deletedTask = toDoList.splice(0, 1);
toDoList.splice(1, 1, "позвонить другу");

for (const task of toDoList) {
  console.log(task);
}
// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");

// styles.splice(1, 1, "Шансон");
// styles.splice();
// console.log(styles);
// const middle = styles.length / 2;
// console.log("middle", middle);
// const circleMiddle = Math.ceil(middle);
// const middleIndex = circleMiddle - 1;
// const middleElement = "Классика";
// styles.splice(middleIndex, 1, "Классика");

// const deletedElement = styles.shift();

// styles.unshift("Рэп", "Регги");
// console.log(styles);
