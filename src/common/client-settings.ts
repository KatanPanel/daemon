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

import { Language } from "@/common/language";
import { commit } from "@/common/utils/vuex";
import { ROOT_MODULE } from "@/store";
import { UPDATE_CLIENT_SETTINGS } from "@/store/mutations";

export const LIGHT_THEME = "light";
export const DARK_THEME = "dark";

/**
 * Represents all possible configurations of who is currently using the application.
 * These settings are per browser and are saved to the client's local storage.
 *
 * `undefined` values mean that the client has not yet touched that configuration
 * and null values were explicitly defined by the developer to represent some imaginary,
 * fictitious value, however, defined for some reason and its `null` value will later be used for comparison.
 */
export interface ClientSettings {
	/**
	 * Current client theme, `null` value means that the defined
	 * theme will be the default theme of the client's machine.
	 */
	theme?: string;

	/**
	 * The current language of the website for the client,
	 * the possible values are all supported languages and is never null or undefined.
	 */
	language?: Language;

	/**
	 * Configuration related to servers.
	 */
	readonly serverSettings: ClientServerSettings;
}

/**
 * This configuration is an important part of Katan's performance, varying from client to client.
 *
 * Due to the nature of the Katan it keeps the **state of the servers always active** regardless of whether
 * they are being accessed or not, so changing specific settings that pause, remove or change states
 * so that they are inactive, the choice of the client, is important.
 */
export interface ClientServerSettings {
	/**
	 * It is the time when the client will send a request to the server asking for data
	 * from the server resource, the data from the `katan stats`, in the CLI, basically.
	 *
	 * `undefined` or `null` value means that the customer will hear the resources in real time.
	 * Time is measured in milliseconds.
	 */
	resourceUpdateTime?: number;
}

/**
 * Updates client settings using partial data.
 * @param {Partial<ClientSettings>} settings - new keys and values to be applied.
 */
export function updateClientSettings(settings: Partial<ClientSettings>): void {
	commit(ROOT_MODULE, UPDATE_CLIENT_SETTINGS, settings);
}
