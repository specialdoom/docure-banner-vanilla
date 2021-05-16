const pkg = require('./package.json');

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'umd', name: 'docure-banner-vanilla' },
    {
      sourcemap: true,
      format: 'iife',
      name: 'app',
      file: 'public/build/bundle.js'
    }
  ]
};
