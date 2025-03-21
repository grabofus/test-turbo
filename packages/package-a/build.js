import { copyFileSync, existsSync, mkdirSync } from 'fs';

if (!existsSync('dist')) {
    mkdirSync('dist');
}
copyFileSync('src/index.js', 'dist/index.js');
