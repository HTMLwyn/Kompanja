// WordPress
const themePath = './public';

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
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/fullpage.js/dist/fullpage.min.js'
];

// CSS includes
const vendorCss = [
    './node_modules/fullpage.js/dist/fullpage.min.css'
];

// Filenames
const fileNames = {
    bundledStyles: 'bundle.min.css',
    bundledScripts: 'bundle.min.js'
};

export default { paths, vendorJs, vendorCss, fileNames };
