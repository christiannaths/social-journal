import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

const options = {
  external: ['styled-components'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({ preferBuiltins: true }),
    commonjs(),
  ],
};

const main = {
  input: 'src/index.js',
  output: {
    file: './index.js',
    format: 'esm',
  },
  ...options,
};

const elements = {
  input: 'src/elements/index.js',
  output: {
    dir: 'elements',
    format: 'esm',
  },
  ...options,
};

const patterns = {
  input: 'src/patterns/index.js',
  output: {
    dir: 'patterns',
    format: 'esm',
  },
  ...options,
};

export default [main, elements, patterns];
