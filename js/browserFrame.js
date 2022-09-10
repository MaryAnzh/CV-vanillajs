class BrowserFrame {
    browserFrame_HTML = document.querySelector('.cv__main__code__wrap__result__browser');

    constructor() {
        this.renderBrowserFrame();
    }

    renderBrowserFrame() {
        const view = `
        <div class="frame">
        <div class="frame__header">
        <div class="frame__header__site-name">
          <div class="frame__header__site-name__fav">
            CV
          </div>
          <div class="frame__header__site-name__name">
            CV Code Example
          </div>
          <div class="frame__header__site-name__cross">
            +
          </div>
        </div>
        <div class="frame__header__cross">
          +
        </div>
        <div class="frame__header__icons">
          <div class="frame__header__icons__icon">
            <div class="frame__header__icons__icon__line"></div>
          </div>
          <div class="frame__header__icons__icon">
            <div class="frame__header__icons__icon__open"></div>
          </div>
          <div class="frame__header__icons__icon cross">
            <p>+</p>
          </div>
        </div>
        </div>
        
        <div class="frame__url">
        
        <div class="frame__url__icon">
          <div class="frame__url__icon__arrow">🡠</div>
          <div class="frame__url__icon__arrow">🡪</div>
          <div class="frame__url__icon__arrow-round">↻</div>
        </div>
        
        <div class="frame__url__field">
          <div class="frame__url__field__icon">i</div>
          <p>http://localhost:4200/CV</p>
        </div>
        
        <div class="frame__url__icon2">
          <div class="frame__url__icon2__user-icon">
            M
          </div>
          <div class="frame__url__icon2__setting">
            <div class="frame__url__icon2__setting__point"></div>
            <div class="frame__url__icon2__setting__point"></div>
            <div class="frame__url__icon2__setting__point"></div>
          </div>
        </div>
        </div>
        <div class="frame__body"></div>
        </div>`;
        this.browserFrame_HTML.innerHTML = view;
    }
};

const browserFrame = new BrowserFrame();
