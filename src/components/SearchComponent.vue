<template>
	<form v-on:submit.prevent="onSubmit">
		<input type="text" class="form-control" name="search" placeholder="검색어를 입력하세요." v-model="query" v-on:keyup="onKeyup">
		<i class="fas fa-times-circle btn-reset" 
		v-show="query.length"
		v-on:click="onSearchReset"></i>
	</form>
</template>

<script>
export default {
	props: ['value'],
	data() {
		return {
			query: this.value,
		}
	},
	methods: {
		onSearchReset(e) {
			this.query = '';
			this.$emit('@reset');
		},
		onSubmit(e) {
			this.$emit('@submit', this.query);
		},
		onKeyup(e) {
			if(!this.query.length) this.onSearchReset();
		},
	}
}
</script>

<style lang="less">
.search-wrap {position: relative;}
.search-wrap .btn-reset {position: absolute; top: 12px; right: 12px; cursor: pointer;}
</style>
