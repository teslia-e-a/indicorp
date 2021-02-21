//* video 
let video = document.querySelector('.video');
let juice = document.querySelector('.orange-juice');
let btn = document.getElementById('play-pause');
let buttonPlaySvg = document.getElementById('button-play-svg');
let buttonPauseSvg = document.getElementById('button-pause-svg');
let posterVideo = document.getElementById('poster-video');

//* переделать
function toggLePlayPause() {

	if (video.paused) {
		btn.className = 'pause';
		buttonPlaySvg.classList.remove('button-play-svg')
		buttonPlaySvg.className = 'button-pause-svg';
		buttonPauseSvg.classList.remove('button-pause-svg')
		buttonPauseSvg.className = 'button-play-svg';

		video.play();
	} else {
		btn.className = 'play';
		buttonPauseSvg.classList.remove('button-play-svg')
		buttonPauseSvg.className = 'button-pause-svg';
		buttonPlaySvg.classList.remove('button-pause-svg')
		buttonPlaySvg.className = 'button-play-svg';

		video.pause();
	}
}
function togglePosterVideo() {
	posterVideo.classList.remove('poster-video')
	posterVideo.className = 'poster-video-hidden'
};
btn.onclick = function () {
	toggLePlayPause();
}
posterVideo.onclick = function () {
	togglePosterVideo();
	toggLePlayPause();
}

video.addEventListener('timeupdate', function () {
	let juicePos = video.currentTime / video.duration;
	juice.style.width = juicePos * 100 + '%';
	if (video.ended) {
		btn.className = 'play';
		buttonPauseSvg.classList.remove('button-play-svg')
		buttonPauseSvg.className = 'button-pause-svg';
		buttonPlaySvg.classList.remove('button-pause-svg')
		buttonPlaySvg.className = 'button-play-svg';
	}
})
////////////////////////
//*бургер меню
const burger = document.querySelector('.burger'),
	nav = document.querySelector(".nav-links"),
	links = document.querySelectorAll('.nav-links li');

function slider() {
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		burger.classList.toggle('toggle');
		document.body.classList.toggle('lock');
		links.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ''
			} else {
				link.style.animation = `navLinksFade 0.2s ease forwards ${index / 10 + 0.1}s`
			}
		});
	})
}
slider()

const liHome = document.querySelectorAll('.li');
const anchors = document.querySelectorAll('a[href*="#"]');


//*якорь (for)
function navLi() {
	if (screen.width <= 768) {
		for (let liHomes of liHome) {
			liHomes.addEventListener('click', () => {
				document.querySelector('.burger').click();
			})
		}
	} else {
		for (let anchor of anchors) {
			anchor.addEventListener("click", function (event) {
				event.preventDefault();
				const blockID = anchor.getAttribute('href')
				document.querySelector('' + blockID).scrollIntoView({
					behavior: "smooth",
					block: "start"
				})
			})
			document.querySelector('.burger').click();
		}
	}
}
navLi()
