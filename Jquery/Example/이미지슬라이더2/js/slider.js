/**
 * 이미지 슬라이더
 *
 * 
 */



// 절차적 방법
(function($) {
	var sliderUL = $('div.slider').children('ul'),
		imgs = sliderUL.find('img'),
		imgWidth = imgs[0].width, // 600
		imgsLen = imgs.length, // 4
		current = 1,
		totalImgsWidth = imgsLen * imgWidth; // 2400

	$('#slider-nav').show().find('button').on('click', function() {
		var direction = $(this).data('dir'),
			loc = imgWidth; // 600, 슬라이더에서 보여지는 이미지 너비

		//현재 값을 업데이트
		// ( direction === 'next' ) {
		// 	current = current + 1; // current += 1; // 2
		// } else {
		// 	corrent = current - 1; // current -= 1; // 0
		// }
		// 
		// ( test ) ? true : false;
		( direction === 'next' ) ? ++current : --current;


		// 첫번째 이미지의 경우
		if ( current === 0 ) {
			current = imgsLen; // 4
			loc = totalImgsWidth - imgWidth; // 2400 - 600 = 1800 // 현재슬라이더의 위치값,맨끝인지를 판단하기위함
			direction = 'next';
		} else if ( current - 1 === imgsLen ) { // 끝일경우 다시 설정.
			current = 1;
			loc = 0;
		}

		transition(sliderUL, loc, direction);
	});

	function transition( container, loc, direction ) {
		var unit; // -= +=

		if ( direction && loc !== 0 ) {
			unit = ( direction === 'next' ) ? '-=' : '+=';
		}

		// margin 을 이용해서 슬라이딩되게 한다.
		container.animate({
			'margin-left': unit ? (unit + loc) : loc
			// 'margin-left': '-=600' // 이미지너비만큼 빼줘야한다. 
			// 맨끝일경우에도 margin-left 가 진행되기때문에 처음으로 되돌리는 작업필요함
			// 'margin-left': unit + 600 // -=600
			// unit ? ('-=600') : loc
		});
	}

})(jQuery);