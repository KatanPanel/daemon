<!--
  - Copyright (c) 2020-present Katan
  -
  - Permission is hereby granted, free of charge, to any person obtaining a copy
  - of this software and associated documentation files (the "Software"), to deal
  - in the Software without restriction, including without limitation the rights
  - to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  - copies of the Software, and to permit persons to whom the Software is
  - furnished to do so, subject to the following conditions:
  -
  - The above copyright notice and this permission notice shall be included in all
  - copies or substantial portions of the Software.
  -
  - THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  - IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  - FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  - AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  - LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  - OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  - SOFTWARE.
  -->

<template>
	<v-container>
		<h4 v-text="$t('views.server.settings.title')" />
		<hr />
		<router-view />
	</v-container>
	<!-- <div class="server-settings">
		<h2>{{ $t("views.server.settings.title") }}</h2>
		<v-tabs :align-with-hr="true" class="v--m-top-4">
			<v-tab :tab="`details:${window}`">
				{{ $t("views.server.settings.tabs.details") }}
			</v-tab>
			<v-tab :tab="`users:${window}`">
				{{ $t("views.server.settings.tabs.users") }}
			</v-tab>
			<v-tab :tab="`audit-log:${window}`">
				{{ $t("views.server.settings.tabs.audit-log") }}
			</v-tab>
			<v-tab :tab="`advanced:${window}`">
				{{ $t("views.server.settings.tabs.advanced") }}
			</v-tab>
		</v-tabs>
		<hr />
		<v-tab-view :tab="`details:${window}`">
			<ServerSettingsDetails :server="getServer" />
		</v-tab-view>
		<v-tab-view :tab="`users:${window}`">
			<ServerSettingsUsers :server="getServer" />
		</v-tab-view>
		<v-tab-view :tab="`advanced:${window}`">
			<ServerSettingsAdvanced :server="getServer" />
		</v-tab-view>
	</div> -->
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VContainer from "@/app/shared/components/ui/layout/VContainer.vue";

@Component({
	components: {
		VContainer
	}
})
export default class ServerSettingsMain extends Vue {}
</script>
