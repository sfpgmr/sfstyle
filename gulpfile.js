!function(){
'use strict';

var CSSNEXT_DIR = './src/css';
var JS_SRC_DIR = './src/js';
var CSS_RELEASE_DIR = './release/css';
var JS_RELEASE_DIR = './release/js';

var path = require('path');

var gulp = require('gulp');
var logger = require('gulp-logger');
var watch = require('gulp-watch');
var filter = require('gulp-filter');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var atImport = require('postcss-import');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');


// CSSのビルド
gulp.task('postcss', function() {
    gulp.src(path.join(CSSNEXT_DIR, 'sfstyle.css'), { base: CSSNEXT_DIR })
        .pipe(postcss([
            atImport(),
            require('postcss-mixins')(),
            require('postcss-nested')(),
            require('postcss-simple-vars')(),
            require('cssnext')(),
//            require('cssnano')(),
            autoprefixer({ browsers: ['last 2 versions'] })
        ]))
        .pipe(gulp.dest(CSS_RELEASE_DIR))
        .pipe(logger({ beforeEach: '[postcss] wrote: ' }));
});
	
// JSのビルド
gulp.task('js',function(){
     browserify('./src/js/sfstyle.js', { debug: true })
    .transform(babelify)
    .bundle()
    .pipe(source('sfstyle.js'))
    .pipe(gulp.dest('./release/js'));
});

// ウォッチ
gulp.task('default',['js','postcss'],function(){
    gulp.watch(CSSNEXT_DIR + '/**/*.css',['postcss']);
    gulp.watch(JS_SRC_DIR + '/**/*.js',['js']);
});
}();
