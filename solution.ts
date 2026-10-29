// Problem solving: 20 problems in one file, separated by number and title.
// Run the built-in checks with:  npm install && npm test   (uses tsx)

import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";

// ---------------------------------------------------------------------------
// Problem 1: Staircase
// ---------------------------------------------------------------------------
export function staircase(n: number): string {
  const rows: string[] = [];
  for (let i = 1; i <= n; i++) rows.push(" ".repeat(n - i) + "#".repeat(i));
  return rows.join("\n");
}

// ---------------------------------------------------------------------------
// Problem 2: Grading Students
// ---------------------------------------------------------------------------
export function gradingStudents(grades: number[]): number[] {
  return grades.map((g) => {
    if (g < 38) return g;
    const next = Math.ceil(g / 5) * 5;
    return next - g < 3 ? next : g;
  });
}

// ---------------------------------------------------------------------------
// Problem 3: Time Conversion
// ---------------------------------------------------------------------------
export function timeConversion(s: string): string {
  const period = s.slice(-2).toUpperCase();
  const [hh, mm, ss] = s.slice(0, -2).split(":");
  let h = Number(hh) % 12;
  if (period === "PM") h += 12;
  return `${String(h).padStart(2, "0")}:${mm}:${ss}`;
}

// ---------------------------------------------------------------------------
// Problem 4: String Repeat
// ---------------------------------------------------------------------------
export function repeatStr(n: number, s: string): string {
  return s.repeat(Math.max(0, n));
}

// ---------------------------------------------------------------------------
// Problem 5: Reversed Strings
// ---------------------------------------------------------------------------
export function solution(str: string): string {
  return Array.from(str).reverse().join("");
}

// ---------------------------------------------------------------------------
// Problem 6: Sum of Positive
// ---------------------------------------------------------------------------
export function positiveSum(arr: number[]): number {
  let sum = 0;
  for (const x of arr) if (x > 0) sum += x;
  return sum;
}

// ---------------------------------------------------------------------------
// Problem 7: Grasshopper - Summation
// ---------------------------------------------------------------------------
export function summation(num: number): number {
  return (num * (num + 1)) / 2;
}

// ---------------------------------------------------------------------------
// Problem 8: Convert a Boolean to a String
// ---------------------------------------------------------------------------
export function booleanToString(b: boolean): string {
  return b ? "true" : "false";
}

// ---------------------------------------------------------------------------
// Problem 9: Fizz Buzz
// ---------------------------------------------------------------------------
export function fizzBuzz(n: number): string[] {
  const res: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) res.push("FizzBuzz");
    else if (i % 3 === 0) res.push("Fizz");
    else if (i % 5 === 0) res.push("Buzz");
    else res.push(String(i));
  }
  return res;
}

// ---------------------------------------------------------------------------
// Problem 10: Running Sum of 1D Array
// ---------------------------------------------------------------------------
export function runningSum(nums: number[]): number[] {
  const res: number[] = [];
  let total = 0;
  for (const x of nums) {
    total += x;
    res.push(total);
  }
  return res;
}

// ---------------------------------------------------------------------------
// Problem 11: Richest Customer Wealth
// ---------------------------------------------------------------------------
export function maximumWealth(accounts: number[][]): number {
  let max = 0;
  for (const row of accounts) {
    let sum = 0;
    for (const v of row) sum += v;
    if (sum > max) max = sum;
  }
  return max;
}

// ---------------------------------------------------------------------------
// Problem 12: Remove Duplicates from Sorted Array (in place, returns k)
// ---------------------------------------------------------------------------
export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) nums[k++] = nums[i];
  }
  return k;
}

// ---------------------------------------------------------------------------
// Problem 13: Contains Duplicate
// ---------------------------------------------------------------------------
export function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();
  for (const x of nums) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
}

// ---------------------------------------------------------------------------
// Problem 14: Move Zeroes (in place)
// ---------------------------------------------------------------------------
export function moveZeroes(nums: number[]): void {
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[pos], nums[i]] = [nums[i], nums[pos]];
      pos++;
    }
  }
}

// ---------------------------------------------------------------------------
// Problem 15: Merge Sorted Array (in place into nums1)
// ---------------------------------------------------------------------------
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) nums1[k--] = nums1[i--];
    else nums1[k--] = nums2[j--];
  }
}

// ---------------------------------------------------------------------------
// Problem 16: 3Sum
// ---------------------------------------------------------------------------
export function threeSum(nums: number[]): number[][] {
  const a = [...nums].sort((x, y) => x - y);
  const res: number[][] = [];
  for (let i = 0; i < a.length - 2; i++) {
    if (a[i] > 0) break;
    if (i > 0 && a[i] === a[i - 1]) continue;
    let l = i + 1;
    let r = a.length - 1;
    while (l < r) {
      const sum = a[i] + a[l] + a[r];
      if (sum < 0) l++;
      else if (sum > 0) r--;
      else {
        res.push([a[i], a[l], a[r]]);
        l++;
        r--;
        while (l < r && a[l] === a[l - 1]) l++;
        while (l < r && a[r] === a[r + 1]) r--;
      }
    }
  }
  return res;
}

// ---------------------------------------------------------------------------
// Problem 17: Plus One
// ---------------------------------------------------------------------------
export function plusOne(digits: number[]): number[] {
  const res = [...digits];
  for (let i = res.length - 1; i >= 0; i--) {
    if (res[i] < 9) {
      res[i]++;
      return res;
    }
    res[i] = 0;
  }
  res.unshift(1);
  return res;
}

