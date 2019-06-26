<template>
	<div class="Category">
		分类
		<!-- 底部导航 -->
		<Navigate></Navigate>
	</div>
</template>

<script>
import Navigate from "@/pages/common/footer/Navigate";
export default {
	name: "Category",
	data() {
		return {};
	},
	components: {
		Navigate
	}
};
</script>


<style lang="stylus" scoped>
.home {
  font-size: 30px;
  color: red;
}
</style>
