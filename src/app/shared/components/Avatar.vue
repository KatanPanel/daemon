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
	<div
		v-bind="{ title: alt }"
		:style="{ backgroundImage: `url(${src})` }"
		v-if="src"
		class="avatar"
	/>
	<TheLogo
		v-else
		:alt="alt"
		:containerized="true"
		:filled="true"
		class="avatar"
	/>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TheLogo from "@/app/shared/components/TheLogo.vue";

@Component({
	components: { TheLogo }
})
export default class Avatar extends Vue {
	@Prop({ type: String }) private readonly src!: string;
	@Prop({ type: String }) private readonly alt!: string;
}
</script>
<style lang="scss" scoped>
.avatar {
	width: 64px;
	height: 64px;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 50%;
}
</style>
