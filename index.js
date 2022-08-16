
function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    return (function aNamedFunction(){
        return "This is some named function";
    });
}
function returnsAnAnonymousFunction(){
    return (function(){
        return "This is some Anonymous function";
    });
}
