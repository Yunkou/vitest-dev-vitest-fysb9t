import { it, expect } from "vitest";
import { isPasswordAllowed } from "../auth";

it("should return true when password is allowed", () => {
  expect(isPasswordAllowed("aBc123!")).toBeTruthy();
});

it("isPasswordAllowed returns false for invalid passwords", () => {
  expect(isPasswordAllowed("a2c!")).toBeFalsy();
  expect(isPasswordAllowed("123456!")).toBeFalsy();
  expect(isPasswordAllowed("ABCdef!")).toBeFalsy();
  expect(isPasswordAllowed("abc123!")).toBeFalsy();
  expect(isPasswordAllowed("ABC123!")).toBeFalsy();
  expect(isPasswordAllowed("ABCdef123")).toBeFalsy();
});

// 测试用例
// 1️⃣ 验证通过
// - !aBc123
// 2️⃣ 验证失败
// - a2c! // 太短
// - 123456! // 没有字母
// - ABCdef! // 没有数字
// - abc123! // 没有大写字母
// - ABC123! // 没有小写字母
// - ABCdef123 // 没有特殊字符
