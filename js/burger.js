class Burger {

    burgerIcon_HTMLElrm = document.querySelector('#burger');
    burgerList_HTMLElem = document.querySelector('.cv__nav__burger-list');
    burgerLines_HTMLNodes = [];

    navList = [];

    isBurgerOpen = false;

    navListUl_HTMLElem;

    constructor() {
        this.burgerLines_HTMLNodes = this.burgerIcon_HTMLElrm.children;
        this.navList = [
            'about',
            'skill',
            'projects',
            'code',
            'education',
            'languages'
        ];
        this.navListUl_HTMLElem = document.createElement('ul');
        this.navListUl_HTMLElem.classList.add('cv__nav__burger-list__list');
    }

    createburgerList_HTMLElemUl() {
        this.navList.forEach((elem) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            li.classList.add('translator', 'cv__nav__burger-list__list__item');
            li.setAttribute('data-translat', `NAV.${elem.toUpperCase()}`);
            a.setAttribute('href', `#${elem}`);
            a.appendChild(li);
            this.navListUl_HTMLElem.appendChild(a);
        });
        this.burgerList_HTMLElem.appendChild(this.navListUl_HTMLElem);
    }

    openBurger() {
        this.burgerIcon_HTMLElrm.style.borderRadius = '50%';
        this.burgerLines_HTMLNodes[1].style.opacity = '0';
        this.burgerLines_HTMLNodes[0].style.top = '21.5px';
        this.burgerLines_HTMLNodes[0].style.transform = 'rotate(.125turn)';
        this.burgerLines_HTMLNodes[2].style.bottom = '21.5px';
        this.burgerLines_HTMLNodes[2].style.transform = 'rotate(-.125turn)';
        this.navListUl_HTMLElem.style.transform = 'translate(0px, 0px)';
        this.isBurgerOpen = true;
    }

    closeBurger() {
        this.burgerIcon_HTMLElrm.style.borderRadius = '2px';
        this.burgerLines_HTMLNodes[1].style.opacity = '1';
        this.burgerLines_HTMLNodes[0].style.top = '8px';
        this.burgerLines_HTMLNodes[0].style.transform = 'rotate(0)';
        this.burgerLines_HTMLNodes[2].style.bottom = '8px';
        this.burgerLines_HTMLNodes[2].style.transform = 'rotate(0)';
        this.navListUl_HTMLElem.style.transform = 'translate(0px, -190px)';
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
            this.burgerIcon_HTMLElrm.classList.add('sticky-burger');
            this.burgerList_HTMLElem.classList.add('sticky-burge-list');
        } else {
            this.burgerIcon_HTMLElrm.classList.remove('sticky-burger');
            this.burgerList_HTMLElem.classList.remove('sticky-burge-list');
        }
    }
}

const burger = new Burger();
burger.createburgerList_HTMLElemUl();

burger.burgerIcon_HTMLElrm.addEventListener('click', (e) => burger.burgerOnClick(e));
window.addEventListener('click', (e) => burger.click(e));
window.addEventListener('scroll', (e) => burger.scroll(e));
