var elixir = require('laravel-elixir');

// The path to source files directory.
elixir.config.assetsPath = 'src';
// The path to build directory, put your html files here.
elixir.config.publicPath = 'public';
// The path to root directory.
elixir.config.appPath = './';

elixir(function(mix) {

    // fonts
    mix.copy('./node_modules/font-awesome/fonts', './public/fonts');

    // scss files
    mix.sass('app.scss');

    // scripts files
    mix.scripts([
        './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
        'app.js'
    ]);

    // scripts with browserify
    // elixir(function(mix) {
    //     mix.browserify('main.js');
    // });

});
