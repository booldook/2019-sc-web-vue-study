let items = [
	{id:1, title:"연어", desc:"맛있는 연어", src:"../img/salmon.jpg"},
	{id:2, title:"체리", desc:"싱싱한 체리", src:"../img/cherries.jpg"},
	{id:3, title:"와인", desc:"오래된 와인", src:"../img/wine.jpg"},
];

export default {
	list() {
		return new Promise((resolve, reject) => {
			resolve(items);
		});
	},
	remove(id) {
		return new Promise((resolve, reject) => {
			items = items.filter(item => item.id != id);
			resolve(items);
		});
	}
}
