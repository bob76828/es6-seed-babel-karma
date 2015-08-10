module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jspm', 'jasmine'],

    browsers: ['Chrome'],

    reporters: ['progress', 'verbose', 'coverage'],

    singleRun: true,

    colors: true,

    files: [],

    jspm: {
      config: 'system.config.js',
      loadFiles: [
        'test/*.js'
	  ],
      serveFiles: [
        'src/*.js'
	  ]
    },

    exclude: [],

    // config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // preprocess matching files before serving them to the browser.
    // sourcemap allows seeing good line numbers in ES6 file in error and coverage reports.
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/*.js': ['babel', 'sourcemap'],
      'src/*.js': ['babel', 'sourcemap', 'coverage']
    },

	'babelPreprocessor': {
	  options: {
		  sourceMap: 'inline',
		  modules: 'system'
	  },
      sourceFileName: function(file) {
        return file.originalPath;
      }
	},

    coverageReporter: {
      instrumenters: {isparta: require('isparta')},
      instrumenter: {
        'src/*.js': 'isparta'
      },

      reporters: [
        {
          type: 'text-summary'
        },
        {
          type: 'html',
          dir: 'coverage/'
        }
      ]
    }
  });
};
