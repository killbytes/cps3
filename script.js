let swiper = null;
const breakpoint = window.matchMedia('(max-width: 767px)');

// 1. Логика кнопки "Показать все" (аналог useState)
const readMoreBtn = document.querySelector('.read-more__btn');
const brandsList = document.querySelector('.brands__card');
const readMoreContainer = document.querySelector('.read-more');

readMoreBtn.addEventListener('click', function() {
    brandsList.classList.toggle('brands__card--active');
    readMoreContainer.classList.toggle('read-more--active');

    // Меняем текст кнопки
    if (brandsList.classList.contains('brands__card--active')) {
        readMoreBtn.textContent = 'Скрыть';
    } else {
        readMoreBtn.textContent = 'Показать все';
    }
});

// 2. Логика слайдера (аналог useEffect)
const breakpointChecker = function() {
    if (breakpoint.matches) {
        // Если экран < 768px и слайдера еще нет — включаем
        if (swiper === null) {
            return enableSwiper();
        }
    } else {
        // Если экран >= 768px и слайдер запущен — выключаем
        if (swiper !== null) {
            swiper.destroy(true, true);
            swiper = null;
        }
    }
};

const enableSwiper = function() {
    swiper = new Swiper('.swiper', {
        spaceBetween: 16,
        slidesPerView: 'auto',
        initialSlide: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            init: function() { console.log('swiper initialized'); },
            slideChange: function() { console.log('slide change'); }
        }
    });
};

// Слушаем изменение размера экрана (resize)
breakpoint.addEventListener('change', breakpointChecker);

// Запускаем проверку при загрузке страницы
breakpointChecker();