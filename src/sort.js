const data = [7, 4, 9, 11, 100]

const data2 = ["Andrew", "Misha", "Grisha"];
const data3 = [
  {
    name: "Andrew",
    age: 33,
  },
  {
    name: "Misha",
    age: 28
  },
  {
    name: "Grisha",
    age: 99
  }
]
console.log(typeof data3[0].name)
// console.log("test");
//  task data 1
const sortData = (a, b) => {
  if (a > b) return 1
  if (a === b) return 0
  if (a < b) return -1
}
data.sort(sortData);
console.log(data);

// task data 2
const sortData2 = () => {
  console.log(data2.sort());
}
sortData2();

const sortData3 = (data3, key, isAscending) => {

  data3.sort(( a, b ) => isAscending ? a[key] > b[key] :  a[key] < b[key])
  console.log(data3);
}

// sortData3(data3, "name");
// sortData3(data3, "test");
sortData3(data3, "age", true);
// sortData3(data3, "age", true);
