class Nav {
    nav = document.querySelector('#nav');

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
        const position = window.scrollY;
        if (position >= 330) {
            this.nav.classList.add('sticky-menu');
        } else {
            this.nav.classList.remove('sticky-menu');
        }
    }
}

const nav = new Nav();