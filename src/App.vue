<template>
	<div id="app">
		<div class="container">
			<div class="jumbotron">
				<h1>{{title}}</h1>
			</div>
			<search-bar 
			v-bind:value="searchBarQuery" 
			v-on:@submit="onSubmit" 
			v-on:@reset="onSearchReset"></search-bar>
			<prd-result 
			v-bind:isView="isSubmit" 
			v-bind:query="searchBarQuery"></prd-result>
		</div>
	</div>
</template>

<script>
import SearchComponent from './components/SearchComponent.vue';
import PrdComponent from './components/PrdComponent.vue';

export default {
	name: 'app',
	components: {
		'search-bar': SearchComponent,
		'prd-result': PrdComponent,
	},
	data() {
		return {
			title: "Vue를 배워봅시다.",
			searchBarQuery: '',
			isSubmit: false,
		}
	},
	created() {
		
	},
	methods: {
		onSearchReset() {
			this.isSubmit = false;
			this.searchBarQuery = '';
		},
		onSubmit(query) {
			this.searchBarQuery = query;
			this.isSubmit = true;
		},
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
