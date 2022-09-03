class CodeExample {
    codeWrap_HTML = document.querySelector('.cv__main__code__wrap__examples');
    codes = [
        {
            title: 'vanilla JS',
            codeNav: ['HTML', 'CSS', 'JS'],
        },
        {
            title: 'Angular',
            codeNav: ['HTML', 'SCSS', 'TS'],
        },

    ];

    constructor() {
        this.renderCodeExample();
    }

    renderCodeExample() {
        const strNum = this.createCodeStringNumber(12);

        this.codes.forEach((code) => {
            const div = document.createElement('div');
            div.classList.add('cv__main__code__wrap__examples__code-example');
            const view = `
              <h4 class="cv__main__code__wrap__examples__code-example__title">
                ${code.title}
              </h4>
              <ul class="cv__main__code__wrap__examples__code-example__nav">
                 <li class="cv__main__code__wrap__examples__code-example__nav__item active-item" data-name="${code.codeNav[0]}">${code.codeNav[0]}</li>
                 <li class="cv__main__code__wrap__examples__code-example__nav__item" data-name="${code.codeNav[1]}">${code.codeNav[1]}</li>
                 <li class="cv__main__code__wrap__examples__code-example__nav__item" data-name="${code.codeNav[2]}">${code.codeNav[2]}</li>
              </ul>
              <div class="cv__main__code__wrap__examples__code-example__code">
              <div class="cv__main__code__wrap__examples__code-example__code__nunber">
              <pre><code>${strNum}</code></pre>
              </div>
              <div class=""></div>
              </div>
            `;
            div.innerHTML = view;
            this.codeWrap_HTML.appendChild(div);
        });
    }

    createCodeStringNumber(number) {
        let strNumber = 0;
        let numbers = ``;
        while (strNumber < number) {
            numbers += `${++strNumber}<br>`;
        }
        return numbers;
    }

}

const codeExample = new CodeExample();