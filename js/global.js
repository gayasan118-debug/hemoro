// header
document.addEventListener('DOMContentLoaded', () => {
    const setHeaderMenuHeight = (headerSel, depth01Sel, depth02Sel) => {
        const header = document.querySelector(headerSel);
        const items = document.querySelectorAll(depth01Sel);
        if (!header || !items.length) return;

        const baseHeight = header.offsetHeight;
        const updateHeight = (h) => header.style.height = `${h}px`;

        let maxSubHeight = 0;
        items.forEach(item => {
            const sub = item.querySelector(depth02Sel);
            if (sub) {
                maxSubHeight = Math.max(maxSubHeight, sub.offsetHeight);
            }
        });

        header.addEventListener('mouseenter', () => {
            updateHeight(baseHeight + maxSubHeight);
            header.classList.add('active');
        });
        header.addEventListener('mouseleave', () => {
            updateHeight(baseHeight);
            header.classList.remove('active');
        });

        items.forEach(item => {
            item.addEventListener('mouseenter', () => {
                updateHeight(baseHeight + maxSubHeight);
                header.classList.add('active');
            });
            item.addEventListener('mouseleave', (e) => {
                const to = e.relatedTarget;
                if (to && (header.contains(to) || header.matches(':hover'))) {
                    return;
                }
                updateHeight(baseHeight);
                header.classList.remove('active');
            });
        });
    };

    setHeaderMenuHeight('header', '.gnb > .depth01', '.depth02');
});

// END header

// sub
$(document).ready(function () {
    setTimeout(function () {
        $('.wrap').addClass('open');
    }, 100);
});
// END sub

$(document).ready(function () {
    function mo_active() {
        $('.mo').each(function (index, item) {
            if ($(window).scrollTop() > $(this).offset().top - $(window).height() * 0.85) {
                $(this).addClass('active');
            }
        });
    }
    $(window).scroll(function (event) {
        if ($('.mo').offset()) {
            mo_active();
        }
    });
    mo_active();
});