const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

// The path to source files directory.
elixir.config.assetsPath = 'src';
// The path to build directory, put your html files here.
elixir.config.publicPath = 'public';
// The path to root directory.
elixir.config.appPath = './';

elixir(mix => {
    // images
    mix.copy('src/images', 'public/images');

    // html
    mix.copy('src/index.html', 'public/index.html');

    // scss files
    mix.sass('app.scss');

    // scripts with webpack
    mix.webpack('app.js');
});
