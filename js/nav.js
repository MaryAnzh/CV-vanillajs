class Nav {
    nwv = document.querySelector('#nav');
    navList = [
        'about',
        'skill',
        'projects',
        'code',
        'education',
        'languages'
    ];

    constructor() { }

    createNavList() {
        this.navList.forEach((elem) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            li.classList.add('translator', 'cv__nav__listitem__item');
            li.setAttribute('data-translat', `NAV.${elem.toUpperCase()}`);
            a.setAttribute('href', `#${elem}` );
            a.appendChild(li);
            this.nwv.appendChild(a);
        });
    }
}

const nav = new Nav();
nav.createNavList();
