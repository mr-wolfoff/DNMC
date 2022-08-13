const t = [
    'Реклама  Insta & facebook',
    'Реклама  google & yandex',
    'Разработка  дизайна',
    'Разработка  eco систем',
    'Разработка  web проектов'
];

function typeText() {
    let line = 0;
    let count = 0;
    let out = '';
    let htmlOut = document.querySelector('.out');

    function typeLine() {
        let interval = setTimeout(function () {
            out += t[line][count];
            htmlOut.innerHTML = out + '|';
            count++;
            if (count >= t[line].length) {
                count = 0;
                out = '';
                line++;    
            }
            typeLine();
            if (line == 5) {
                line = 0
            }
        }, 150);

    }
    typeLine();

}

typeText();