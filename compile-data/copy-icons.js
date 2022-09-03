import fs from 'fs';
import path from 'path'
import glob from 'glob'

export default function copyIcons(source = './assets/**/icon.png', target = './static/asset-icons') {
    const icons = glob.sync(source)
        .map(path.parse)
        .map((file) => ({ ...file, basename: path.basename(file.dir) }))

    // Create folder if it does not exist
    fs.mkdirSync(target, { recursive: true });

    // TODO This can be parallelized
    for (const icon of icons) {
        fs.copyFileSync(`${icon.dir}/${icon.base}`, `${target}/${icon.basename}${icon.ext}`)
    }
}