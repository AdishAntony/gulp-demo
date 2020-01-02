// Importing gulp and uglify package
var gulp = require("gulp");
var uglify = require("gulp-uglify");

// Creating a new uglify task
gulp.task('uglify', function(){
    return gulp.src(['src/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

// Watching file changes in src file
gulp.task('watch', function(){
    gulp.watch('src/index.js', gulp.series('uglify'));
});

// Default task
gulp.task('default', gulp.series('watch'));

