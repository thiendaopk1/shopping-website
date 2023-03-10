//*  JSON
//var json = '["Javascript","PHP"]' //array
//var json = '{"name":"Son Dang","age":18}' //object
//var object = JSON.parse(json);
//console.log(object);
//console.log(JSON.stringify({
    //name: 'Son Dang',
    //age: 16,
    //test: function(){}
//}));
//*Promise
///Sync-đồng bộ
//console.log(1);
//console.log(2);
///Async-setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame
//setTimeout(function() {
    //console.log(1);
//}, 1000);
//console.log(2);
///Callback hell
//setTimeout(function() {
    //console.log(1); // viec1
    //setTimeout(function() {
        //console.log(2); // viec2
        //setTimeout(function() {
            //console.log(3); // viec3
            //setTimeout(function() {
                //console.log(4); // viec4
            //}, 1000);
        //}, 1000);
    //}, 1000);
//}, 1000);
///Create promise
//var promise = new Promise(
    //Executor
    //function(resolve, reject){
        //Logic
        //Thanh cong :resolve()
        //That bai: reject
        //reject();
    //}
//) ;
 //promise
    //.then(function(){
        //console.log('Successully!')
    //})
    //.catch(function(){
        //console.log('Failure!')
    //})
    //.finally(function(){
        //console.log('Done!')
    //});
//*ES6
///array function
//const courseName = 'Javascript';
//const description = `Course name: ${courseName}`;
//console.log(description);