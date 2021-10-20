const esbuild = require('esbuild');

async function buildScript( format = 'esm' ) {
  return esbuild.build( {
    entryPoints: [ `./src/app/index.ts` ],
    bundle     : true,
    outfile    : `./dist/js/index.${ format }.js`,
    format,
    external   : ['lodash', 'next/router'],
  } );
}

async function buildModule() {
  return Promise.all( [
    buildScript(),
    buildScript('cjs'),
  ] );
}

buildModule().catch( e => console.error( e ) );
exports.buildScript = buildScript;
exports.buildModule = buildModule;