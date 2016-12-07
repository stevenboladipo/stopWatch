

window.onload = function(){
	$('#lap').click(stopwatch.recordLap);
	$('#stop').click(stopwatch.stop);
	$('#reset').click(stopwatch.reset);
	$('#start').click(stopwatch.start);
};

var stopwatch = {
	time:0,
	lap:1,
	reset: function () {
		stopwatch.time = 0;
		stopwatch.lap = 1;

		$('#display').html('00:00');
		$('#laps').html('');
},

start: function (){
	counter = setInterval(stopwatch.count, 1000);
},
stop: function(){
	clearInterval(counter);

},

recordLap: function(){
	var converted = stopwatch.timeConverter(stopwatch.time);
	$('#laps').append('<p>Lap '+ stopwatch.lap + ' : ' + converted + '</p>');
	stopwatch.lap++;
},
count: function(){

stopwatch.time++;

var converted = stopwatch.timeConverter(stopwatch.time);



$('#display').html(converted);

},

timeConverter: function(t){
	var minutes = Math.floor(t/60);
	var seconds = t-(minutes * 60);
		if (seconds < 10){
			seconds = "0" + seconds;
	}
	if (minutes === 0){
		minutes = "00";

	} else if (minutes < 10){
		minutes = "0" + minutes;
	}

		return minutes = "t" + seconds;
		}
	};