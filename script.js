var slideIndex = 1;
	showSlide(slideIndex);
	
	function changeSlide(n) {
	   showSlide(slideIndex += n);
	}
	
	function showSlide(n) {
		var slides = document.getElementsByClassName("project");
		var i;
		
		for(i = 0; i < slides.length; i++) {
			slides[i].className = "project";
		}
		
		if(n > slides.length) {
			slideIndex = 1;
		}
		
		else if(n < 1) {
			slideIndex = slides.length;
		}
		
		slides[slideIndex - 1].className = "project active";
		
	}