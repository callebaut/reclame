
		// Revolution Slider Initialize
		if($("#revolutionSlider").get(0)) {
			$("#revolutionSlider").revolution({
				delay:9000,
				startheight:1920,
				startwidth:1080,

				hideThumbs:10,


				navOffsetHorizontal:0,
				navOffsetVertical:20,

				stopAtSlide:-1,
				stopAfterLoops:-1,

				shadow:1,
				fullWidth:"on"
			});
		}