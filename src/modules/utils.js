export const pause = (s = 1) => new Promise(resolve => setTimeout(resolve, 1000 * Number(s)));
