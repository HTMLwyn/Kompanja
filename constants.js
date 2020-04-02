// WordPress
const themePath = './public/wp-content/themes/andreas_gefeller';

// Paths
const paths = {
    dist: `${themePath}/dist`,
    assets_src: './src/assets',
    assets_dist: `${themePath}/assets`,
    styles: './src/styles',
    scripts: './src/scripts'
};

// JS includes
const vendorJs = [

];

// CSS includes
const vendorCss = [

];

// Filenames
const fileNames = {
    bundledStyles: 'bundle.min.css',
    bundledScripts: 'bundle.min.js'
};

export default { paths, vendorJs, vendorCss, fileNames };
