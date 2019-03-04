var now = new Date();

console.log(now);
console.log(now.toString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toLocaleString());

console.log("현재 시간은 " + now.getFullYear() + "년 " + (now.getMonth() + 1) 
		+ "월 " + now.getDate() + "일 " + now.getHours() + ":" + now.getMinutes() + " 입니다.");

Date.prototype.twoDigitStr = function(n) {
	return n < 10 ? '0' + n : n;
}

Date.prototype.toDateString = function() {
	var year = this.getFullYear();
	var month = this.twoDigitStr(this.getMonth() + 1);
	var date = this.twoDigitStr(this.getDate());
	
	return `${year}-${month}-${date}`;
}

Date.prototype.toTimeString = function() {
	var hh = this.twoDigitStr(this.getHours());
	var mm = this.twoDigitStr(this.getMinutes());
	var ss = this.twoDigitStr(this.getSeconds());
	
	return `${hh}:${mm}:${ss}`;
}

var now = new Date();

console.log(now.toDateString(now));
console.log(now.toTimeString());