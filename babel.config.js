module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: { node: 'current' },
            // Force CJS transform so jest.spyOn works on named imports.
            // Node 22 supports native ESM, so without this Babel skips the
            // module transform and spies cannot intercept imported bindings.
            modules: 'commonjs',
        }],
        ['@babel/preset-react', { runtime: 'automatic' }],
    ],
    plugins: ['@babel/plugin-transform-private-methods'],
};
