class PreLoader {
    preloaderHTML = document.querySelector('.cv__preloader-wrap');

    constructor() { }

    onLoad(e) {
        setTimeout(() => {
            this.preloaderHTML.style.transition = '.3s';
            this.preloaderHTML.style.opacity = '0';
        }, 500)
        setTimeout(() => this.preloaderHTML.style.display = 'npne', 800);
    }
}

const preLoader = new PreLoader();
window.addEventListener('load', (e) => preLoader.onLoad(e));