//javascript

let btnTop = document.querySelector('.btn_top');
let documentEl = document.documentElement;


window.addEventListener('scroll', function(){
	let pageTop = documentEl.scrollTop;
	console.log(pageTop);
	if(pageTop > 100) {
		btnTop.classList.add('visible');
		//btn_Top.style.opacity = '1';
	} else {
		btnTop.classList.remove('visible');
		//btn_Top.style.opacity = '0'; 
  }
});

btnTop.addEventListener('click', function(){
	$(documentEl).animate({scrollTop: 0}, 500);   //jQuery쓰는 법
});

let changeListBtn = document.querySelector('.btn_listType');
let changeCardBtn = document.querySelector('.btn_cardType');
let listWrap = document.querySelector('.main_wrap');
let listUl = document.querySelector('.main_Nb');


changeListBtn.addEventListener('click', function(){
	listWrap.classList.add('change_list');
	listUl.classList.add('change_list');
});

changeCardBtn.addEventListener('click', function(){
	listWrap.classList.remove('change_list');	listUl.classList.remove('change_list');
});


/*
$(window).scroll(function(){
	if($(window).scrollTopc()+$(window).height() == $(document).height()){
		alert('bottom!');
	}
})*/