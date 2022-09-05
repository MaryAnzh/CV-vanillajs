class Contacts {
    cards = [
        'phone',
        'mail',
        'messengers'
    ];

    contactsinfo = {
        phone: ['+375297023851'],
        mail: ['maryang@mail.ru'],
        messengers: ['Skype: maryang@mail.ru', 'Discord: maryang#3361', 'Viber: +375297023851'],
    }

    contactsElement = document.querySelector('#contacts');

    constructor() {
        this.render();
    }

    render() {
        this.creqteCards();
    }

    creqteCards() {
        this.cards.forEach((elem, index) => {
            const card = document.createElement('div');
            card.classList.add('cv__main__contacts__wrap__cards-wrap__card');
            const title = document.createElement('h5');
            title.classList.add('cv__main__contacts__wrap__cards-wrap__card__title', 'translator');
            title.setAttribute('data-translat', `CONTACTS.${elem.toUpperCase()}`);
            card.appendChild(title);

            this.contactsinfo[elem].forEach((el) => {
                const contacte = document.createElement('p');
                const arrayFromString = el.split('');
                const contacteСover = arrayFromString.reduce((prev, curr) => prev + `<span>${curr}</span>`, ``);
                contacte.innerHTML = contacteСover;
                card.appendChild(contacte);
            });
            this.contactsElement.appendChild(card);
        });
    }
}

const contacts = new Contacts();