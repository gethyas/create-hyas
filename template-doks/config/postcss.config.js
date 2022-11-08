const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        // './node_modules/@hyas/core/layouts/**/*.html',
        './node_modules/@hyas/themes-doks/layouts/**/*.html',
        // './layouts/**/*.html',
        './node_modules/@hyas/themes-doks/content/**/*.html',
        './content/**/*.md',
      ],
      safelist: [
        'lazyloaded',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'alert-link',
        'container-xxl',
        'container-fluid',
        'offcanvas-backdrop',
        'img-fluid',
        'lazyload',
        'blur-up',
        'figcaption',
        ...whitelister([
          // './node_modules/@hyas/core/assets/scss/app.scss',
          './node_modules/@hyas/themes-doks/assets/scss/components/_alerts.scss',
          './node_modules/@hyas/themes-doks/assets/scss/components/_buttons.scss',
          './node_modules/@hyas/themes-doks/assets/scss/components/_code.scss',
          // './node_modules/@hyas/themes-doks/assets/scss/components/_diagrams.scss',
          './node_modules/@hyas/themes-doks/assets/scss/components/_syntax.scss',
          './node_modules/@hyas/themes-doks/assets/scss/components/_search.scss',
          './node_modules/@hyas/themes-doks/assets/scss/common/_dark.scss',
          './node_modules/bootstrap/scss/_dropdown.scss',
          // './node_modules/katex/dist/katex.css',
        ]),
      ],
    }),
  ],
}
