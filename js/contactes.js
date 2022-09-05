class Contactes {
    cards = [
        'phon',
        'mail',
        'messengers'
    ];

    contactesinfo = {
        phon: [],
        mail: ['maryang@mail.ru'],
        messengers: ['Skype: maryang@mail.ru', 'Discord: maryang#3361'],
    }

    contactesElement = document.querySelector('#contactes');

    constructor() {
        this.render();
     }
    
    render() {
        this.creqteCards();
    }

    creqteCards() {
        this.cards.forEach((elem) => {
            const card = document.createElement('div');
            card.classList.add('cv__main__contact__wrap__cards-wrap__card');
            const title = document.createElement('h5');
            title.classList.add('cv__main__contact__wrap__cards-wrap__card__title', 'translator');
            title.setAttribute('data-translat', `CONTACTES.${elem.toUpperCase()}`);
            card.appendChild(title);

            this.contactesinfo[elem].forEach((el) => {
                const contacte = document.createElement('p');
                contacte.textContent = el;
                card.appendChild(contacte);
            });
            this.contactesElement.appendChild(card);
        });
    }
}

const contactes = new Contactes();