$( document ).ready(function() {
console.log( "ready!" );

	var newWord = "Word";
	var foo = 0;
	var wordArr = ["Killin it","Chillin it", "Illin it", "Everyday"];
	
/**
 * Randomize array element order in-place.
 * Using Fisher-Yates shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
	console.log("EVERYDAY IM SHUFFLIN");
}

shuffleArray(wordArr);

	$(".content").on("click", function() {
		console.log("CLICK!");
		
		
		$("#mainWord").html(wordArr[foo]);
		foo++;
		
		if (foo > 3) {
			foo = 0;
		};
		
		
	});









});