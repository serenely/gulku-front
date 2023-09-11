import { resolve as _resolve } from 'path';

export const resolve = {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
        '@components': _resolve(__dirname, 'src/components'), 
    },
};
