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
		<h4 v-text="$t('views.user-settings.title')" />
		<hr />
		<v-form>
			<v-row>
				<v-col :size="6">
					<v-form-label>
						{{ $t("views.user-settings.labels.username") }}
						<v-form-input
							:placeholder="user.username"
							:value="user.username"
						/>
					</v-form-label>
				</v-col>
				<v-col :size="6">
					<v-form-label>
						{{ $t("views.user-settings.labels.email") }}
						<v-form-input
							:placeholder="user.email"
							:value="user.email"
						/>
					</v-form-label>
				</v-col>
			</v-row>
		</v-form>
	</v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { MetaInfo } from "vue-meta";
import { generateMetaInfo } from "@/app/shared/utils/builtin";
import { lazyInject } from "@/ioc";
import { UserModel } from "@/app/user/models/user.model";

@Component({
	metaInfo(): MetaInfo {
		return generateMetaInfo(this.$i18n, "my-account.my-account");
	}
})
export default class UserMain extends Vue {
	@lazyInject() private readonly user!: UserModel;
}
</script>
