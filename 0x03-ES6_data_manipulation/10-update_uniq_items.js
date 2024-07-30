export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }
  groceries.forEach((value, index) => {
    if (value === 1) {
      groceries.set(index, 100);
    }
  });
  return groceries;
}
