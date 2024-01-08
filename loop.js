const numbers = [1, 2, 32, 232, 43, 45, 54, 54];
for (let num of numbers) {
  //   console.log(num);
}
// object

const glass = {
  name: "glass",
  color: "golden",
  isClean: "clean",
  prize: 12,
};
// for (const obj in glass) {
//   const value = glass[obj];
//   console.log(obj, value);
// }
const keys = Object.keys(glass);
console.log(keys);
for (let key of keys) {
  console.log(key);
}
