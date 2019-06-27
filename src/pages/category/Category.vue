<template>
	<div class="Category">
		<!-- 头部组件 -->
		<TopHeader custom-title="分类" custom-fixed>
			<!-- <i slot="backBtn" class="iconfont icon-fanhui"></i> -->
			<!-- <i slot="rightBtn" class="iconfont icon-lajitong"></i> -->
		</TopHeader>

		<!-- 底部导航 -->
		<Navigate></Navigate>
	</div>
</template>

<script>
import TopHeader from "@/pages/common/header/TopHeader"
import Navigate from "@/pages/common/footer/Navigate";
export default {
	name: "Category",
	data() {
		return {};
	},
	components: {
		TopHeader,
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
