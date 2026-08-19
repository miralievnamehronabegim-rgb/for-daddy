'use strict'

const photos = [
    "./img/ourPhotos/photo_1_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_2_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_3_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_4_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_5_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_6_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_7_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_8_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_9_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_10_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_11_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_12_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_13_2026-08-19_01-54-45.jpg",
    // "./img/ourPhotos/photo_14_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_15_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_16_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_17_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_18_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_19_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_20_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_21_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_22_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_23_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_24_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_25_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_26_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_27_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_28_2026-08-19_01-54-45.jpg",
    // "./img/ourPhotos/photo_29_2026-08-19_01-54-45.jpg",,
    "./img/ourPhotos/photo_30_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_31_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_32_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_33_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_34_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_35_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_36_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_37_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_38_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_39_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_40_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_41_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_42_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_43_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_44_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_45_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_46_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_47_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_48_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_49_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_50_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_51_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_52_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_53_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_54_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_55_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_56_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_57_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_58_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_59_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_60_2026-08-19_01-54-45.jpg",
    "./img/ourPhotos/photo_61_2026-08-19_01-54-45.jpg",
    // "./img/ourPhotos/photo_62_2026-08-19_01-54-45.jpg"
];


const messages = [
    "С днём рождения, папа! ❤️ Ты самый родной и дорогой человек для нашей семьи.",

    "Спасибо тебе за твою любовь, заботу и поддержку. Мы очень тебя любим! ❤️",

    "Ты всегда рядом, когда нам нужна помощь. Спасибо тебе за всё, папа! 🫶",

    "Ты наш пример силы, доброты и настоящей заботы. С днём рождения! 🎉",

    "Пусть в твоей жизни будет как можно больше счастливых моментов, улыбок и радости! ❤️",

    "Спасибо за все моменты, которые мы провели вместе. Пусть их станет ещё больше! 🫶",

    "Ты сделал нашу жизнь теплее и счастливее. Мы никогда этого не забудем. ❤️",

    "Желаем тебе крепкого здоровья, счастья и исполнения всех твоих желаний! 🎂",

    "Пусть каждый новый день приносит тебе повод улыбаться. Ты этого заслуживаешь! ❤️",

    "Ты не просто наш папа — ты наша поддержка, опора и настоящий герой. ❤️",

    "Спасибо за все твои советы, помощь и терпение. Мы очень ценим тебя! ❤️",

    "Пусть рядом всегда будут люди, которые любят тебя так же сильно, как любим тебя мы. 🫶",

    "Желаем тебе много счастливых лет, здоровья и спокойствия в душе. ❤️",

    "С тобой связано так много наших самых любимых воспоминаний. Спасибо за них, папа! 📸",

    "Пусть этот день будет наполнен улыбками, теплом и любовью всей нашей семьи. 🎉",

    "Спасибо тебе за всё, что ты делаешь для нашей семьи. Ты для нас очень важен! ❤️",

    "Папа, мы гордимся тобой и счастливы, что именно ты наш папа. 🥹❤️",

    "Желаем тебе всегда оставаться таким же добрым, сильным и весёлым! 🎂",

    "Пусть впереди тебя ждёт ещё много прекрасных моментов и семейных праздников. ❤️",

    "С днём рождения, наш любимый папа! Мы тебя очень-очень любим! ❤️🎉",

    "Желаем тебе крепкого здоровья, большого счастья и как можно больше поводов для улыбки! 🎉",

    "Пусть каждый твой день будет наполнен радостью, теплом и хорошими событиями. ❤️",

    "Ты наша опора и человек, на которого всегда можно положиться. Спасибо тебе за всё! ❤️",

    "Желаем тебе долгих счастливых лет, крепкого здоровья и исполнения самых заветных желаний. 🎂",

    "Пусть в твоём доме всегда царят любовь, спокойствие, счастье и семейное тепло. ❤️",

    "Пусть все твои планы осуществляются, а каждый новый день приносит что-нибудь хорошее. ✨",

    "Мы желаем тебе здоровья, сил, энергии и огромного семейного счастья! ❤️",

    "Пусть твоя жизнь будет наполнена яркими моментами, добрыми людьми и радостными событиями. 🌟",

    "Спасибо, что всегда поддерживаешь нас и веришь в нас. Мы тебя очень любим! ❤️",

    "Желаем тебе никогда не унывать, всегда улыбаться и наслаждаться каждым прекрасным моментом жизни. 😊",

    "Пусть рядом с тобой всегда будут любимые люди, которые ценят и уважают тебя. ❤️",

    "Желаем тебе успехов во всех делах, уверенности в себе и исполнения всех желаний! ✨",

    "Пусть каждый год твоей жизни становится ещё счастливее и прекраснее предыдущего. 🎉",

    "Папа, ты заслуживаешь самого лучшего! Пусть жизнь дарит тебе много счастливых сюрпризов. ❤️",

    "Спасибо тебе за твоё доброе сердце, мудрые советы и бесконечную заботу о нашей семье. 🫶",

    "Пусть здоровье будет крепким, настроение — прекрасным, а сердце — спокойным и счастливым. ❤️",

    "Желаем тебе больше путешествий, новых впечатлений и незабываемых моментов! 🌍",

    "Пусть все трудности остаются позади, а впереди будет только счастье и радость. ❤️",

    "Пусть твоя улыбка появляется как можно чаще, а причин для грусти будет как можно меньше. 😊",

    "Желаем тебе мира в душе, гармонии, благополучия и настоящего семейного счастья. ❤️",

    "Спасибо за каждый день, когда ты был рядом. Для нас это бесценно. 🥹❤️",

    "Пусть все твои мечты постепенно становятся реальностью, а жизнь приносит только приятные сюрпризы. ✨",

    "Желаем тебе много солнечных дней, добрых встреч и счастливых воспоминаний! ☀️",

    "Пусть в твоей жизни всегда будет место для радости, отдыха, любимых людей и новых мечтаний. ❤️",

    "Папа, пусть каждый день напоминает тебе о том, как сильно тебя любят твои родные. ❤️",

    "Пусть каждый новый день приносит тебе новые силы, вдохновение и желание радоваться жизни! ❤️",

    "Желаем тебе всегда чувствовать нашу любовь, поддержку и благодарность за всё, что ты для нас делаешь. 🫶",

    "Пусть в жизни будет больше моментов, которыми хочется гордиться, и воспоминаний, которые хочется хранить. ✨",

    "Папа, пусть счастье, здоровье и семейное тепло всегда идут рядом с тобой. С днём рождения! ❤️🎂",

    "Желаем тебе крепкого здоровья, счастья и благополучия во всём! ❤️",

    "Пусть каждый день приносит радость, улыбки и приятные новости. ✨",

    "Желаем успехов во всех начинаниях и исполнения самых заветных желаний! 🌟",

    "Пусть рядом всегда будут близкие люди, верные друзья и любящие сердца. ❤️",

    "Желаем тебе спокойствия, внутренней гармонии и уверенности в завтрашнем дне. 🫶",

    "Пусть жизнь будет наполнена яркими событиями, путешествиями и незабываемыми впечатлениями! 🌍",

    "Желаем много энергии, вдохновения и сил для осуществления всех планов. 💪",

    "Пусть каждый новый год жизни будет ещё счастливее предыдущего! 🎉",

    "Желаем, чтобы в доме всегда царили мир, тепло, любовь и достаток. 🏡❤️",

    "Пусть все мечты постепенно становятся реальностью, а каждый день дарит новый повод для счастья! ✨"

]


