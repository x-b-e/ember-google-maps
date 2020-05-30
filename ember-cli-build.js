/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const { maybeEmbroider } = require('@embroider/test-setup');

module.exports = function(defaults) {
  let options = {
    snippetPaths: ['tests/dummy/code-snippets'],

    babel: {
      plugins: [
        '@babel/plugin-proposal-optional-chaining'
      ]
    },

    'ember-cli-babel': {
      includePolyfill: true
    },

    sassOptions: {
      precision: 10,
      onlyIncluded: true,
      includePaths: [
        'tests/dummy/app/styles',
        'node_modules/bootstrap/scss'
      ]
    },

    minifyCSS: {
      options: {
        // Don't break Bootstrap with css mangling.
        // Remove for clean-css 4.0
        advanced: false,
      }
    },

    'ember-composable-helpers': {
      only: ['array', 'join', 'toggle']
    },

    prember: {
      baseRoot: 'https://ember-google-maps.sandydoo.me',
      urls: [
        '/',
        '/docs',
        '/docs/about',
        '/docs/getting-started',
        '/docs/map',
        '/docs/events',
        '/docs/components',
        '/docs/canvas',
        '/docs/markers',
        '/docs/circles',
        '/docs/polylines',
        '/docs/info-windows',
        '/docs/controls',
        '/docs/directions',
        '/docs/overlays',
        '/docs/complex-ui',
        '/examples/sweet-rentals'
      ]
    }
  };

  let app = new EmberAddon(defaults, options);

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return maybeEmbroider(app);
};
