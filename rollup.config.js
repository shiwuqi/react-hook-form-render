import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import typescript2 from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'lib/index.esm.js',
            name: 'react-hook-form-render',
            format: 'esm',
            globals: { 
                react: 'React',
                antd: 'antd',
                'react-dom': 'ReactDOM'
            },
            exports: 'named',
        },
        {
            file: 'lib/index.cjs.js',
            name: 'react-hook-form-render',
            format: 'cjs',
            globals: { 
                react: 'React',
                'antd': 'antd',
                'react-dom': 'ReactDOM'
            },
            exports: 'named',
        }
    ],
    plugins: [
        commonjs({
            include: /node_modules/
        }),
        json(),
        typescript2({
            tsconfig: 'tsconfig.json', typescript: require('typescript')
        }),
        resolve(),
        babel({
            exclude: 'node_modules/**'
        }),
        terser(),
    ],
    external: ['react', 'react-dom', 'antd']
};