class Burger {
    burgerWrap;
    burgerLines;
    isBurgerOpen;

    constructor() {
        this.burgerWrap = document.querySelector('#burger');
        this.burgerLines = this.burgerWrap.children;
        this.isBurgerOpen = false;
    }

    burgerOnClick(e) {
        if (!this.isBurgerOpen) {
            this.burgerWrap.style.borderRadius = '50%';
            this.burgerLines[1].style.opacity = '0';
            this.burgerLines[0].style.top = '21.5px';
            this.burgerLines[0].style.transform = 'rotate(.125turn)';
            this.burgerLines[2].style.bottom = '21.5px';
            this.burgerLines[2].style.transform = 'rotate(-.125turn)';
            this.isBurgerOpen = true;
        } else {
            this.burgerWrap.style.borderRadius = '2px';
            this.burgerLines[1].style.opacity = '1';
            this.burgerLines[0].style.top = '8px';
            this.burgerLines[0].style.transform = 'rotate(0)';
            this.burgerLines[2].style.bottom = '8px';
            this.burgerLines[2].style.transform = 'rotate(0)';
            this.isBurgerOpen = false;

        }

    }
}

const burger = new Burger();
burger.burgerWrap.addEventListener('click', (e) => burger.burgerOnClick(e));
