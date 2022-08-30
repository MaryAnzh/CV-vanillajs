class Burger {
    burgerWrap;
    burgerLines;
    burgerList;
    isBurgerOpen;
    navList;
    navListUl;

    constructor() {
        this.burgerWrap = document.querySelector('#burger');
        this.burgerLines = this.burgerWrap.children;
        this.burgerList = document.querySelector('.cv__nav__burger-list');
        this.navList = [
            'about',
            'skill',
            'projects',
            'code',
            'education',
            'languages'
        ];
        this.isBurgerOpen = false;
        this.navListUl = document.createElement('ul');
        this.navListUl.classList.add('cv__nav__burger-list__list');
    }

    createBurgerListUl() {
        this.navList.forEach((elem) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            li.classList.add('translator', 'cv__nav__listitem__item');
            li.setAttribute('data-translat', `NAV.${elem.toUpperCase()}`);
            a.setAttribute('href', `#${elem}`);
            a.appendChild(li);
            this.navListUl.appendChild(a);
        });
        this.burgerList.appendChild(this.navListUl);
    }

    ooenBurger() {
        this.burgerWrap.style.borderRadius = '50%';
        this.burgerLines[1].style.opacity = '0';
        this.burgerLines[0].style.top = '21.5px';
        this.burgerLines[0].style.transform = 'rotate(.125turn)';
        this.burgerLines[2].style.bottom = '21.5px';
        this.burgerLines[2].style.transform = 'rotate(-.125turn)';
        this.navListUl.style.transform = 'translate(0px, 0px)';
        this.isBurgerOpen = true;
    }

    closeBurger() {
        this.burgerWrap.style.borderRadius = '2px';
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
            this.ooenBurger();

        } else {
            this.closeBurger();
        }
    }

    click(e) {
        const elem = e.target;
        console.log(elem);
        const elemClasses = Array.from(elem.classList);
        if (elemClasses.indexOf('burger') === -1 && this.isBurgerOpen) {
            this.closeBurger();
        }
    }
}

const burger = new Burger();
burger.createBurgerListUl();

burger.burgerWrap.addEventListener('click', (e) => burger.burgerOnClick(e));
window.addEventListener('click', (e) => burger.click(e));
