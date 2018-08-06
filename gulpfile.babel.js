

const gulp = require( 'gulp');
const plumber = require( 'gulp-plumber');
const pug = require( 'gulp-pug');
const browserSync = require( 'browser-sync');
const reload      = browserSync.reload; 
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
const runSequence = require('run-sequence');


const bases = {
    app:  'src/',
    dist: 'public/',
};

const postcssPlugins = [
  cssnano({
    core: false,
    autoprefixer: {
      add: true,
      browsers: '> 1%, last 2 versions, Firefox ESR, Opera 12.1'
    }
  })
];

var onError = function(err) {
  notify.onError({
    title:    "Gulp",
    subtitle: "Failure!",
    message:  "Error: <%= error.message %>",
    sound:    "Basso"
  })(err);
  this.emit('end');
};

const sassOptions = {
	outputSyle: 'expanded',
	includePaths: ['node_modules']
};

gulp.task('styles', () =>
  gulp.src('./src/scss/styles.scss')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(plumber({errorHandler: onError}))
    .pipe(sass(sassOptions))
    .pipe(postcss(postcssPlugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'))
    .pipe(reload({stream:true}))
);

gulp.task('pug', () =>
  gulp.src('./src/pug/pages/*.pug')
    .pipe(plumber({errorHandler: onError}))
    .pipe(data(function(file) {
      return JSON.parse(fs.readFileSync('./src/data/posts.json'))
    }))
    .pipe(pug())
    .pipe(gulp.dest('./public'))
    .pipe(reload({stream:true}))
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
    .pipe(reload({stream:true}))
);

gulp.task('images', function() {
 gulp.src('./src/img/**/*.{png,jpg,jpeg,gif,PNG}')
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngcrush()]
  }))
  .pipe(gulp.dest('./public/img'))
  .pipe(reload({stream:true}))
  .pipe(notify("Finished images task!"));
});


gulp.task('copy', function() {
 gulp.src('./src/img/**/*')
  .pipe(gulp.dest('./public/img'))
  .pipe(reload({stream:true}))
});



gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: bases.dist
    }
  });
});

gulp.task('watch', function() {
  gulp.watch(bases.app + 'scss/**/*.scss', ['styles']);
  gulp.watch(bases.app + 'pug/**/*.pug', ['pug']);
  gulp.watch(bases.app + 'blogPosts/*.md', ['pug']);
  gulp.watch(bases.app + 'img/*', ['copy']);
  gulp.watch(bases.app + 'js/*', ['scripts']);
});





gulp.task('default', function(done) {
  runSequence('browser-sync', 'styles', 'pug', 'scripts', 'copy', 'watch', done);
});

gulp.task('deploy', function(done) {
  runSequence('styles', 'pug', 'scripts', 'copy', 'images', 'watch', done);
});


