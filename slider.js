document.addEventListener('DOMContentLoaded', function() {
    var leftArrow = document.getElementById('leftArrow');
    var rightArrow = document.getElementById('rightArrow');
    var slider = document.querySelector('.carroussel');

    leftArrow.addEventListener('click', function() {
        // Retirez la classe d'animation de tous les éléments
        var allSlides = document.querySelectorAll('.slider-content');
        allSlides.forEach(function(slide) {
            slide.classList.remove('slide-left');
            slide.classList.remove('slide-right');
        });

        // Ajoutez la classe d'animation appropriée à tous les <li> enfants de .carroussel
        // allSlides.forEach(function(slide) {
        //     slide.classList.add('slide-right');
        // });
        // document.querySelectorAll('.slider-content').classList.remove('slide-right')
    });
    
    rightArrow.addEventListener('click', function() {
        // Retirez la classe d'animation de tous les éléments
        var allSlides = document.querySelectorAll('.slider-content');
        allSlides.forEach(function(slide) {
            slide.classList.remove('slide-left');
            slide.classList.remove('slide-right');
        });
        

        // Ajoutez la classe d'animation appropriée à tous les <li> enfants de .carroussel
        allSlides.forEach(function(slide) {
            slide.classList.add('slide-left');
        });
        // document.querySelector('.slider-content').classList.remove('slide-left')
    });
});




document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        document.querySelectorAll('.food-items').forEach(item => {
            item.classList.add('hidden');
        });
        document.getElementById(category).classList.remove('hidden');
    });
});



function autoslide (){
    var counter = 1;
    setInterval(function(){
        document.getElementById('radio'+counter).checked = true;
        
        counter++
        if(counter>3){
            counter = 1;
        }

    },2000)
}
autoslide
let i = 0
while(i<20){
    autoslide()
i++
}