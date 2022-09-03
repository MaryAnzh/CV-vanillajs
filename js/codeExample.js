class CodeExample {
    codeWrap_HTML = document.querySelector('.cv__main__code__wrap__examples');
    codes = [
        {
            title: 'vanilla JS',
        },
        {
            title: 'Angular',
        },

    ];

    constructor() {
        this.renderCodeExample();
    }

    renderCodeExample() {
        this.codes.forEach((code) => {
            const div = document.createElement('div');
            div.classList.add('cv__main__code__wrap__examples__code-example');
            const view = `
              <h4 class="cv__main__code__wrap__examples__code-example__title">
                ${code.title}
              </h4>
              <nav class="cv__main__code__wrap__examples__code-example__nav">
    
              </nav>
              <dov class="cv__main__code__wrap__examples__code-example__code">            
            </dov>
            `;
            div.innerHTML = view;
            this.codeWrap_HTML.appendChild(div);
        });
    }

}

const codeExample = new CodeExample();