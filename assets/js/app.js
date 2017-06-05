var indicador = 0;

$(document).on('ready', function(){
	$('.btn-left').on('click', function(e){
		moveSlider('left');
	});
	$('.btn-right').on('click', function(e){
		moveSlider('right');
	});
	defineSizes();
});

function defineSizes(){
	$('.container .slide').each(function(i, e){
		$(e).css({
			'background-image': "url("+$(e).data("background")+")",
			'height': ($('.container').width() * 0.45)+'px',
			'width': ($('.container').width())+'px'
		});
	});
}

function moveSlider(direccion){
	var limite = $('.container .slide').length;
	
	indicador = (direccion == 'right') ? indicador + 1 : indicador - 1; 
	indicador = (indicador >= limite) ? 0 : indicador; 
	indicador = (indicador < 0) ? limite - 1 : indicador; 
	
	$('.container .slide-container').animate({
		'margin-left' : -(indicador * $('.container').width())+'px'
	});
}

var autoSlide = setInterval(autoshow, 5000);
  function autoshow(){
    moveSlider(1);
  }