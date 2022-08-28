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
            li.classList.add('translator', 'cv__nav__listitem__item');
            li.setAttribute('data-translat', `NAV.${elem.toUpperCase()}`);
            this.nwv.appendChild(li);
        });
    }
}

const nav = new Nav();
nav.createNavList();
