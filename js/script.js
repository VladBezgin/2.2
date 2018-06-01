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
	num = Number(arr[s]);
while (Number(arr[s]) > 9) {
	Number(arr[s]) = Number(arr[s])/10;
};
arr[s] = Math.round (Number(arr[s]));
if ( Number(arr[s]) == 3 || Number(arr[s]) == 7 ) {
	console.log(num);
} 
}
