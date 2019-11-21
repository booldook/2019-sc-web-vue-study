<template>
	<div id="app">
		<div class="container">
			<div class="jumbotron">
				<h1>{{title}}</h1>
			</div>
			<div class="search-wrap">
				<search-bar v-bind:value="searchBarQuery" v-on:@submit="onSubmit" v-on:@reset="onSearchReset"></search-bar>
			</div>
			<div v-if="isSubmit">
				<div class="mt-3">
					<span class="f-125 text-primary">상품 리스트 보기</span>
					<i class="fas fa-angle-down pointer" 
					v-on:click="onTogglePrd"
					v-bind:class="{'fa-angle-down': !isPrdView, 'fa-angle-up': isPrdView}"></i>
				</div>
				<div class="prd-wrap my-3">
					<ul class="prds d-flex justify-content-between" v-if="isPrdView">
						<li class="prd mb-5" style="flex: 32% 0 0;" v-for="item in items">
							<div><img v-bind:src="item.src" class="w-100"></div>
							<div class="f-125 py-2">{{item.title}}</div>
							<div class="f-0875 text-secondary py-2">{{item.desc}}</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PrdResult from './models/PrdResult.js';

import SearchComponent from './components/SearchComponent.vue';

export default {
	name: 'app',
	components: {
		'search-bar': SearchComponent,
	},
	data() {
		return {
			title: "Vue를 배워봅시다.",
			isPrdView: true,
			searchBarQuery: '',
			isSubmit: false,
		}
	},
	created() {
		
	},
	methods: {
		onTogglePrd(e) {
			this.isPrdView = !this.isPrdView;
		},
		onSubmit(query) {
			this.searchBarQuery = query;
			this.searchResult();
		},
		onSearchReset() {
			this.isSubmit = false;
			this.items = [];
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

<style lang="less">
html, body {margin: 0; padding: 0;}
dl, ul, ol, li {list-style: none; margin: 0; padding: 0;}
th, td {vertical-align: middle !important;}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
