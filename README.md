# sic_web


## Build Setup


``` bash
# install dependencies
$ npm install # Or yarn install Or cnpm install

# serve with hot reload at localhost:8080
$ npm run ser

# build for production and launch server
$ npm run build

```



## fullpage.js v3.x 以上出现licenseKey提示解决
VM162 fullpage.js:3606 fullPage: Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here

依赖文件 node_modules/fullpage.js/dist/fullpage.js     搜索licenseKey
// if(!isOK){
//     showError('error', 'Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:');
//     showError('error', 'https://github.com/alvarotrigo/fullPage.js#options.');
// }
// else if(l && l.length < 20){
//     console.warn('%c This website was made using fullPage.js slider. More info on the following website:', msgStyle);
//     console.warn('%c https://alvarotrigo.com/fullPage/', msgStyle);
// }

上面这段删除
