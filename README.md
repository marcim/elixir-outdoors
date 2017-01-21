# This repo is deprecated in favor of Laravel Mix.
Se more in [Laravel Mix](https://laravel.com/docs/5.4/mix)

## Laravel Elixir Outdoors

This is a simple scaffold to use *Laravel Elixir* without install *Laravel Framework*, providing a simple and customizable structure to getting started with your frontend project.

####Why?

Sometimes your frontend project needs to be developed separately from the backend. If you use *Laravel Framework*, it's hard to give up the convenience that *Laravel Elixir* offers. How about to use the *Laravel Elixir* even without Laravel Framework?

> If you don't know about Laravel Framework and Laravel Elixir, please visit: [laravel.com](http://laravel.com/docs)

#### What comes with it?

By default Laravel Elixir comes with some "essential" packages:

- **axios** - latest version.
- **Twitter bootstrap 3** - latest version of bootstrap-sass.
- **jquery** - version 3 later.
- **lodash** - latest version.
- **vuejs** - latest version.

Feel free to add or remove any NPM package according to your needs.


## Starting

> Note: Run this requires 'nodejs' and 'gulpjs' instaled.

In order to start, clone this repo:

    git clone https://github.com/marcim/laravel-elixir-outdoors.git my_project_folder

Then enter into the created folder and install *Laravel Elixir* dependencies:

    cd my_project_folder

    npm install

or if you use *yarn*:

    yarn

Now just run `gulp` to build the initial files.

    gulp

#### Taking a look at the folder and files structure:

- `gulpfile.js` - Is the main file where you can adjust your building system and customize the folders structure. We will see more about it at the *Customize* section of this doc.
- `public`- Think this folder as a standard **build** folder project. Here you will find the `css`, `fonts`, `images` and `js` folders. Also at this folder you have an `index.html` file, this is where your web server starts.
- `src` - This folder is where the code happens, all your's assets and other source files go here. If you are familiarized with **Laravel Framework** the `src` folder is equivalent to `resurces/assets` folder. Please read the [Laravel Elixir documentation](https://laravel.com/docs/5.3/elixir) to know how to deal with subfolders and files conventions.


## Customize
TODO!


--
Enjoy!

Code under [MIT license](http://opensource.org/licenses/MIT).
