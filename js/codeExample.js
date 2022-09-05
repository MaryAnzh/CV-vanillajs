import { htmlExampleJS, cssExampleJS, jsExamlle } from './data.js';

class CodeExample {
    //html element
    codeWrap_HTMLElem = document.querySelector('.cv__main__code__wrap__examples');
    codeNavItems_HTMLCollection = null;
    exampleCodeView_HTMLCollection = null;
    codeWrapNum__HTMLCollection = null;

    //data code
    htmlJS = htmlExampleJS;
    cssJS = cssExampleJS;
    jsJS = jsExamlle;
    htmlAngular = 'Angular';

    codeExamples = [
        {
            title: 'vanilla JS',
            codeNav: ['html', 'css', 'js'],
            html: this.htmlJS,
            htmlStrNum: this.calcStringInCode(this.htmlJS),
            css: this.cssJS,
            js: this.jsJS,
        },
        // {
        //     title: 'Angular',
        //     codeNav: ['html', 'scss', 'ts'],
        //     html: this.htmlAngular,
        //     htmlStrNum: this.calcStringInCode(this.htmlAngular),
        //     scss: 'CSCC In process...',
        //     ts: 'TS In process...',
        // },
    ];

    constructor() {
        this.render();
        this.afgerRender();
    }

    render() {
        this.codeExamples.forEach((code, index) => {
            let codeType = index === 0 ? 'js' : 'angular';
            const div = document.createElement('div');
            div.classList.add('cv__main__code__wrap__examples__code-example');

            const nav = () =>
                code.codeNav.reduce((prev, curr, index) => {
                    if (index === 0) {
                        prev += `<li class="cv__main__code__wrap__examples__code-example__nav__item active-item" data-name="${curr}_${codeType}">${curr.toUpperCase()}</li>`;
                    } else {
                        prev += `<li class="cv__main__code__wrap__examples__code-example__nav__item" data-name="${curr}_${codeType}">${curr.toUpperCase()}</li>`;
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
              <pre><code>${this.createcodeExamplestringNumber(code.htmlStrNum)}</code></pre>
              </div>
              <div class="cv__main__code__wrap__examples__code-example__code__text"><pre><code class="example-code-view"></code></pre></div>
              </div>
            `;

            div.innerHTML = view;
            this.codeWrap_HTMLElem.appendChild(div);
            const htmlCodeWrap_HTMLColectiion = document.querySelectorAll('.example-code-view');
            htmlCodeWrap_HTMLColectiion[index].textContent = code.html;
        });
    }

    afgerRender() {
        this.codeNavItems_HTMLCollection = document.querySelectorAll('.cv__main__code__wrap__examples__code-example__nav__item');
        this.exampleCodeView_HTMLCollection = document.querySelectorAll('.example-code-view');
        this.codeWrapNum__HTMLCollection = document.querySelectorAll('.cv__main__code__wrap__examples__code-example__code__nunber');


        this.codeNavItems_HTMLCollection.forEach((elem) => {
            elem.addEventListener('click', (e) => this.changeCodeViewOnClick(e));
        });
    }

    changeCodeViewOnClick(e) {
        const elem = e.target;
        const elemTypeSet = elem.dataset.name.split('_');
        const name = elemTypeSet[0];
        const type = elemTypeSet[1];

        let wrapIndex = type === 'js' ? 0 : 1;
        const codeWrap = this.exampleCodeView_HTMLCollection[wrapIndex];
        const codeWrapNum = this.codeWrapNum__HTMLCollection[wrapIndex];

        const addCode = (code) => {
            codeWrap.textContent = code;
            const num = this.calcStringInCode(code)
            codeWrapNum.innerHTML = `<pre><code>${this.createcodeExamplestringNumber(num)}</code></pre>`
        };
        addCode(this.codeExamples[wrapIndex][name]);

        this.codeNavItems_HTMLCollection.forEach(elem => {
            const elemType = elem.dataset.name.split('_')[1];
            if (elemType === type) {
                elem.classList.remove('active-item')
            }
        });
        elem.classList.add('active-item');
    }

    createcodeExamplestringNumber(number) {
        let strNumber = 0;
        let numbers = ``;
        while (strNumber < number) {
            numbers += `${++strNumber}<br>`;
        }
        return numbers;
    }

    calcStringInCode(code) {
        return code.split(`\n`).length;
    }

}

const codeExample = new CodeExample();
