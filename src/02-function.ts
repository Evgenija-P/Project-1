import { createModuleResolutionCache } from 'typescript';

function sum(a: number, b: number): number {
  return a + b;
}

const sum2 = (a: number, b: number): number => a + b;
const sum3 = function (a: number, b: number): number {
  return a + b;
};

sum(1, 2);

function log(name: string, userId?: string): void {
  console.log('hello', name, 'with ID', userId || 'anonym');
}
log('Eva', '125');

function some(...nums: number[]) {
  const sum = nums.reduce((current, total) => current + total, 0);
  return sum / nums.length;
}

function crash(): never {
  throw new Error('crash');
}
