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

import { NavigationGuardNext, Route, RouteConfig } from "vue-router";
import { LOGIN_LAYOUT, PANEL_LAYOUT } from "@/layouts";
import { verifyAuth } from "@/store/auth";
import Panel from "@/views/Panel.vue";
import { AuthenticatedOnlyGuard } from "@/common/internal/guards/authenticated-only";
import Home from "@/views/Home.vue";
import Account from "@/views/account/Account.vue";
import Login from "@/views/auth/Login.vue";
import { importVM } from "@/common/internal";

export default [
	{
		path: "/login",
		name: "login",
		component: Login,
		meta: { layout: LOGIN_LAYOUT },
		beforeEnter: (to: Route, from: Route, next: NavigationGuardNext) => {
			return verifyAuth().finally(() => next());
		},
	},
	{
		path: "/",
		component: Panel,
		meta: { layout: PANEL_LAYOUT },
		beforeEnter: AuthenticatedOnlyGuard,
		children: [
			{
				path: "",
				name: "home",
				component: Home,
			},
			{
				path: "library",
				name: "games",
				component: importVM("GameLibrary"),
			},
			{
				path: "account",
				name: "account",
				component: Account,
			},
			{
				path: "server/:serverId",
				name: "server",
				component: importVM("server/Server"),
				props: true,
				children: [
					{
						path: "overview",
						name: "server.overview",
						component: importVM("server/ServerOverview"),
					},
					{
						path: "console",
						name: "server.console",
						component: importVM("server/ServerConsole"),
					},
					{
						path: "fs",
						name: "server.fs",
						component: importVM("server/ServerFS"),
						children: [
							{
								path: "disk/:disk",
								name: "server.fs.disk",
								component: importVM("server/fs/ServerFSDisk"),
							},
						],
					},
					{
						path: "settings",
						name: "server.settings",
						component: importVM("server/ServerSettings"),
					},
				],
			},
			{
				path: "system/accounts",
				name: "system.accounts",
				component: importVM("system/SystemAccounts"),
			},
			{
				path: "advanced/settings",
				component: importVM("advanced/AdvancedSettings"),
				children: [
					{
						path: "",
						name: "advanced.settings",
						component: importVM("advanced/AdvancedSettingsIndex"),
					},
					{
						path: "apparence",
						name: "advanced.settings.appearence",
						component: importVM(
							"advanced/AdvancedSettingsAppearence"
						),
					},
					{
						path: "language",
						name: "advanced.settings.language",
						component: importVM(
							"advanced/AdvancedSettingsLanguage"
						),
					},
					{
						path: "performance",
						name: "advanced.settings.performance",
						component: importVM(
							"advanced/AdvancedSettingsPerformance"
						),
					},
				],
			},
		],
	},
	{
		path: "*",
		redirect: "/",
	},
] as RouteConfig[];
