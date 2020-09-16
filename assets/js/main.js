// Вызов бокового меню
var menuBtn = document.querySelectorAll(".menu-btn");
for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click", function () {
        var sidenav = document.querySelector(".sidenav");
        sidenav.classList.toggle("sidenav_active");
    });
}
var sidenavClose = document.querySelectorAll(".sidenav__close");
for (let i = 0; i < sidenavClose.length; i++) {
    sidenavClose[i].addEventListener("click", function () {
        var sidenav = document.querySelector(".sidenav");
        sidenav.classList.remove("sidenav_active");
    });
}

document.addEventListener("scroll", function () {
    var body = document.querySelector("body");
    if (body.offsetWidth < 992) {
        var scrY = window.scrollY;
        if (scrY > 200) {
            console.log("Хуяк достали мобильный фиксированный хеадер");
        } else {
            console.log("Хуяк убрали мобильный фиксированный хеадер");
        }
    }
});







$("document").ready(function () {
    // Slick-carousel для примеров работ
    $(".photo-works__list").slick({
        // Отображаем стрелки (true | false def:true)
        arrows: true,
        // Отображаем точки (true | false def:false)
        dots: true,
        // Количество отображаемых слайдов (number def:1)
        slidesToShow: 1,
        // Количество пролистываемых слайдов (number def:1)
        slidesToScroll: 1,
        // Отвечает за скорость пролистывания слайдев в милисекундах (number def:300) 
        speed: 300,
        // Упределяет является ли слайдер бесконечным (true | false def:true)
        infinite: true,
        // Отвечает за автоматическое пролистывание слайдов (true | false def:false)
        autoplay: false,
        // Позволяет создавать настройки под несколько вариантов ширины экрана
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    });

    // Slick-carousel для отзывов клиентов
    $(".reviews").slick({
        // Отображаем стрелки (true | false def:true)
        arrows: false,
        // Отображаем точки (true | false def:false)
        dots: true,
        // Количество отображаемых слайдов (number def:1)
        slidesToShow: 2,
        // Количество пролистываемых слайдов (number def:1)
        slidesToScroll: 1,
        // Отвечает за скорость пролистывания слайдев в милисекундах (number def:300) 
        speed: 300,
        // Упределяет является ли слайдер бесконечным (true | false def:true)
        infinite: true,
        // Отвечает за автоматическое пролистывание слайдов (true | false def:false)
        autoplay: false,
        // Позволяет создавать настройки под несколько вариантов ширины экрана
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    });

    // Slick-carousel для наших партнеров
    $(".partners").slick({
        // Отображаем стрелки (true | false def:true)
        arrows: false,
        // Отображаем точки (true | false def:false)
        dots: false,
        // Количество отображаемых слайдов (number def:1)
        slidesToShow: 6,
        // Количество пролистываемых слайдов (number def:1)
        slidesToScroll: 2,
        // Отвечает за скорость пролистывания слайдев в милисекундах (number def:300) 
        speed: 300,
        // Упределяет является ли слайдер бесконечным (true | false def:true)
        infinite: true,
        // Отвечает за автоматическое пролистывание слайдов (true | false def:false)
        autoplay: false,
        // Позволяет создавать настройки под несколько вариантов ширины экрана
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
        ],
    });

    // FAQ logic
    $('.faq__item').click(function () {
        $(this).children('.faq__question').toggleClass('faq__question_active');
        $(this).children('.faq__answer').slideToggle();
    });

    // JS для отправки ajax-запроса из форм сайта
    $("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        // !
        console.log(formNm.serializeArray());
        // !
        $.ajax({
            type: "POST",
            url: 'assets/mail.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html(data);
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);
            }
        });
        return false;
    }); // Конец JS для отправки ajax-запроса из форм сайта

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 300);
        return false;
    });
});