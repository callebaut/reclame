
		// Revolution Slider Initialize
		if($("#revolutionSlider").get(0)) {
			$("#revolutionSlider").revolution({
				delay:9000,
				startheight:500,
				startwidth:960,

				hideThumbs:10,

				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:5,

				navigationType:"both",
				navigationArrows:"verticalcentered",
				navigationStyle:"round",

				touchenabled:"on",
				onHoverStop:"on",

				navOffsetHorizontal:0,
				navOffsetVertical:20,

				stopAtSlide:-1,
				stopAfterLoops:-1,

				shadow:1,
				fullWidth:"on"
			});
		}