<template>
	<div v-if="isSubmit">
		<div class="mt-3">
			<span class="f-125 text-primary">상품 리스트 보기</span>
			<i class="fas fa-angle-down pointer" v-on:click="onTogglePrd"
				v-bind:class="{'fa-angle-down': !isShow, 'fa-angle-up': isShow}"></i>
		</div>
		<div class="prd-wrap my-3">
			<ul class="prds d-flex justify-content-between flex-wrap" v-if="isShow">
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
import PrdResult from '../models/PrdResult.js';

export default {
	props: ['query'],
	data() {
		return {
			isShow: false,
			isSubmit: false,
			items: [],
		}
	},
	watch: {
		query(newVal, oldVal) {
			this.prdSearch();
		}
	},
	methods: {
		onTogglePrd(e) {
			this.isShow = !this.isShow;
		},
		prdSearch() {
			if(this.query != "") {
				PrdResult.list(this.query).then((result) => {
					this.isSubmit = true;
					this.isShow = true;
					this.items = result.data;
					console.log(result);
				});
			}
			else {
				this.isSubmit = false;
				this.isShow = false;
				this.items = [];
			}
		}
	}
}
</script>

<style>

</style>