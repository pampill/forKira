let emojiIndex = 0;
const emojis = ["😜", "🙃", "😋", "😘", "😍", "😊", "😛", "🤯", "💞"];

function scrollToNext(section) {
    document.getElementsByClassName('section')[section].scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
        emojiIndex = (emojiIndex + 1) % emojis.length;
        document.querySelector(".background-emoji").textContent = emojis[emojiIndex];
    }, 300);
    // Меняем смайлик

    setTimeout(() => {
        // Плавное появление текста во 2-й секции
        if (section === 1) {
            showText("typewriter3", "ты супер!!! 😉");
        }

        // Появление текста с анимацией прыжка для блока 4
        if (section === 2) {
            showText("typewriter4", "я безумно рад что мы познакомились");
        }

        // Печать текста в последней секции
        if (section === 5) {
            typeWriter("typewriter", "люблю тебя!!!!!!!!!!!!!!!!!!!!!");
        }
    }, 500);    
}

function showText(elementId, text) {
    const el = document.getElementById(elementId);

    // Убираем класс, чтобы начать с opacity: 0
    el.classList.remove('show');
    
    // Сначала очищаем текст в элементе
    el.innerHTML = '';

    // Вставляем новый текст в элемент
    setTimeout(() => {
        el.innerHTML = text;
        // После того как текст вставлен, добавляем класс для плавного появления
        el.classList.add('show');
    }, 300); // Добавляем небольшую задержку, чтобы класс show успел примениться
}

function typeWriter(elementId, text) {
    let i = 0;
    const speed = 150;
    const el = document.getElementById(elementId);

    el.innerHTML = ''; // Сначала очищаем элемент

    el.classList.add('typewriter-text');

    function write() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(write, speed);
        }
    }

    write();
}
