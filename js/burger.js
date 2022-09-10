class Burger {
    navWrap = document.querySelector('.cv__nav');
    burgerIcon = document.querySelector('#burger');
    burgerList = document.querySelector('.cv__nav__burger-list');
    burgerLines = [];
    isMenuSticky = false;

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
        const view = `
        <ul class="cv__nav__burger-list__list">
          ${this.createburgerListUl()}
        </ul>`;

        this.burgerList.innerHTML = view;
    }

    afterRender() {
        this.navListUl = document.querySelector('.cv__nav__burger-list__list');
        this.burgerLines = this.burgerIcon.children;
    }

    createburgerListUl() {
        return this.navList.reduce((prev, item) => {
            return prev + `
            <a href="#${item}">
              <li class="translator cv__nav__burger-list__list__item"
              data-translate="NAV.${item.toUpperCase()}">
              </li>
            </a>`;
        }, ``);
    }

    openBurger() {
        this.burgerIcon.style.borderRadius = '50%';
        this.burgerLines[1].style.opacity = '0';
        this.burgerLines[0].style.top = 'calc(50% - 1.5px)';
        this.burgerLines[0].style.transform = 'rotate(.125turn)';
        this.burgerLines[2].style.bottom = 'calc(50% - 1.5px)';
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
        this.navListUl.style.transform = 'translate(0px, -230px)';
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
        const position = this.navWrap.getBoundingClientRect();

        if (position.top <= 0) {
            if (!this.isMenuSticky) {
                console.log("Stickt on");
                this.burgerIcon.classList.add('sticky-burger');
                this.burgerList.classList.add('sticky-burge-list');
                this.isMenuSticky = true;
            }
        } else {
            if (this.isMenuSticky) {
                this.burgerIcon.classList.remove('sticky-burger');
                this.burgerList.classList.remove('sticky-burge-list');
                this.isMenuSticky = false;
            }
        }
    }
}

const burger = new Burger();
//burger.createburgerListUl();

burger.burgerIcon.addEventListener('click', (e) => burger.burgerOnClick(e));
window.addEventListener('click', (e) => burger.click(e));
window.addEventListener('scroll', (e) => burger.scroll(e));
