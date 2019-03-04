
var list = require('./tour.js');
var listLen = list.length;
const perPage = 8;
var totalPage = Math.ceil(listLen/perPage);

function range(end, start = 0) {
	var arr = [];
	
	for(var i = start; i < end; i++) {
		arr.push(list[i]);
	}
	
	return arr;
}

function random(start, end) {
	return Math.floor(Math.random() * end) + start;
}

function toPageItem(e) {
	if(e == page) {
		return `<li class="page-item active">
		<a class="page-link" href="#">${e}</a></li>`;
	} else {
		return `<li class="page-item">
		<a class="page-link" href="#">${e}</a></li>`;
	}
}

// tag : 태그
// attrs : 속성 맵
// item : 태그의 데이터
function wrapHTML(tag, item, attrs = {}) {
	var arr = [];
	
	for(var a in attrs) {
		arr.push(`${a}="${attrs[a]}"`);
	}
	var attrstr = arr.join(' ');
	
	return `<${tag} ${attrstr}>\n${item}\n</${tag}>`;
}

var totalPage = Math.ceil(listLen/perPage);
var page = random(1, totalPage);

console.log(totalPage, page);

var arr2 = range(page * 10 + perPage, page * 10);
console.log(arr2);

var items = range(totalPage, 1)
		.map(toPageItem)
		.join('\n')

var pagination = wrapHTML('ul', items, {'class' : 'pagination'});
console.log(pagination);