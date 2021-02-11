/*
 * Copyright (c) 2020-present Katan
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * Returns `true` if the {@param value} is `undefined` or `false` otherwise.
 * @param {*} value - the value.
 */
export function isUndefined(value: any): boolean {
	return typeof value === "undefined";
}

/**
 * Returns `true` if the {@param value} is a number or `false` otherwise.
 * @param {*} value - the value.
 */
export function isNumber(value: any): boolean {
	return typeof value === "number";
}

/**
 * Returns `null` if the {@param value} is `undefined` or the value itself otherwise.
 * @param {T | null | undefined} value - the value.
 */
export function undefinedToNull<T = any>(
	value: T | null | undefined
): T | null {
	return value || null;
}