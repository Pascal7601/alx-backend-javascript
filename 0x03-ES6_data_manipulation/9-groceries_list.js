export default function groceriesList() {
  const groceries = new Map([
    ['apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);
  return groceries;
}
console.log(groceriesList());
