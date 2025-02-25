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

        if (section === 3) {
            showText("typewriter5", "чтобы не забывала с кем грибы собирала)🤗");
        }

// чтобы не забывала с кем грибы собирала)🤗

        // Печать текста в последней секции
        if (section === 5) {
            typeWriter("typewriter", "В общем, Кирка, хочу сказать тебе, что ты очень крутая. Я рад, что у меня есть такой человек, как ты, в жизни. Я знаю, что всё, что ты задумала, реализовать у тебя всё получится. Ты молодец, красавка, умничка — всё это я не раз тебе говорю. Хотелось бы проводить с тобой больше времени, потому что твоё присутствие делает меня счастливым. Моментами очень грустно слышать от тебя, как тебя выматывает мида и люди, которые с ней связаны, но я надеюсь, что скоро всё изменится. Я тебе уже не раз говорил, что можешь на меня всегда положиться, потому что ты тот человек, ради которого даже в трудные моменты хочется постараться. Помню, как ты когда-то сказала, что ассоциируешь меня с таким взрослым человеком, но на самом деле я многогранный в этом. Возможно, иногда я могу быть слишком серьёзным и моментами каким-то скучным, но знай, что когда есть ты — не важно, где: в компании или просто вдвоём — внутри меня прям разрывает от счастья. С тобой очень комфортно, и поверь, это реально так, ведь я такими словами не разбрасываюсь. Хочу сказать тебе спасибо! Ведь если бы не ты, этого бы сейчас не было. Ты в каком-то роде мой мотиватор, своим примером многому меня научила, хотя, наверное, даже не осознаёшь этого. Я немного волнуюсь перед тем, как тебе это отправлять, так как я стесняюсь🤭, отвык делать разные милые вещи, но нужно выходить из зоны комфорта. Я надеюсь, ты оценишь. В общем, хочу сказать, что когда будут плохие моменты в жизни, чтобы ты не забывала, что у тебя действительно есть люди, которые тебя любят и ценят. И это всё искренне, чтобы ты никогда не чувствовала себя одинокой. Люблю, ценю и всегда жду встречи. И я надеюсь, что этот текст вытянет тебя даже из самого плохого состояния и будет поднимать настроение каждый раз, когда захочешь перечитать :)");
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
    const speed = 10;
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
