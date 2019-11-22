<template>
	<div v-if="isSubmit">
		<div class="mt-3">
			<span class="f-125 text-primary">상품 리스트 보기</span>
			<i class="fas fa-angle-down pointer" v-on:click="onTogglePrd"
				v-bind:class="{'fa-angle-down': !isPrdView, 'fa-angle-up': isPrdView}"></i>
		</div>
		<div class="prd-wrap my-3">
			<ul class="prds d-flex justify-content-between" v-if="isPrdView">
				<li class="prd mb-5" style="flex: 32% 0 0;" v-for="item in items" v-bind:key="item.id">
					<div><img v-bind:src="item.src" class="w-100"></div>
					<div class="f-125 py-2">{{item.title}}</div>
					<div class="f-0875 text-secondary py-2">{{item.desc}}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import PrdResult from './models/PrdResult.js';

export default {
	props: ['isView', 'query'],
	data() {
		return {
			isPrdView: false,
		}
	},
	watch: {
		query(newVal, oldVal) {
			prdSearch(newVal);
		}
	},
	methods: {
		onTogglePrd(e) {
			this.isPrdView = !this.isPrdView;
		},
		onSubmit(query) {
			this.searchBarQuery = query;
			this.searchResult();
		},
		searchResult() {
			PrdResult.list().then((result) => {
				this.isSubmit = true;
				this.items = result;
			});
		}
	}
}
</script>

<style>

</style>