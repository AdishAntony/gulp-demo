# gulp-demo
gulp demo app

------------------------------------------------------

GRUNT-The JavaScript Task Runner

This app is to show how gulp can be used to minifying a js file when a file change occurs.

Gulp and Gulp plugins are installed and managed via npm, the Node.js package manager. Gulp requires stable Node.js versions >= 0.8.0.

Before setting up Gulp ensure that your npm is up-to-date by running npm update -g npm (this might require sudo on certain systems).

To test, run the command - 
npm test

This will execute 'gulp default' task. 
The default task will minify the index.js file and write into index.min.js file in build directory.
The default task will watch for changes in specified file. If it detect a change in file, it takes that file and save it in build folder after minifying it.