/*console.log(a)
console.log(c)*/


//console.log("Hello!")
//console.log('Hello!')
//console.log(`Hel
//lo!`)

//console.log(typeof 2)
//console.log(typeof NaN)
//console.log(0/0)
//console.log(2.14)

//console.log(true)
//console.log(false)

//console.log(undefined)
//console.log(null)

//console.log(typeof undefined)
//console.log(typeof null)
/* 
console.log({
    "title": "Start coding",
    "type": "solo",
    "difficulty": 4.1,
    "usefulness": 4.2,
    "enjoyability": 3.7,
    "materials": 3.4,
    "tasks": [
        {
            "title": "Bank accounts",
            "description": ""
        },
        {
            "title": "100 doors",
            "description": ""
        },
        {
            "title": "Word filter",
            "description": ""
        }
    ]
})
*/
/*
var a = "hello1"
let b = "hello2"
const c = "hello3"

console.log(a)
console.log(b)
console.log(c)
*/


//function scope:

/*function d() {
    if(1+1 === 2){
        var a = "hello1";
        let b = "hello2";
        const c = "hello3"
        console.log(a)
        console.log(b)
        console.log(c)
    }
}

d()*/


/* 
let e = 1
console.log(e)

e = 2
console.log(e)

e = e*2
console.log(e)*/


/*function multiplyByTwo(num) {
    console.log(num)
    return num*2
}

let f = multiplyByTwo(1)
console.log(f)
console.log(multiplyByTwo(1))

console.log(num)
*/

 
/*let g = {
    myMethod: function (){
        console.log("hello");
    }
}
g.myMethod()*/

/*                                                              //ez nem fog működni, csak pl
let window = {
    addEventListener: function (eventName, eventFunction){
        if (eventName === "load"){
            eventFunction()
        }
    }
}
window.addEventListener("load", loadEvent)
*/

/*let h = {
    anotherMethod: function(text){
        return `You sent the following argument to this method: ${text}`
    }
}
let i = h.anotherMethod("argument")
console.log(i)
console.log(h.anotherMethod("another argument"))*/

/* 
let myString = "mikkamakka";

let mySecondString = myString;

let myThirdString = "mikkamakka";

console.log(mySecondString);
console.log(myString);
console.log(myString === mySecondString);
console.log(myString === myThirdString);

 */

let myObject = {
    myString: "mikkamakka"
};

let mySecondObject = myObject; // itt még egyenlőek, mert még nem hoztunk létre új obj-t

//console.log(myObject === mySecondObject);


let myThirdObject = {
    myString: "mikkamakka"
};

mySecondObject.myString = "domdodom";  //mind a kettő ugyanoda mutat

//console.log(myObject.myString);

//console.log(myObject === myThirdObject);

/*console.log("" === "");
console.log({} === {});*/  //ha létrehozunk egy obj-t, egy újat hoztunk létre, minden obj. egy teljesen új obj.
// két újonnan létrehozott obj-t nem tudunk egyenlővé tenni

/* 
let myFourthObject = {...myObject}; //így lehet másolni

myFourthObject.myString = "Vacskamati";

console.log(myObject.myString);
console.log(myFourthObject.myString);

*/


/* 
window.addEventListener("load", function(){
    console.log("load")
});

*/
/* 
function loadEvent() {
    console.log("load2")
    for (const movie of movies) {  //azért const, hogy ne tudjuk véletlenül se módosítani
        movie = "hello"           //mindegyiknek hello lett a címe, a kulcsértéket meg tudjuk változtatni
        //console.log(movie.title)
    }
    console.log(movies);
}

window.addEventListener("load", loadEvent);

*/
/* 
 function loadEvent() {
    console.log("load2")

    let rootElement = document.getElementById("root") //egyszer hívjuk meg a root-ot

    let card = function (movieRecieved){
        return `
        <div class="card">
            <h2>${movieRecieved.title}</h2>
            <div class="time">${movieRecieved.year}</div>
            <div class="rate">${movieRecieved.rate}</div>
        </div>
        `;
    }
    // ezt pluszba beküldjük
    rootElement.insertAdjacentHTML("beforeend", card({
        title: "Moulin Rouge",
        year: 2000,
        rate: 9.9
    })); 

    // ezt is pluszba beküldjük
    let actuallyFavouriteMovie = {
        title: "Eternal sunshine",
        year: 2004,
        rate: 9.8
    }

    rootElement.insertAdjacentHTML("beforeend", card(actuallyFavouriteMovie));

    //ezzel kétszer is benne van a Shawshank 
    rootElement.insertAdjacentHTML("beforeend", card(movies[0]));

    for (const movieSend of movies) { 
        rootElement.insertAdjacentHTML("beforeend", card(movieSend));
    }

    console.log(movies);
}

window.addEventListener("load", loadEvent);

*/
function loadEvent() {
    console.log("load2")

    let rootElement = document.getElementById("root")  //változó a rootelemekkel = beolvasom a #root elemeit, itt érem el őket

    let card2 = function (title, year, rate){
        return `
        <div class="card">
            <h2>${title}</h2>
            <div class="time">${year}</div>
            <div class="rate">${rate}</div>
        </div>
        `;
    }

    let anotherFavouriteMovie = {
        title: "The last scout boy",
        year: 1991,
        rate: 7
    }

    rootElement.insertAdjacentHTML("beforeend", card2(anotherFavouriteMovie.title, anotherFavouriteMovie.year, anotherFavouriteMovie.rate));

    for (const movieSend of movies) { 
        
        rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, movieSend.rate));
    }

    console.log(movies);
}
window.addEventListener("load", loadEvent);
