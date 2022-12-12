$(document).ready(function() {
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