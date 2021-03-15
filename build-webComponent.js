const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/my-video-player/runtime.js',
'./dist/my-video-player/polyfills.js',
'./dist/my-video-player/scripts.js',
'./dist/my-video-player/main.js',
]
await fs.ensureDir('elements')
await concat(files, 'elements/my-video-player.js');
})()