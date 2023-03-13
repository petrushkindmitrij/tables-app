export const getNoEmptyIndexes = (array: (undefined | unknown)[]): number[] =>
  array.reduce<number[]>((acc, el, idx) => {
    if (el) {
      return [...acc, idx];
    } else {
      return acc;
    }
  }, []);
