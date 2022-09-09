class Nav {
    nav = document.querySelector('#nav');
    navWrap = document.querySelector('.cv__nav');
    isMenuSticky = false;
    count = 0;

    navList = [
        'about',
        'skill',
        'projects',
        'code',
        'education',
        'languages'
    ];

    constructor() {
        this.render();
        this.afterRender();
    }

    render() {
        this.createNavList();
    }

    afterRender() {
        window.addEventListener('scroll', (e) => this.scroll(e));
        this.nav.addEventListener('scroll', (e) => console.log(e));

    }

    createNavList() {
        this.navList.forEach((elem) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            li.classList.add('translator', 'cv__nav__listitem__item');
            li.setAttribute('data-translate', `NAV.${elem.toUpperCase()}`);
            a.setAttribute('href', `#${elem}`);
            a.appendChild(li);
            this.nav.appendChild(a);
        });
    }

    scroll(e) {
        const position = this.navWrap.getBoundingClientRect();

        if (position.top <= 0) {
            if (!this.isMenuSticky) {
                this.nav.classList.add('sticky-menu');
                this.isMenuSticky = true;
            }
        } else {
            if (this.isMenuSticky) {
                this.nav.classList.remove('sticky-menu');
                this.isMenuSticky = false;
            }
        }
    }
}

const nav = new Nav();