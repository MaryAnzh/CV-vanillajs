class Skill {
    list = document.querySelector('.cv__main__skill__wrap__lists__texst-list');
    iconList = document.querySelector('.cv__main__skill__wrap__lists__icons-list');

    skillList = [
        'JavaScript, TypeScript',
        'HTML, CSS, SCSS, BEM',
        'Angular',
        'git',
        'WebPack',
        'Adobe Illustrator',
    ];
    skillIcons = [
        'js.png',
        'ts.png',
        'html.png',
        'css.png',
        'scss.png',
        'angular.svg',
        'git.png',
        'webpack.png',
        'AI.png'
    ];

    constructor() { }

    createSkillList() {
        this.skillList.forEach((elem) => {
            const li = document.createElement('li');
            li.textContent = elem;
            this.list.appendChild(li);
        });
    }

    createIconList() {
        this.skillIcons.forEach((elem) => {
            const img = document.createElement('img');
            img.setAttribute('src', `assets/icons/${elem}`);
            img.setAttribute('alt', `${elem.split('.')[0]}`);
            img.classList.add('cv__main__skill__wrap__lists__icons-list__icon');
            this.iconList.appendChild(img);
        });
    }
}

const skill = new Skill;
skill.createSkillList();
skill.createIconList();