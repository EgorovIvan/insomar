$(document).ready(function () {

    $('a[href^="#"]').on('click', function (e) {

        // иначе для всех ссылок срабатывало, а не толкько для #
        if (e.currentTarget.getAttribute('href').at(0) == '#') {

            e.preventDefault();

            var target = this.hash,
                $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset()?.top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        }
    });

});

