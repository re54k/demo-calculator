import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const plugins = [
  resolve(),
  commonjs(),
  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'runtime',
  }),
];

export default [
  {
    input: 'src/index.js',
    output: [{ file: 'dist/calculator.esm.js', format: 'es' }],
    external: [/@babel[\/|\\]runtime/],
    plugins,
  },
  {
    input: 'src/index.js',
    output: [{ name: 'calculator', file: 'dist/calculator.min.js', format: 'umd' }],
    plugins: plugins.concat(
      !process.env.ROLLUP_WATCH
        ? terser()
        : [],
    ),
  },
];
