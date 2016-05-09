interval = null;

$(document).ready(function() {
	updateDate();
	interval = setInterval(updateDate, 1000);
});

function updateDate(){
	now = new Date();
	//alert(now);
	hour = now.getHours();
	minute = now.getMinutes();
	$("#hour").text(hour);
	$("#minute").text(minute);
}