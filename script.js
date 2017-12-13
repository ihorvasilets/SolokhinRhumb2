//-----------------------------------------------------------------------------
//----- MENU ------------------------------------------------------------------

window.onload = function () {

//----- variables ------------------------------------------------------------------
    var sticky = document.querySelectorAll('.header-bg')[0];
    var sticky2 = document.querySelectorAll('.header-bg')[1];

    var windowWidth = window.innerWidth;
    var menuOffset  =  document.querySelectorAll('section.topImg')[0].offsetHeight;

    var respMenu = document.querySelectorAll('.header-bg ul')[0];
    var menuCounter = 0;

//----- resize ------------------------------------------------------------------
    window.addEventListener('resize', function () {
        menuOffset  =  document.querySelectorAll('section.topImg')[0].offsetHeight;
        windowWidth = window.innerWidth;
        if(document.documentElement.clientWidth >= 768){
            menuCounter = 1;
            respMenu.style.display = 'block';
        }
        else{
            menuCounter = 0;
            respMenu.style.display = 'block';
        }
    });

//-----------------------------------------------------------------------------
//----- SCROLL ----------------------------------------------------------------

//----- header ------------------------------------------------------------------
window.addEventListener('scroll', function () {
    menuOffset  =  document.querySelectorAll('section.topImg')[0].offsetHeight;
    if(window.pageYOffset > menuOffset){
        sticky.style.opacity = '0.2';
    }
    else{
        sticky.style.opacity = '1';
    }
});

//----- menu buttons ------------------------------------------------------------------
    var navMenu = document.querySelectorAll('header ul li');
    var articles = document.querySelectorAll('section h2.art');

    function scrollUp(from, to){
        var timerUp = setInterval(function(){
            window.scrollTo(0, from);
            from -= 20;
            if (from <= (to - 50)){
                clearInterval(timerUp);
            }
        }, 0);

    }

    function scrollDown(from, to){

        var timerDown = setInterval(function(){
            window.scrollTo(0, from);
            from += 20;
            if (from >= (to - 30)){
                clearInterval(timerDown);
            }
        }, 0);
    }
	
	
	/* function scrollToTarget (targetObject){
        var currentScroll = window.pageYOffset;
        targetObject = targetObject.getBoundingClientRect();
        var target = targetObject.top + currentScroll;

        if(currentScroll >= target){
            scrollUp(currentScroll, target);
        }

        else{
            scrollDown(currentScroll, target);
        }

    }
	 */
	
	/*  navMenu[2].addEventListener('click',function(){
        scrollToTarget(toPortfolio);
    });
	 */

    navMenu[0].addEventListener('click', function () {
        var currentScroll = window.pageYOffset;
        scrollUp(currentScroll, 0);
        if(windowWidth < 768){
            respMenu.style.display = 'none';
            menuCounter = 0;
        }
    });

    navMenu[1].addEventListener('click', function () {
        var currentScroll = window.pageYOffset;
        var targetObject = articles[0].getBoundingClientRect();

        var target = targetObject.top + currentScroll - 70;

        if(windowWidth <= 768){
            respMenu.style.display = 'none';
            menuCounter = 0;
        }

        if(currentScroll >= target){
            scrollUp(currentScroll, target);
        }
        else{
            scrollDown(currentScroll, target);
        }
    });
};