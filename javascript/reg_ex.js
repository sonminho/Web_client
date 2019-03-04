var str = "test S123 s-45 s67M S-8m s-123M s-superTM";
var result = str.search("[sS]-[0-9]*T?M");

console.log(result);

// FLAG
// i : 대소문자 무시함
// g : 일치하는 모든 경우를 찾음
// m : 개행문자가 있는 경우 ^와 $가 각 줄의 시작과 끝을 인식함
var fname = "abc.Mp3";
var result = fname.search(/.(mp3|wav|wma|mp4)$/i);

if (result >= 0) {
	console.log("true");
} else {
	console.log("false");
}

// 위치 패턴
// ^ : 문자열의 시작 부분에 나타남
// $ : 문자열의 끝에 나타남
var str = "890629-1914920";
var result = str.search(/[0-9]{6}-[1234][0-9]{6}/);

if(result != -1) {
	console.log("유효한 주민번호 입니다.")
} else {
	console.log("유효하지 않은 주민번호 입니다.")
}

var str = "내가 그린 기린 그림은 암 기린을 그린 기린 그림이다.";
var result = str.replace(/기린\s/g, "코끼리 ");

console.log(str);
console.log(result);

var count = 1;
var str = "생각이란 생각할수록 생각이 나므로 생각하지 말아야 할 생각은 " +
	"생각하지 않으려고 하는 생각이 옳은 생각이라고 생각합니다.";
var result = str.replace(/생각/g, "[$&]");
console.log(str);
console.log("-------");
console.log(result);

var count = 1;
var str = "생각이란 생각할수록 생각이 나므로 생각하지 말아야 할 생각은 " +
	"생각하지 않으려고 하는 생각이 옳은 생각이라고 생각합니다.";
var result = str.replace(/생각/g, function(value) {
	return value + "(" + count++ + ")";
});
console.log(str);
console.log("-------");
console.log(result);

var links = {
		'네이버' : 'https://www.naver.com',
		'다음' : 'https://www.daum.net'
};
var str = `네이버와 다음은 한국의 대표적인 포털사이트입니다.`;
console.log(str);

var result = str.replace(/(네이버|다음)/g, function(site) {
	//return site.link(links[site]);
	return `<a href="${links[site]}" target="_blank">${site}</a>`;
});
console.log(result);

var filter = Object.keys(links).join("|");
var reg = new RegExp(filter, "g");
var result = str.replace(reg, function(site) {
	return `<a href="${links[site]}" target="_blank">${site}</a>`;
});
console.log(result);