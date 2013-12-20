/**
 * 이미지 슬라이더.
 *
 */



function Slider( container, nav ) {
	this.container = container; // container에 슬라이더의 모든요소를 담는다.
	this.nav = nav.show(); 		// css에서 안보이게한것을 우선 보이게 처리

	this.imgs = this.container.find('img');
	this.imgWidth = this.imgs[0].width; // 이미지의 너비를 가져온다.600
	this.imgsLen = this.imgs.length;    // 이미지의 갯수, 총길이

	this.current = 0; 					// 현재 depth
}


// 슬라이더 효과 가로 방향으로 흐르게하기
Slider.prototype.transition = function( coords ) {
	this.container.animate({
		'margin-left': coords || -( this.current * this.imgWidth )
	});
};


// 클릭한개체 next,prev 판단. 현재위치 판단.
Slider.prototype.setCurrent = function( dir ) {
	var pos = this.current;

	pos += ( ~~( dir === 'next' ) || -1 );
	this.current = ( pos < 0 ) ? this.imgsLen - 1 : pos % this.imgsLen;

	return pos;
};


