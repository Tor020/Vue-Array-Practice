// - [Decorator Snippet to Count function calls](https://stackoverflow.com/a/8528845/6837572)

// no js library required

// pre-existing function
var a = function(){
    console.log("pre-existing function function");
    console.log("arguments:", arguments);
};

// add counter func
var addFnCounter = function(target){
    var swap = target;
    var count = 0;
    return function(){
        swap.apply(null, arguments);
        count++;
        console.log("func has been called " + count + " times");
        console.log("\n");
    };
};

// usage
a = addFnCounter(a);

// call a() as you would normally
a();
a(1,2,3);
a('hello', 'world');