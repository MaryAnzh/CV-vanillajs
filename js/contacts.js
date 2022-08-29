class Contacts {
    cards = [
        'phon',
        'mail',
        'messengers'
    ];

    contactsInfo = {
        phon: [],
        mail: ['maryang@mail.ru'],
        messengers: ['Skype: maryang@mail.ru', 'Discord: maryang#3361'],
    }

    contactsHTMLElem = document.querySelector('#contacts');

    constructor() { }

    creqteCards() {
        this.cards.forEach((elem) => {
            const card = document.createElement('div');
            card.classList.add('cv__main__contact__wrap__cards-wrap__card');
            const title = document.createElement('h5');
            title.classList.add('cv__main__contact__wrap__cards-wrap__card__title', 'translator');
            title.setAttribute('data-translat', `CONTACTS.${elem.toUpperCase()}`);
            card.appendChild(title);

            this.contactsInfo[elem].forEach((el) => {
                const contact = document.createElement('p');
                contact.textContent = el;
                card.appendChild(contact);
            });
            this.contactsHTMLElem.appendChild(card);
        });
    }
}

const contacts = new Contacts();
contacts.creqteCards();