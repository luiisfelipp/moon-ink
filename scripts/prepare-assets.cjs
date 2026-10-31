const sharp = require('sharp');
const path = require('path');
const files = {chest:'20240811_153136.jpg',gengar:'Screenshot_20240710_133353_Instagram.jpg',hands:'Screenshot_20261030_141606_Instagram.jpg',moon:'20240703_195529.jpg',afrodita:'Screenshot_20261030_141500_Instagram.jpg',compass:'Screenshot_20261030_141746_Instagram.jpg',geometry:'20240622_183154.jpg',dragon:'20240628_211939.jpg'};
(async()=>{for(const [name,file] of Object.entries(files)){await sharp(path.join('assets',file)).rotate().resize({width:1600,withoutEnlargement:true}).webp({quality:86}).toFile(`public/works/${name}.webp`)}await sharp('assets/logo.jpeg').resize(640).webp({quality:95}).toFile('public/logo.webp');console.log('Optimized original assets ready');})();
