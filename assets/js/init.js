$(document).ready(function() {

    // store height and width of the window as variables
    var width = $('#window').width();
    var height = $('#window').height();

    // function to get random number between a range of 2 numbers
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    // do this code for each image on the page
    $('#grid a').each(function () {

        // get a random height within the height of the window
        var rndTop = randomIntFromInterval(1, height)
        // get a random width within the width of the window
        var rndLeft = randomIntFromInterval(1, width)         

        if(rndTop < 160) {
            rndTop = 160;
        }

        if(rndLeft < 100) {
            rndLeft = 100;
        }

        // set the position of the current image
        $(this).css({
            'top': rndTop-60 +'px',
            'left': rndLeft-60+'px'
        })
    });

    $('.lines').click(function(){
        $('#menu').addClass('active');
    });

    $('#close').click(function(){
        $('#menu').removeClass('active');
    });

    /* hover */
    var movement;

    $('#grid a').hover(function(){
        movement = $(this).data('movement');
        $(this).find('img').attr('src', 'assets/img/gifs/'+movement+'');
    }, function(){
        $(this).find('img').attr('src', 'assets/img/stills/basicstill.png');
    });

    function change(id) {
        
        var movement = $('#'+id).data('movement');
        var src = $('#'+id).find('img').attr('src');
        console.log(src);

        if(src == 'assets/img/gifs/'+movement){
            $('#'+id).find('img').attr('src', 'assets/img/stills/basicstill.png');
        } else {
            $('#'+id).find('img').attr('src', 'assets/img/gifs/'+movement+'');
        }

    }

        $('#grid a').each(function(){
            var id = $(this).attr('id')
            var rand = Math.round(Math.random() * (15000 - 10000)) + 1000;
            setTimeout(function() {
                change(id);
            }, rand);
            console.log(rand)
        });

    /* scrolling for interviews */

    if(!!window.IntersectionObserver){
        let observer = new IntersectionObserver((entries, observer) => { 
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    console.log(entry);
                    entry.target.classList.add("show");
                        // entry.target.src = entry.target.dataset.src;
                        // observer.unobserve(entry.target);
                } else {
                        // entry.target.classList.remove("show");                       
                }
            });
        }, {rootMargin: "0px 0px -50px 0px"});
        
        document.querySelectorAll('.text').forEach(div => { observer.observe(div) });
    }

    else document.querySelector('#warning').style.display = 'block';

});