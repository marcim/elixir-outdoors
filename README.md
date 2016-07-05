#Elixir Outdoors

This is a simple scaffold to use [Laravel Elixir](https://github.com/laravel/elixir) without requires **Laravel Framework** to be installed.

Learn more about Laravel Framework: [laravel.com](http://laravel.com)

Elixir Outdoors provides a simple and customizable structure to getting started with your frontend project.


##Starting
> This documentation is a work in progress!

Laravel Elixir requires `nodejs` and `gulpjs`.

Find more about how to get `nodejs` at: [nodejs.org](https://nodejs.org/en/)

Find more about `gulp` at: [gulp](http://gulpjs.com/)

In order to use Elixir Outdoors clone the repo:

    git clone git@github.com:marcim/elixir-outdoors.git my_project_folder

Then enter into the folder created and run `npm install` to install Laravel Elixir and his dependencies.

    cd my_project_folder
    npm install

Now just run `gulp` to build the initial files.

    gulp

###Taking a look at the folder and files structure:

- `gulpfile.js` is the main file where you can adjust your building system and customize the folders structure. We will see more about it at the *Customize* section of this text.
- Think the `public` folder as a standard build folder project. Here you will find the `css`, `fonts`, `images` and `js` folders. Also at this folder you have an `index.html` file, this is where you get start with your frontend code.
- The `src` folder is where your assets sources files go. If you are familiarized with **Laravel Framework** the `src` folder is equivalent to `resurces/assets` folder. Please read the Laravel Elixir [documentation](https://github.com/laravel/elixir) to know how to deal with subfolders and files conventions.


##Customize
TODO


--
Enjoy!

This code is under MIT license.
