class PreLoader {
    preloaderHTML = document.querySelector('.cv__preloader-wrap');
    round = document.querySelector('.cv__preloader-wrap__photo');

    constructor() {
        this.render();
    }

    render() {
        const ballLine = document.createElement('ul');
        ballLine.classList.add('ball-line');

        const addBallOnRound = (itemCount, radius) => {
            // центр окружности
            const xCenter = 145;
            const yCenter = 145;

            // создаем заданное количество шариков
            for (let index = 0; index < itemCount; index++) {
                const fairyLight = document.createElement('li');
                fairyLight.classList.add('ball-line__ball');

                //высчитываем радианы
                let radian = -(((Math.PI * 2) * (index / itemCount)) - (Math.PI + Math.PI / 20));
                let x = xCenter + radius * Math.cos(radian);
                let y = yCenter + radius * Math.sin(radian);

                fairyLight.style.marginTop = `${x}px`;
                fairyLight.style.marginLeft = `${y}px`;
                setTimeout(() => ballLine.appendChild(fairyLight), index * 30);

            }
            this.round.appendChild(ballLine);
        }
        addBallOnRound(30, 130);
    }


    onLoad(e) {
        setTimeout(() => {
            this.preloaderHTML.style.transition = '.3s';
            this.preloaderHTML.style.opacity = '0';
        }, 500);
        setTimeout(() => {
            this.preloaderHTML.style.display = 'none';;
        }, 800);
    }
}

const preLoader = new PreLoader();
window.addEventListener('load', (e) => preLoader.onLoad(e));