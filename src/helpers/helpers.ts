export const isStartsFromSpace = (str: string): boolean => /^\s{1}/g.test(str);
export const removeSpaces = (str: string): string => str.replace(/\s+/g, ' ');
