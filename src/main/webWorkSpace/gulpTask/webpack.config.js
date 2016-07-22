/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

const webpackConf = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
      {
        test: /\.json$/,
        exclude: /(node_modules|bower_components|src)/,
        loader: 'json',
      },
    ],
  },
};

export const webpackDevConf = {
  ...webpackConf,
  watch: true,
  devtool: '#inline-source-map',
};

const app = {
  js: {},
  bin: {},
  css: {},
  html: {},
  bundle: {},
};

app.bundle.entry = ['src/app/script/mangekyou.js', 'src/app/script/worker/worker.js'];
app.bundle.dest = ['build/app/script/mangekyou.js', 'build/app/script/worker/worker.js'];
app.bundle.destPath = 'build/app/script';

app.bin.src = ['src/app/bin/mangekyou'];
app.bin.destPath = 'build/app/bin';

app.js.src = ['src/app/main.js'];
app.js.dest = ['build/app/main.js'];
app.js.destPath = 'build/app';
app.js.lintSrc = Array.prototype.concat(
  app.js.src,
  [
    'gulpfile.babel.js',
    'src/app/*.+(js|jsx)',
    'src/app/**/*.+(js|jsx)',
  ]
);

app.css.src = 'src/app/style/*.+(css|scss)';
app.css.dest = 'build/app/style/*.css';
app.css.destPath = 'build/app/style';

app.html.src = 'src/app/index.html';
app.html.dest = 'build/app/index.html';
app.html.destPath = 'build/app';

