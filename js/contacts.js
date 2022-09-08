class Contacts {
    contactsWrap = document.querySelector('.cv__main__main-info__contacts__info');

    myContacts = {
        phone: '+375297023851',
        mail: 'maryang@mail.ru',
        messengers: {
            skipe: 'maryang@mail.ru',
            discord: 'maryang#3361',
            Viber: '+375297023851',
        },
    }

    constructor() {
        this.render();
    }

    render() {
        const view = ``;
        for(let key in this.myContacts) {
            if(typeof key === 'string') {
                return view + `
                <li class="contacts__Item">
                <p class="translator
                contacts__Item__title"
                data-translate=""></p>
                <ul><ul>
                </li>`;
            }
        };
    }

    // creqteCards() {
    //     this.myContacts.forEach((elem, index) => {
    //         const card = document.createElement('div');
    //         card.classList.add('cv__main__contacts__wrap__cards-wrap__card');
    //         const title = document.createElement('h5');
    //         title.classList.add('cv__main__contacts__wrap__cards-wrap__card__title', 'translator');
    //         title.setAttribute('data-translate', `CONTACTS.${elem.toUpperCase()} `);
    //         card.appendChild(title);

    //         this.contactsinfo[elem].forEach((el) => {
    //             const contacte = document.createElement('p');
    //             const arrayFromString = el.split('');
    //             const contacteСover = arrayFromString.reduce((prev, curr) => prev + `< span > ${curr}</span > `, ``);
    //             contacte.innerHTML = contacteСover;
    //             card.appendChild(contacte);
    //         });
    //         this.contactsElement.appendChild(card);
    //     });
    // }
}

const contacts = new Contacts();