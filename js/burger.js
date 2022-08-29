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

    burgerOnClick(e) {
        if (!this.isBurgerOpen) {
            this.burgerWrap.style.borderRadius = '50%';
            this.burgerLines[1].style.opacity = '0';
            this.burgerLines[0].style.top = '21.5px';
            this.burgerLines[0].style.transform = 'rotate(.125turn)';
            this.burgerLines[2].style.bottom = '21.5px';
            this.burgerLines[2].style.transform = 'rotate(-.125turn)';
            this.navListUl.style.transform = 'translate(0px, 0px)';
            this.isBurgerOpen = true;
        } else {
            this.burgerWrap.style.borderRadius = '2px';
            this.burgerLines[1].style.opacity = '1';
            this.burgerLines[0].style.top = '8px';
            this.burgerLines[0].style.transform = 'rotate(0)';
            this.burgerLines[2].style.bottom = '8px';
            this.burgerLines[2].style.transform = 'rotate(0)';
            this.navListUl.style.transform = 'translate(0px, -190px)';
            this.isBurgerOpen = false;

        }

    }

    createBurgerListUl() {
        this.navList.forEach((elem) => {
            const li = document.createElement('li');
            li.classList.add('translator');
            li.setAttribute('data-translat', `NAV.${elem.toUpperCase()}`);
            this.navListUl.appendChild(li);
        });
        this.burgerList.appendChild(this.navListUl);
    }
}

const burger = new Burger();
burger.createBurgerListUl();

burger.burgerWrap.addEventListener('click', (e) => burger.burgerOnClick(e));
