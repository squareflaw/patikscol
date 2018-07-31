// import gulp from 'gulp';
// import plumber from 'gulp-plumber';
// import pug from 'gulp-pug';
// import browserSync from 'browser-sync';
// import sass from 'gulp-sass';
// import browserify from 'browserify';

const gulp = require( 'gulp');
const plumber = require( 'gulp-plumber');
const pug = require( 'gulp-pug');
const browserSync = require( 'browser-sync');
const sass = require( 'gulp-sass');
const postcss = require( 'gulp-postcss');
const cssnano = require( 'cssnano');
const watch = require( 'gulp-watch');
const browserify = require( 'browserify');
const babelify = require( 'babelify');
const source = require( 'vinyl-source-stream');
const sourcemaps = require( 'gulp-sourcemaps');
const buffer = require( 'vinyl-buffer');
const imagemin = require( 'gulp-imagemin');
const pngcrush = require( 'imagemin-pngcrush');
const notify = require( 'gulp-notify');
const data = require( 'gulp-data');
const fs = require( 'fs');


const server = browserSync.create();

const postcssPlugins = [
  cssnano({
    core: false,
    autoprefixer: {
      add: true,
      browsers: '> 1%, last 2 versions, Firefox ESR, Opera 12.1'
    }
  })
];

const sassOptions = {
	outputSyle: 'expanded',
	includePaths: ['node_modules']
};

gulp.task('styles', () =>
  gulp.src('./src/scss/styles.scss')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(plumber())
    .pipe(sass(sassOptions))
    .pipe(postcss(postcssPlugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'))
    .pipe(server.stream({match: '**/*.css'}))
);

gulp.task('pug', () =>
  gulp.src('./src/pug/pages/*.pug')
    .pipe(plumber())
    // .pipe(data(function(file) {
    //   return JSON.parse(fs.readFileSync('./src/data/casos-de-exito.json'))
    // }))
    .pipe(pug())
    .pipe(gulp.dest('./public'))
);

gulp.task('scripts', () =>
  browserify('./src/js/app.js')
    .transform(babelify,{global:true})
    .bundle()
    .on('error', function(err){
      console.error(err);
      this.emit('end')
    })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/js'))
);

gulp.task('images', function() {
 gulp.src('./src/img/**/*.{png,jpg,jpeg,gif,PNG}')
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngcrush()]
  }))
  .pipe(gulp.dest('./public/img'))
  .pipe(notify("Finished images task!"));
});


gulp.task('copy', function() {
 gulp.src('./src/img/**/*.svg')
  .pipe(gulp.dest('./public/img'))
});

gulp.task('default', ['styles', 'pug', 'scripts', 'images', 'copy'], () => {
  server.init({
    server: {
      baseDir: './public'
    },
  },);

  // imagenes
  gulp.watch('./src/img/**/*', ['images']);
  gulp.watch('./src/img/**/*.svg', ['copy']);

  watch('./src/scss/**/*.scss', () => gulp.start('styles'));
  watch('./src/js/**/*.js', () => gulp.start('scripts',server.reload) );
  watch('./src/data/**/*.json','./src/pug/**/*.pug', () => gulp.start('pug', server.reload) );
  watch('./src/pug/pages/*.pug', () => gulp.start('pug', server.reload) );
  watch('./src/img/**/*.{png,jpg,jpeg,gif}', () => gulp.start('images') );
  watch('./src/img/**/*.svg', () => gulp.start('copy') );
});
