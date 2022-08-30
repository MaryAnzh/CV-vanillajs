class AboutMe {
    articleAboutMe = document.querySelector('.cv__main__about__me');
    articleText = [
        'text1',
        'text2',
        'text3',
        'text4',
    ];

    constructor() { }

    creatqArticleAboutMe() {
        this.articleText.forEach((elem) => {
            const p = document.createElement('p');
            p.classList.add('translator', 'cv__main__about__me__text');
            p.setAttribute('data-translat', `ABOUT_ME.${elem.toUpperCase()}`);
            this.articleAboutMe.appendChild(p);
        });
    }
}

const aboutMe = new AboutMe();
aboutMe.creatqArticleAboutMe();
