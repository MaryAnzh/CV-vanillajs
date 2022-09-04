class CodeExample {
    codeWrap_HTML = document.querySelector('.cv__main__code__wrap__examples');
    codeExamples = [
        {
            title: 'vanilla JS',
            codeNav: ['HTML', 'CSS', 'JS', 'utile'],
        },
        {
            title: 'Angular',
            codeNav: ['HTML', 'SCSS', 'TS', 'utile'],
        },

    ];

    constructor() {
        this.renderCodeExample();
    }

    renderCodeExample() {
        const strNum = this.createcodeExamplestringNumber(12);

        this.codeExamples.forEach((code) => {
            const div = document.createElement('div');
            div.classList.add('cv__main__code__wrap__examples__code-example');

            const nav = () =>
                code.codeNav.reduce((prev, curr, index) => {
                    if (index === 0) {
                        prev += `<li class="cv__main__code__wrap__examples__code-example__nav__item active-item" data-name="${curr}">${curr}</li>`;
                    } else {
                        prev += `<li class="cv__main__code__wrap__examples__code-example__nav__item" data-name="${curr}">${curr}</li>`;
                    }
                    return prev;
                }, ``);

            const view = `
              <h4 class="cv__main__code__wrap__examples__code-example__title">
                ${code.title}
              </h4>
              <ul class="cv__main__code__wrap__examples__code-example__nav">
                 ${nav()}
              </ul>
              <div class="cv__main__code__wrap__examples__code-example__code">
              <div class="cv__main__code__wrap__examples__code-example__code__nunber">
              <pre><code>${strNum}</code></pre>
              </div>
              <div class="cv__main__code__wrap__examples__code-example__code__text"><pre><code>In process...</code></pre></div>
              </div>
            `;
            div.innerHTML = view;
            this.codeWrap_HTML.appendChild(div);
        });
    }

    createcodeExamplestringNumber(number) {
        let strNumber = 0;
        let numbers = ``;
        while (strNumber < number) {
            numbers += `${++strNumber}<br>`;
        }
        return numbers;
    }

}

const codeExample = new CodeExample();