
$(document).ready(function() {


	var size = 17;
	var area = 500;

	function createGrid(size) {

		$(".blue").remove();

		for (var i = 0; i < size; i++) {
			for (var j = 0; j < size; j++) {
				$(".inner").append("<div class = 'blue'></div>");
			}
			$(".inner").append("<div class = 'clear'></div>")	
		};

		$(".clear").css({"clear": "both"});
		$(".blue").width(area/size);  
		$(".blue").height(area/size); 
		$(".blue").css({"box-sizing": "border-box", "float": "left", "display": "inline", "vertical-align": "top", "border": "1px solid #83993e"})


		$(".blue").on("mouseenter", function(){
			$(this).addClass("black");
		$(".black").css({"background-color": "#132613", "border": "0"});
		})
	};

	createGrid(size);
		
		$(".left").on("click", function() {;
			$(this).parent().find(".black").removeClass("black");
			$(".blue").css({"background-color": "#adcc51", "border": "1px solid #83993e"});
			alert("Shake Shake Shake!");
		});


		$(".right").on("click", function() {
			var newSize = prompt("How many squares across?");
				if (newSize > 1 && newSize < 100) {
					createGrid(newSize);
				}
				else {
					alert("Try a whole number between 1 - 100")
				}
		});
		
});
