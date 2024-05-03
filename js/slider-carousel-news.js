
$(document).ready(function(){
    let owl = $('.news__content');
    owl.owlCarousel({
        touchDrag:true,
        autoWidth:true,
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            751:{
                items:3
            }
        }

    });
});