// ---------------------------------------------------------------------------
// Problem 18: Reverse String (in place)
// ---------------------------------------------------------------------------
export function reverseString(s: string[]): void {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
}

// ---------------------------------------------------------------------------
// Problem 19: Length of Last Word
// ---------------------------------------------------------------------------
export function lengthOfLastWord(s: string): number {
  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") i--;
  let len = 0;
  while (i >= 0 && s[i] !== " ") {
    len++;
    i--;
  }
  return len;
}

// ---------------------------------------------------------------------------
// Problem 20: Longest Common Prefix
// ---------------------------------------------------------------------------
export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  const first = strs[0];
  for (let i = 0; i < first.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== first[i]) return first.slice(0, i);
    }
  }
  return first;
}

// ===========================================================================
// Tests (representative + edge cases). Executed only when run directly.
// ===========================================================================
function runTests(): void {
  const eq: typeof assert.deepStrictEqual = (a, b, m) => assert.deepStrictEqual(a, b, m);
  let a: number[];

  // 1
  eq(staircase(4), "   #\n  ##\n ###\n####");
  eq(staircase(1), "#");
  eq(staircase(0), "");
  // 2
  eq(gradingStudents([73, 67, 38, 33]), [75, 67, 40, 33]);
  eq(gradingStudents([37, 0, 100, 84]), [37, 0, 100, 85]);
  eq(gradingStudents([]), []);
  // 3
  eq(timeConversion("12:00:00AM"), "00:00:00");
  eq(timeConversion("07:05:45PM"), "19:05:45");
  eq(timeConversion("12:30:45PM"), "12:30:45");
  eq(timeConversion("11:59:59AM"), "11:59:59");
  // 4
  eq(repeatStr(3, "ha"), "hahaha");
  eq(repeatStr(0, "hello"), "");
  eq(repeatStr(-2, "x"), "");
  eq(repeatStr(2, ""), "");
  // 5
  eq(solution("world"), "dlrow");
  eq(solution(""), "");
  eq(solution("a"), "a");
  // 6
  eq(positiveSum([1, -4, 7, 12]), 20);
  eq(positiveSum([]), 0);
  eq(positiveSum([-1, -2]), 0);
  // 7
  eq(summation(8), 36);
  eq(summation(1), 1);
  eq(summation(0), 0);
  // 8
  eq(booleanToString(true), "true");
  eq(booleanToString(false), "false");
  // 9
  eq(fizzBuzz(5), ["1", "2", "Fizz", "4", "Buzz"]);
  eq(fizzBuzz(15).pop(), "FizzBuzz");
  eq(fizzBuzz(0), []);
  // 10
  eq(runningSum([1, 2, 3, 4]), [1, 3, 6, 10]);
  eq(runningSum([]), []);
  eq(runningSum([-1, 1]), [-1, 0]);
  // 11
  eq(maximumWealth([[1, 5], [7, 3], [3, 5]]), 10);
  eq(maximumWealth([[2]]), 2);
  eq(maximumWealth([]), 0);
  // 12
  a = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const k = removeDuplicates(a);
  eq([k, a.slice(0, k)], [5, [0, 1, 2, 3, 4]]);
  eq(removeDuplicates([]), 0);
  eq(removeDuplicates([7]), 1);
  // 13
  eq(containsDuplicate([1, 2, 3, 4]), false);
  eq(containsDuplicate([1, 2, 3, 1]), true);
  eq(containsDuplicate([]), false);
  // 14
  a = [0, 1, 0, 3, 12];
  moveZeroes(a);
  eq(a, [1, 3, 12, 0, 0]);
  a = [0];
  moveZeroes(a);
  eq(a, [0]);
  a = [1, 2];
  moveZeroes(a);
  eq(a, [1, 2]);
  // 15
  a = [1, 2, 3, 0, 0, 0];
  merge(a, 3, [2, 5, 6], 3);
  eq(a, [1, 2, 2, 3, 5, 6]);
  a = [0];
  merge(a, 0, [1], 1);
  eq(a, [1]);
  a = [1];
  merge(a, 1, [], 0);
  eq(a, [1]);
  // 16
  eq(threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]]);
  eq(threeSum([0, 0, 0]), [[0, 0, 0]]);
  eq(threeSum([0, 1, 1]), []);
  eq(threeSum([]), []);
  eq(threeSum([0, 0, 0, 0]), [[0, 0, 0]]);
  // 17
  eq(plusOne([9, 9, 9]), [1, 0, 0, 0]);
  eq(plusOne([1, 2, 9]), [1, 3, 0]);
  eq(plusOne([0]), [1]);
  // 18
  const s = ["h", "e", "l", "l", "o"];
  reverseString(s);
  eq(s, ["o", "l", "l", "e", "h"]);
  const empty: string[] = [];
  reverseString(empty);
  eq(empty, []);
  // 19
  eq(lengthOfLastWord("   fly me   to   the moon  "), 4);
  eq(lengthOfLastWord("Hello World"), 5);
  eq(lengthOfLastWord("   "), 0);
  eq(lengthOfLastWord(""), 0);
  // 20
  eq(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
  eq(longestCommonPrefix(["dog", "racecar", "car"]), "");
  eq(longestCommonPrefix([]), "");
  eq(longestCommonPrefix(["alone"]), "alone");
  eq(longestCommonPrefix(["", "b"]), "");

  console.log("All 20 problems passed.");
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  runTests();
}
