import { webIcon, progIcon, utillIcon } from './svg.js';

class Skill {
    wrap = document.querySelector('.cv__main__skill__wrap');
    webIcon = webIcon;
    progIcon = progIcon;
    utillIcon = utillIcon;

    skillCards = [
        {
            icon: this.webIcon,
            title: 'WEB',
            skill: ['HTML', 'CSS', 'SCSS', 'BEM'],
            skillIcons: ['html.png', 'css.png', 'scss.png',]
        },
        {
            icon: this.progIcon,
            title: 'LANGUAGES',
            skill: ['JavaScript', 'TypeScript', 'Angular'],
            skillIcons: ['js.png', 'ts.png', 'angular.png'],
        },
        {
            icon: this.utillIcon,
            title: 'UTILE',
            skill: ['git', 'WebPack', 'Adobe Illustrator'],
            skillIcons: ['git.png', 'webpack.png', 'AI.png'],
        },
    ];

    constructor() {
        this.render();
        this.aftetRander();
    }

    render() {

        const view = this.skillCards.reduce((prev, card) => {
            prev += `
          <div class="cv__main__skill__wrap__card">
            <div class="cv__main__skill__wrap__card__icon">${card.icon}</div>
            
            <div class="translator
              cv__main__skill__wrap__card__title"
              data-translat="SKILL.${card.title}">
            </div>

            <p class="cv__main__skill__wrap__card__info">${card.skill.join(', ')}</p>
            <div class="cv__main__skill__wrap__card__skill-icons">${this.createSkillIcons(card.skillIcons)}</div>
          </div>`;
            return prev;
        }, ``);

        this.wrap.innerHTML = view;
    }

    aftetRander() { }

    createSkillIcons(arr) {
        return arr.reduce((prev, icon) => {
            prev += `
            <img 
            class="cv__main__skill__wrap__card__skill-icons__icon"
            src="assets/icons/${icon}"
            alt="${icon.split('.')[0]}">`;
            return prev;
        }, ``);
    }
}

const skill = new Skill();