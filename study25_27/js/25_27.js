
	function todayDate(){
		var today = new Date();
		var y = today.getFullYear();
		var month = today.getMonth();
		var date = today.getDate();
		var day = today.getDay();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		var weekend = todayDay(day);
		var weekendEg = todayDayEg(day);
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		var p = document.getElementById('p');
		p.innerHTML = y + "年" + (month + 1) + "月" + date + "日" + " " + "星期" + weekend + " " + h + ":" + m + ":" + s;
		var p1 = document.getElementById('p1');
		p1.innerHTML = y + "-" + (month + 1) + "-" + date + " " + weekendEg + " " + h + ":" + m + ":" + s + " " + "PM";
		setTimeout('todayDate()',500);
	}
	function checkTime(i){
		if (i<10) {
			i="0" + i
		}
  		return i
	}
	function todayDay(j){
		var w = new Array(7);
		if (j == 0) {
			w[j] = "日";
		}
		else if (j == 1) {
			w[j] = "一";
		}
		else if (j == 2) {
			w[j] = "二";
		}
		else if (j == 3) {
			w[j] = "三";
		}
		else if (j == 4) {
			w[j] = "四";
		}
		else if (j == 5) {
			w[j] = "五";
		}
		else {
			w[j] = "六";
		}
		return w[j];
	}
	function todayDayEg(k){
		var w = new Array(7);
		if (k == 0) {
			w[k] = "Sunday";
		}
		else if (k == 1) {
			w[k] = "Monday";
		}
		else if (k == 2) {
			w[k] = "Tuesday";
		}
		else if (k == 3) {
			w[k] = "Wednesday";
		}
		else if (k == 4) {
			w[k] = "Thursday";
		}
		else if (k == 5) {
			w[k] = "Friday";
		}
		else {
			w[k] = "Staurday";
		}
		return w[k];
	}