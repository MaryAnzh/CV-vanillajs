class PreLoader {
    preloaderHTML = document.querySelector('.cv__preloader-wrap');
    round = document.querySelector('.cv__preloader-wrap__photo');
    animation = null;

    constructor() {
        this.render();
        window.addEventListener('load', (e) => preLoader.onLoad(e));
    }

    render() {
        const ballLine = document.createElement('ul');
        ballLine.classList.add('ball-line');

        const addBallOnRound = (itemCount, radius, interval) => {
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
                setTimeout(() => ballLine.appendChild(fairyLight), index * interval);

            }
            this.round.appendChild(ballLine);
        }

        const ballCount = 30;
        const preloaderRadius = 130;
        const interval = 30;
        const allRoundTime = ballCount * interval;

        addBallOnRound(ballCount, preloaderRadius, interval);
        setTimeout(() => {
            const balls = document.querySelectorAll('.ball-line li');
            balls.forEach((elem, index) => setTimeout(() => elem.remove(), (index * 30)));
        }, allRoundTime);

        this.animation = setInterval(() => {
            addBallOnRound(ballCount, preloaderRadius, interval);
            setTimeout(() => {
                const balls = document.querySelectorAll('.ball-line li');
                balls.forEach((elem, index) => setTimeout(() => elem.remove(), (index * 30)));
            }, allRoundTime);
        }, (allRoundTime * 2));

    }

    clearHasn() {
        const hash = window.location.hash;
        if (hash !== '') {
            history.pushState("", document.title, window.location.pathname);
        } else {
            console.log(`We havn't hash`);
        }
    }

    onLoad(e) {
        this.clearHasn();
        setTimeout(() => {
            this.preloaderHTML.style.transition = '.3s';
            this.preloaderHTML.style.opacity = '0';
        }, 500);
        setTimeout(() => {
            this.preloaderHTML.style.display = 'none';
            //clearInterval(this.animation);
        }, 800);
    }
}

const preLoader = new PreLoader();
