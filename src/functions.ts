import { createModuleResolutionCache } from "typescript";

function sum(a: number, b: number): number {
  return a + b;
}

sum(2, 7);

function log(name: string, userId?: string): void {
  console.log("hello", name, "with ID", userId || "anonym");
}
log("Eva", "125");

function some(...nums: number[]) {
  const sum = nums.reduce((current, total) => current + total, 0);
  return sum / nums.length;
}
