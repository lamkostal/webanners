const tween1 = TweenMax.staggerFrom('.palabra', 1, {
	opacity: 0.0,
	delay: 0.2,
	ease: Bounce.easeOut,
	scale: (1.5),
	transformOrigin: '50% 50%',
	cycle: {
		rotation: [4, -4]
	},
	repeatDelay: 1.5,
	repeat: -1,
	yoyo: true
}, 0.2);

const tween2 = TweenMax.from('#log336', 2, {
	opacity: 0,
	delay: 1,
	ease: Elastic.easeOut,
	scale: (0),
	transformOrigin: '20% 50%',
	repeatDelay: 2,
	repeat: -1,


}, 0.051);
const tween3 = TweenMax.from('#log1', 1, {
	opacity: 0,
	delay: 1,
	ease: Power4.easeOut,
	scaleX: (0),
	transformOrigin: '20% 50%',
	repeatDelay: 3,
	repeat: -1,

}, 0.051);



const tween4 = TweenMax.to('#circle', 1, {
	opacity: 1,
	delay: 1,
	ease: Bounce.easeOut,
	scale: (1.2),
	transformOrigin: '50% 50%',
	repeat: -1,
	yoyo: true

}, 0.051);

const tween5 = TweenMax.to('#trigono1', 5, {
	opacity: 1,
	delay: 1,
	ease: Bounce.easeOut,
	rotation: 360,
	scale: 0.5,
	transformOrigin: '50% 50%',
	repeat: -1,
	repeatDelay: 1,
	yoyo: true

}, 0.051);
const tween6 = TweenMax.to('#trigono2', 5, {
	opacity: 1,
	delay: 1,
	ease: Bounce.easeOut,
	rotation: -360,
	scale: 0.5,
	transformOrigin: '50% 50%',
	repeat: -1,
	repeatDelay: 1,
	yoyo: true

}, 0.051);
const tween7 = TweenMax.from('#m1', 1, {
	opacity: 1,
	delay: 1,
	ease: Power2.easeOut,
	scaleY: 0,
	transformOrigin: '50% 100%',
	repeatDelay: 2,
	repeat: -1,
	yoyo: true

}, 0.051);
const tween8 = TweenMax.from('#m2', 1.5, {
	opacity: 1,
	delay: 1,
	ease: Power2.easeOut,
	scaleY: 0,
	transformOrigin: '50% 100%',
	repeat: -1,
	repeatDelay: 2,
	yoyo: true

}, 0.051);
const tween9 = TweenMax.from('#dashcurve', 1.5, {
	opacity: 1,
	delay: 0.5,
	ease: Power2.easeOut,
	scaleX: 0,
	transformOrigin: '0% 0%',
	repeat: -1,
	yoyo: true,


}, 0.0);


const tween10 = TweenMax.from('#eq1', 0.8, {
	opacity: 1,
	delay: 0.5,
	ease: Bounce.easeOut,
	scaleY: 0,
	transformOrigin: '0% 100%',
	repeat: -1,
	yoyo: true,
}, 0.0);

const tween11 = TweenMax.from('#eq2', 0.3, {
	opacity: 1,
	delay: 0.5,
	ease: Bounce.easeOut,
	scaleY: 0,
	transformOrigin: '0% 100%',
	repeat: -1,
	yoyo: true,
}, 0.0);

const tween12 = TweenMax.from('#eq3', 0.5, {
	opacity: 1,
	delay: 0.5,
	ease: Bounce.easeOut,
	scaleY: 0,
	transformOrigin: '0% 100%',
	repeat: -1,
	yoyo: true,
}, 0.0);
const tween13 = TweenMax.from('#button5', 1, {
	opacity: 0.5,
	delay: 0.5,
	ease: Power4.easeOut,
	scale: 1.4,
	transformOrigin: '50% 50%',
	repeat: -1,
	repeatDelay: 2,
}, 0.0);
const tween14 = TweenMax.from('#image', 2, {
	opacity: 0,
	delay: 0.5,
	ease: Power4.easeOut,
	scaleY: 0,
	transformOrigin: '50% 0%',
	repeat: -1,
	repeatDelay: 4,
}, 0.0);
