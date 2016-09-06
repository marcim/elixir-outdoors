> This copy is a work in progress!

# Elixir Outdoors

This is a simple scaffold to use *Elixir* without install *Laravel Framework*, providing a simple and customizable structure to getting started with your frontend project.

Sometimes your frontend project needs to be developed separately from the backend. If you use *Laravel Framework*, it's hard to give up the convenience that *Elixir* offers. How about to use the *Elixir* even without Laravel?

> If you don't know about Laravel and Elixir, please visit: [laravel.com](http://laravel.com/docs)

#### What comes with it?

**Twitter Bootstrap 3** - latest version of bootstrap-sass.
**jquery** - version 3 later.
**js-cookie** - latest version.
**lodash** - latest version.
**vuejs** - latest version.
**vue-resource** - latest version.

Feel free to add or remove any NPM package according to your needs.


## Starting

> Note: Run this requires 'nodejs' and 'gulpjs' instaled.

In order to start, clone this repo:

    git clone https://github.com/marcim/elixir-outdoors.git my_project_folder

Then enter into the created folder and run `npm install` to install Laravel Elixir and its dependencies.

    cd my_project_folder
    npm install

Now just run `gulp` to build the initial files.

    gulp

#### Taking a look at the folder and files structure:

- `gulpfile.js` - Is the main file where you can adjust your building system and customize the folders structure. We will see more about it at the *Customize* section of this doc.
- `public`- Think this folder as a standard **build** folder project. Here you will find the `css`, `fonts`, `images` and `js` folders. Also at this folder you have an `index.html` file, this is where your web server starts.
- `src` - This folder is where the code happens, all your's assets and other source files go here. If you are familiarized with **Laravel Framework** the `src` folder is equivalent to `resurces/assets` folder. Please read the [Laravel Elixir documentation](https://laravel.com/docs/5.3/elixir) to know how to deal with subfolders and files conventions.


## Customize
TODO


--
Enjoy!

Code under [MIT license](http://opensource.org/licenses/MIT).
