
//Pizza -> Dough -> Cheese


function getcheese(callback){
    setTimeout(function(){
        const cheese="🧀";
        console.log("This is cheese",cheese);
        callback(cheese);
    },3000)
    
}

function makedough(cheese,callback){
    setTimeout(function(){
        const dough= cheese + "🍩";
        console.log("This is dough",dough);
        callback(dough);
    },3000)
    
}

function makepizza(dough,callback){
    setTimeout(function(){
        const pizza= dough + "🍕";
        console.log("This is pizza",pizza);
        callback(pizza);
    },3000)
    
}


getcheese((cheese) => {
    makedough(cheese, (dough) => {
       makepizza(dough, (pizza) => {
           //console.log(pizza);
       })
    });
});


console.log("This will run before setTimeout");




