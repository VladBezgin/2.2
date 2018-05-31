var week = [ 'Понедельник', "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение" ];

for(let i = 0; i < 7; i++) {
	if(i == 3) {
		document.write( '<em>' + week[i] +'</em><br>' );
	} else if (i > 4) {
		document.write( '<b>' + week[i] + '</b><br>');
	} else {
		document.write(week[i] + '<br>');
	}
};

var arr = ['314', '55254', '744564', '8186', '964', '2464', '4465'];

for (let s = 0; s < 7; s++) {
	num = arr[s];
while (arr[s] > 9) {
	arr[s] = arr[s]/10;
};
arr[s] = Math.round (arr[s]);
if ( arr[s] == 3 || arr[s] == 7 ) {
	console.log(num);
} 
}