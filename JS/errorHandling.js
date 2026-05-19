let a = undefined;
console.log(a.name); //now it gives the error as unable to read undefined, to handle those errors we use try catch






let a = undefined;
try{
    console.log(a.name);
}
catch(error){
    console.log('Error has occurred');
}
//prints error has occurred






let a = undefined;
try{
    console.log(a.name);
}
catch(error){
    throw new Error('New Error');  //instead of new Error , we can throw specific errors such as SyntaxError(), typeError()...
}
//instead of prints we can throw error by ourself
//givesError: New Error
    /* at Object.<anonymous> (d:\Placement\Frontend\JS\errorHandling.js:22:11)
    at Module._compile (node:internal/modules/cjs/loader:1554:14)
    at Object..js (node:internal/modules/cjs/loader:1706:10)
    at Module.load (node:internal/modules/cjs/loader:1289:32)
    at Function._load (node:internal/modules/cjs/loader:1108:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
    at node:internal/main/run_main_module:36:49 */









let a = new Array();
try{
    console.log(a[-1]);  //prints undefined
}
catch(error){
    console.log('Error');
}








