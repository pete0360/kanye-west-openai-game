function calculateIndexArray(quoteData) {
  const firstIndex = Math.floor(Math.random() * 2);

  const secondIndex = Math.floor(
    Math.random() * quoteData[firstIndex].data.length
  );
  return [firstIndex, secondIndex];
}
export { calculateIndexArray };
