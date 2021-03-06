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

import Vue from "vue";
import VueI18n from "vue-i18n";
import { MetaInfo } from "vue-meta";

export function lazyComponent(
	path: string,
	module?: string
): () => Promise<any> {
	return () => {
		return import(`@/app/${module || "shared"}/components/${path}.vue`);
	};
}

export function lazyView(path: string, module?: string): () => Promise<any> {
	return () => {
		return import(`@/app/${module || "shared"}/views/${path}.vue`);
	};
}

export function requireView(path: string, module?: string): () => Vue {
	return () => {
		return require(`@/app/${module || "shared"}/views/${path}.vue`).default;
	};
}

/**
 * Generates metadata information using the specified title key.
 * @param i18n
 * @param {string} title - title key.
 * @param {...*} args - arguments for translating the title.
 */
export function generateMetaInfo(
	i18n: VueI18n,
	title: string,
	args?: VueI18n.Values
): MetaInfo {
	return {
		title: i18n.t(`page-titles.${title}`, args) as string
	};
}
