class Burger {
    navWrap = document.querySelector('.cv__nav');
    burgerIcon = document.querySelector('#burger');
    burgerList = document.querySelector('.cv__nav__burger-list');
    burgerLines = [];

    navList = [
        'home',
        'about',
        'skill',
        'projects',
        'code',
        'education',
        'languages'
    ];

    isBurgerOpen = false;

    navListUl;

    constructor() {
        this.render();
        this.afterRender();

    }

    render() {
        this.navListUl = document.createElement('ul');
        this.navListUl.classList.add('cv__nav__burger-list__list');
    }

    afterRender() {
        this.burgerLines = this.burgerIcon.children;
    }


    createburgerListUl() {
        this.navList.forEach((elem) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            li.classList.add('translator', 'cv__nav__burger-list__list__item');
            li.setAttribute('data-translate', `NAV.${elem.toUpperCase()}`);
            a.setAttribute('href', `#${elem}`);
            a.appendChild(li);
            this.navListUl.appendChild(a);
        });
        this.burgerList.appendChild(this.navListUl);
    }

    openBurger() {
        this.burgerIcon.style.borderRadius = '50%';
        this.burgerLines[1].style.opacity = '0';
        this.burgerLines[0].style.top = '21.5px';
        this.burgerLines[0].style.transform = 'rotate(.125turn)';
        this.burgerLines[2].style.bottom = '21.5px';
        this.burgerLines[2].style.transform = 'rotate(-.125turn)';
        this.navListUl.style.transform = 'translate(0px, 0px)';
        this.isBurgerOpen = true;
    }

    closeBurger() {
        this.burgerIcon.style.borderRadius = '2px';
        this.burgerLines[1].style.opacity = '1';
        this.burgerLines[0].style.top = '8px';
        this.burgerLines[0].style.transform = 'rotate(0)';
        this.burgerLines[2].style.bottom = '8px';
        this.burgerLines[2].style.transform = 'rotate(0)';
        this.navListUl.style.transform = 'translate(0px, -190px)';
        this.isBurgerOpen = false;
    }

    burgerOnClick(e) {
        if (!this.isBurgerOpen) {
            this.openBurger();

        } else {
            this.closeBurger();
        }
    }

    click(e) {
        const elem = e.target;
        const elemClasses = Array.from(elem.classList);
        if (elemClasses.indexOf('burger') === -1 && this.isBurgerOpen) {
            this.closeBurger();
        }
    }

    scroll(e) {
        const position = window.scrollY;
        if (position > 400) {
            this.burgerIcon.classList.add('sticky-burger');
            this.burgerList.classList.add('sticky-burge-list');
        } else {
            this.burgerIcon.classList.remove('sticky-burger');
            this.burgerList.classList.remove('sticky-burge-list');
        }
    }
}

const burger = new Burger();
burger.createburgerListUl();

burger.burgerIcon.addEventListener('click', (e) => burger.burgerOnClick(e));
window.addEventListener('click', (e) => burger.click(e));
window.addEventListener('scroll', (e) => burger.scroll(e));
