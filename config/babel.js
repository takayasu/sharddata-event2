
(function() {
  'use strict';

  module.exports = {
    options: {
      sourceMap: true,
    },
    demo: {
      files: [{
        expand: true,
        cwd: 'src',
        src: [
          '**/*.directive.js',
          '!**/*.directive.spec.js',
        ],
        dest: '.tmp/src',
        ext: '.directive.js',
      },],
    },
  };
})();

