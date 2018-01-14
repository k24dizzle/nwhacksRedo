$(document).ready(function() {

	var gesture_index = 0;
	// Add gestures here! Important if you add the JSON make sure you add the
	// gesture name in this array!
	var gestures = [
		"no",
		"thank you",
		"left",
		"yes",
		"up",
		"hello"
	]

	var curr_phrase = $("#curr_phrase");
	var next_phrase = $("#next_phrase");
	var checkmark = $(".checkmark");
	checkmark.css({display: "none"});
	curr_phrase.text("\"" +gestures[gesture_index]+"\"");

	var video = document.getElementById('hand_gif');
	var source = document.getElementById('gif_source');
	source.setAttribute('src',"assets/" + gestures[gesture_index] + ".mp4" );
	video.load();
	video.play();

	// User would like to move to the next gesture
	next_phrase.on("click", function() {
		gesture_index++;
		$("#check_box").fadeOut("slow");
		$("#percent").text("0% Accuracy");

		setTimeout(function() {
			video.pause();
			source.setAttribute('src',"assets/" + gestures[gesture_index] + ".mp4" );
			if(gestures[gesture_index]=="hello" || gestures[gesture_index] == "left"){
				$("#hand_gif").css("margin-top","0");
			} else {
				$("#hand_gif").css("margin-top","-113px");
			}

			video.load();
			video.play();

		}, 200);


		if (gesture_index < gestures.length - 1) {
			curr_phrase.text("\"" +gestures[gesture_index]+"\"");

		} else if (gesture_index == gestures.length-1) {
			// Display to the user that you are done and can start over!
			curr_phrase.text("\"" +gestures[gesture_index]+"\"");
			next_phrase.text("Start Over!");
		} else {
			gesture_index = 0;
			curr_phrase.text("\"" +gestures[gesture_index]+"\"");
			next_phrase.text("continue");
		}
	});

	var trainer = new LeapTrainer.Controller({controller: control, hitThreshold: 2.0});
	control.connect();

	for (var i = 0; i < gestures.length; i++) {
		$.getJSON("data/" + gestures[i] + ".json", function(data) {
			console.log(data);
			trainer.fromJSON(JSON.stringify(data));
		});
	}

	trainer.fromJSON('{"name":"RIGHTHAND2","pose":false,"data":[[{"x":-0.26035060855424835,"y":0.1266070208688641,"z":0.19666585536184206,"stroke":1},{"x":-0.346369058898077,"y":0.041599759375700734,"z":-0.07290719853286212,"stroke":1},{"x":-0.48764697723151945,"y":0.0006285346334281849,"z":0.059956947059116195,"stroke":1},{"x":-0.27313160794370944,"y":0.09979795937977112,"z":0.19532412312291864,"stroke":1},{"x":-0.09394469854722554,"y":0.0038030009069563303,"z":-0.03812130842066502,"stroke":1},{"x":-0.27687564891598615,"y":-0.07507443399176747,"z":-0.08486014327915471,"stroke":1},{"x":-0.2796744578358801,"y":0.048236167079358294,"z":0.16198355271614812,"stroke":1},{"x":0.048469971270132695,"y":0.020393426034665568,"z":0.029323034743528542,"stroke":1},{"x":-0.0584989333463683,"y":-0.07154424136527557,"z":-0.16192420972769656,"stroke":1},{"x":-0.202225356351524,"y":-0.01911183264486776,"z":0.052415438144430226,"stroke":1},{"x":0.14393249232591926,"y":0.014554457598189768,"z":0.07118632333319558,"stroke":1},{"x":0.13562043142288865,"y":-0.0741420333632684,"z":-0.2049902212529599,"stroke":1},{"x":-0.08765642982169908,"y":-0.0481047476110294,"z":-0.0006078491671045183,"stroke":1},{"x":0.22566672191274678,"y":0.016949850148450463,"z":0.10558935917204232,"stroke":1},{"x":0.31447290458310956,"y":-0.04002834581420272,"z":-0.16981236569272926,"stroke":1},{"x":0.035781468184362286,"y":-0.05928305979540231,"z":-0.08505421369465167,"stroke":1},{"x":0.20259696735247074,"y":0.02479132749534932,"z":0.13236743706047055,"stroke":1},{"x":0.44993311999072777,"y":-0.011462206309232767,"z":-0.08235248850237256,"stroke":1},{"x":0.17941561568344727,"y":-0.05439129566431433,"z":-0.1545766410265398,"stroke":1},{"x":0.1181310619519515,"y":0.03866476921877435,"z":0.08773741203322993,"stroke":1},{"x":0.5123530227684805,"y":0.017115923819853093,"z":-0.03734284345018554,"stroke":1}]]}');

	// trainer.on("gesture-recognized", function(hit, gestureName) {
	// 	console.log(hit);
	// });

	trainer.on("gesture-unknown", function(hit, gestureName) {
		if (gesture_index < gestures.length) {
			var current = gestures[gesture_index];
			current = current.toUpperCase();
			if (hit[current] >= 0.50) {
				$("#check_box").css({display: ""});
				checkmark.css({display: ""});
			}
			$("#percent").text(Math.round(hit[current] * 100) + "% Accuracy");
		}
	});
});
