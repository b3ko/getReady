interval = null;
var dict = {0: ["", "black"], 1: ["fa-heart","gray"] , 2: ["fa-odnoklassniki", "orange"], 3: ["fa-apple","pink"], 4: ["fa-arrows-alt","blue"]
	, 5: ["fa-chrome","red"], 6: ["fa-fort-awesome", "brown"], 7: ["fa-github-alt", "purple"], 8: ["fa-bus", "black"]};
  var current = 1;


$(document).ready(function() {
	updateDate();
	interval = setInterval(updateDate, 1000);
});

function updateDate(){
	now = new Date();
	now = now.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});
	$("#time").text(now);
}

$( ".fa-arrow-circle-right" ).click(function() {
	if($("#selected").hasClass(dict[current][0])) {
		$("#selected").removeClass(dict[current][0]);
	}
	if (current < Object.keys(dict).length - 1) {
		current = current + 1;
	}
	else {
		current = 1;
	}
	$("#selected").addClass(dict[current][0]);
	$("#selected").css("background-color",dict[current][1]);
});

$( ".fa-arrow-circle-left" ).click(function() {
	if($("#selected").hasClass(dict[current][0])) {
			$("#selected").removeClass(dict[current][0]);
		}
	if (current == 1) {
		current = Object.keys(dict).length - 1;
	}
	else {
		current = current - 1;
	}
	$("#selected").addClass(dict[current][0]);
	$("#selected").css("background-color",dict[current][1]);
});
