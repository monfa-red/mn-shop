export default {
  db: {
    uri: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://'
         + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/mn-s',
    options: {
      // user: '',
      // pass: ''
    },
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  },
  // log: {
  //   // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
  //   format: 'dev',
  //   // Stream defaults to process.stdout
  //   // Uncomment to enable logging to a log on the file system
  //   options: {
  //     //stream: 'access.log'
  //   },
	app: {
    title: 'Stor',
    description: 'Open-Source Modern Full-Stack JavaScript e-commerce Application',
    keywords: 'stor, ecommerce, mean, es2015, angular2, express, node.js, mongodb',
    googleAnalyticsTrackingID:
      process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
  },
  port: process.env.PORT || 3000,
  templateEngine: 'swig',
  // Session details
  // session expiration is set by default to 24 hours
  sessionExpiration: 24 * (60 * 1000),
  // sessionSecret should be changed for security measures and concerns
  sessionSecret: 'STOR',
  // sessionKey is set to the generic sessionId key used by PHP applications
  // for obsecurity reasons
  sessionKey: 'sessionId',
  sessionCollection: 'sessions',
  // logo: 'PATH/TO/SRC/logo.png',
  favicon: 'PATH/TO/SRC/favicon.ico',

  //files
  //TODO: structure will change, it's just for test
  files: {
    server: {
      views: 'server/modules/*/views',
      routes: [
        // './server/modules/*/routes/**/*.js',
        './server/modules/products/routes/**/*.js',
        './server/modules/core/routes/**/*.js',
        // './server/modules/admin/routes/**/*.js'
      ],
      models: 'server/modules/*/models/**/*.js'
    },
    client: {
      static: 'public',
      lib: {
        js: [
          'public/lib/angular/angular.min.js',
          'public/lib/angular-resource/angular-resource.js',
          'public/lib/angular-new-router/dist/router.es5.js',
          'public/app/*module.js',
          'public/app/*.js',
          'public/app/shared/**/*.js',
          'public/app/**/*module.js',
          'public/app/**/*service.js',
          'public/app/**/*.js',
        ],
        sass: 'public/assets/src/**/*.scss',
        css: [
          'public/lib/material-design-lite/material.css',
          'public/assets/dist/*/**/*.css'
        ]
      }
    }
  }
}
