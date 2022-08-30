class Skill {
    list = document.querySelector('.cv__main__skill__wrap__lists__texst-list');
    skillList = [
        'JavaScript, TypeScript',
        'HTML, CSS, SCSS, BEM',
        'Angular',
        'git',
        'WebPack',
        'Adobe Illustrato',
    ];

    constructor() { }

    createSkillList() {
        this.skillList.forEach((elem) => {
            const li = document.createElement('li');
            li.textContent = elem;
            this.list.appendChild(li);
        });
    }
}

const skill = new Skill;
skill.createSkillList();