const welcome = document.getElementById("welcome");
const memories = document.getElementById("memories");

const openBtn = document.getElementById("openBtn");
const nextBtn = document.getElementById("nextBtn");

const photo = document.getElementById("photo");
const message = document.getElementById("message");

let currentIndex = 0;

message.style.transition = "opacity 0.7s ease";


/* =========================
   ОТКРЫТЬ ПОДАРОК
========================= */

openBtn.addEventListener("click", () => {

    welcome.classList.add("hidden");
    memories.classList.remove("hidden");

    currentIndex = 0;

    photo.src = photos[currentIndex];
    message.textContent = messages[currentIndex];

});


/* =========================
   СЛЕДУЮЩЕЕ ФОТО
========================= */

nextBtn.addEventListener("click", () => {

    currentIndex++;

if (currentIndex < photos.length) {

    photo.style.opacity = "0";

    setTimeout(() => {

        photo.src = photos[currentIndex];
        message.textContent = messages[currentIndex];

        photo.style.opacity = "1";

    }, 800);

    return;
}


    /* =========================
       ФОТО ЗАКОНЧИЛИСЬ
    ========================= */

    // Полностью убираем контейнер фотографии
    const photoWrapper = document.querySelector(".photo-wrapper");

    photoWrapper.style.display = "none";


    // Убираем кнопку "Следующее"
    nextBtn.style.display = "none";


    /* =========================
       ФИНАЛЬНЫЕ ФРАЗЫ
    ========================= */

    const finalMessages = [

        "Папа, спасибо тебе за каждый день, за твою любовь, заботу и поддержку. ❤️",

        "Ты наша опора, наша сила и самый родной человек в нашей семье. 🫶",

        "Спасибо за все счастливые моменты и прекрасные воспоминания, которые мы храним в сердце. ❤️",

        "Пусть каждый день твоей жизни будет наполнен здоровьем, счастьем, теплом и радостью. ✨",

        "Пусть все твои мечты исполняются, а впереди тебя ждут только хорошие события. 🌟",

        "Мы гордимся тобой и бесконечно благодарны тебе за всё, что ты делаешь для нашей семьи. ❤️",

        "Пусть рядом всегда будут любимые люди, семейное тепло, спокойствие и счастье. 🏡❤️",

        "Желаем тебе долгих счастливых лет, крепкого здоровья и огромного семейного счастья. ❤️",

        "Мы всегда будем рядом, поддерживать тебя и любить тебя всем сердцем. 🥹❤️",

        "Папа, ты заслуживаешь самого лучшего. Спасибо, что ты у нас есть. ❤️"

    ];


    let finalIndex = 0;


    /* =========================
       ПОКАЗ ФИНАЛЬНЫХ ФРАЗ
    ========================= */

    function showFinalMessage() {

        /* Все 10 фраз закончились */

        if (finalIndex >= finalMessages.length) {

            message.style.opacity = "0";

            setTimeout(() => {

                message.textContent = "";

                message.style.opacity = "1";


                /* КНОПКА ВНУТРИ ТОЙ ЖЕ КАРТОЧКИ */

                nextBtn.textContent = "Посмотреть заново ❤️";

                nextBtn.style.display = "block";
                nextBtn.style.opacity = "0";

                /* ТОРТИК 🎂 — ТОЛЬКО В ФИНАЛЕ */

                const cake = document.createElement("div");

                cake.textContent = "🎂";

                cake.style.fontSize = "120px";
                cake.style.lineHeight = "1";
                cake.style.marginBottom = "25px";
                cake.style.textAlign = "center";
                cake.style.animation = "cakeBeat 1.2s ease-in-out infinite";

                message.parentElement.insertBefore(cake, nextBtn);

                /* Запускаем праздничный салют 🎉 */

                for (let i = 0; i < 20; i++) {

                    setTimeout(() => {
                        createFirework();
                    }, i * 150);

                }

                setTimeout(() => {
                    nextBtn.style.opacity = "1";
                }, 100);


                nextBtn.onclick = () => {
                    location.reload();
                };

            }, 700);

            return;
        }


        /* Исчезновение предыдущей фразы */

        message.style.opacity = "0";


        setTimeout(() => {

            /* Новая фраза */

            message.textContent = finalMessages[finalIndex];

            message.style.opacity = "1";

            finalIndex++;


            /* Через 3 секунды следующая */

            setTimeout(() => {
                showFinalMessage();
            }, 3000);

        }, 700);
    }


    /* Запускаем финал */

    showFinalMessage();

});

/* =========================
   ПРАЗДНИЧНЫЙ САЛЮТ 🎉
========================= */

function createFirework() {

    const firework = document.createElement("div");

    firework.textContent = "✨";

    firework.style.position = "fixed";
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 60 + "vh";
    firework.style.fontSize = Math.random() * 15 + 15 + "px";
    firework.style.pointerEvents = "none";
    firework.style.zIndex = "9999";
    firework.style.opacity = "0";

    firework.style.transition =
        "transform 1.2s ease-out, opacity 1.2s ease-out";

    document.body.appendChild(firework);

    setTimeout(() => {

        firework.style.opacity = "1";

        firework.style.transform =
            `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.5)`;

    }, 50);

    setTimeout(() => {

        firework.style.opacity = "0";

    }, 800);

    setTimeout(() => {

        firework.remove();

    }, 1400);
}


AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 300, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
