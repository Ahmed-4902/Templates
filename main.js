let clips = document.querySelectorAll("li a video");

// for (let i = 0; i < clips.length; i++) {
// 	clips[i].addEventListener("mouseover", function () {
// 		this.play();
// 	});
// 	clips[i].addEventListener("mouseleave", function () {
// 		this.pause();
// 	});
// }

let counter = setTimeout(function () {
	console.log("on");
	for (let i = 0; i < clips.length; i++) {
		clips[i].addEventListener("mouseover", function () {
			console.log(this);
			this.play();
			if (this.play()) {
				clearTimeout(counter);
			}
		});
		clips[i].addEventListener("mouseleave", function () {
			this.pause();
		});
	}
}, 3000);
