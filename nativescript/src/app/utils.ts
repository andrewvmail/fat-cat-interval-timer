export const createArrayOfNumbers = (from, to) => {
  return Array(to)
    .join()
    .split(",")
    .map(
      function(a) {
        return this.i++;
      },
      { i: from }
    );
};
