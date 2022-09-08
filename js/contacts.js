class Contacts {
    popUpContacts = document.querySelector('.contacts-pop-up');
    contactsWrap = document.querySelector('.cv__main__main-info__contacts');
    contactsInfoWrap = document.querySelector('.cv__main__main-info__contacts__info');
    showContactsButton = document.querySelector('.cv__main__main-infoinfo__buttons__contacts');
    closeContactsBurron = document.querySelector('.cv__main__main-info__contacts__header__back');


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
        this.afterRender();
    }

    render() {
        let view = ``;
        const ul = document.createElement('ul');
        ul.classList.add('contacts');
        for (let key in this.myContacts) {
            if (typeof this.myContacts[key] === 'string') {
                view += `
                <li class="contacts__Item">
                  <p class="contacts__Item__title">
                    <span class="translator"
                      data-translate="CONTACTS.${key.toUpperCase()}"></span>: </p>
                  <p>${this.myContacts[key]}</p>
                </li>`;
            } else {
                view += `
                <li class="contacts__Item">
                  <p class="contacts__Item__title">
                    <span class="translator"
                      data-translate="CONTACTS.${key.toUpperCase()}"></span>: </p>
                  <ul class="contacts__Item__list">
                  ${this.createContactsList(this.myContacts[key])}
                  <ul>
                </li>`;
            }
        };
        ul.innerHTML = view;
        this.contactsInfoWrap.appendChild(ul);
    }

    afterRender() {
        this.showContactsButton.addEventListener('click', (e) => this.showContactsOnClick(e));
        this.closeContactsBurron.addEventListener('click', (e) => this.closeContactsOnClick(e));
        this.popUpContacts.addEventListener('click', (e) => this.closeContactsOnClick(e));
    }

    createContactsList(contactsSet) {
        let view = ``;
        for (let key in contactsSet) {
            view += `
            <li class="contacts__Item__list__messenger">
            <p class="contacts__Item__list__messenger__name"><span>${key}:</span>  ${contactsSet[key]}</p>
            </li>`;
        }
        return view;
    }

    showContactsOnClick(e) {
        this.popUpContacts.style.display = 'block';
        this.popUpContacts.style.opacity = '1';
        setTimeout(() => this.contactsWrap.style.transform = 'translateX(0%)', 50);

    }

    closeContactsOnClick(e) {
        this.contactsWrap.style.transform = 'translateX(-110%)';
        this.popUpContacts.style.opacity = '0';
        setTimeout(() => this.popUpContacts.style.display = 'none', 300);
    }
}

const contacts = new Contacts();