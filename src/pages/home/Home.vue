<template>
	<div class="home">
		首页
		<!-- 底部导航 -->
		<Navigate></Navigate>
	</div>
</template>

<script>
import Navigate from "@/pages/common/footer/Navigate";
export default {
	name: "home",
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
