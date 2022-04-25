function loadEvent() {

    let rootElement = document.getElementById("root")  

    /* let card2 = function (title, year, rate){
        return `
        <div class="card">
            <h2>${title}</h2>
            <div class="time">${year}</div>
            <div class="rate">${rate}</div>
        </div>
        `;
    } */

    //arrow function változat:
    const card2 = (title, year, rate) => {
        return `
        <div class="card">
            <h2>${title}</h2>
            <div class="time">${year}</div>
            <div class="rate">${rate}</div>
        </div>
        `;
    }

    //let renderAllCardElements = function(incomingMoviesArray){
    const renderAllCardElements = (incomingMoviesArray) => {
        let renderedCardList = `<div class="cards">`;
        
        /* //for ciklus, ami végig megy a cardsArrayen
        for (const incomingMovie of incomingMoviesArray) {
        //for ciklus minden lépcsőjénél hozzáadja a renderedCardListhez az adott elemet a megfelelő div cardban
            renderedCardList += card2(incomingMovie.title, incomingMovie.year, incomingMovie.rate)
            /* renderedCardList +=  `
            <div class="card">
            <h2>${incomingMovie.title}</h2>
            <div class="time">${incomingMovie.year}</div>
            <div class="rate">${incomingMovie.rate}</div>
            </div>
            ` 
        } */

        incomingMoviesArray.map(incomingMovie => {
            renderedCardList += card2(incomingMovie.title, incomingMovie.year, incomingMovie.rate)
        })

        renderedCardList += `</div>`

        //console.log(renderedCardList);
        //returnöli az elkészült elemekkel feltöltött renderedCardListet
        return renderedCardList;
    }

    let newGoodMovies = []; //feltöltjük a kövi for-ral

    /* for (const movieSend of movies) {      

        if (movieSend.year > 2000 && movieSend.rate >= 8){
            newGoodMovies.push(movieSend);
        }
    } */

    movies.map(movieSend => {
        if (movieSend.year > 2000 && movieSend.rate >= 8){
            newGoodMovies.push(movieSend);
        }
    })

    newGoodMovies.sort(function(a, b){return a.year - b.year}); //sorrendbe tesszük
    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies)); 
    //meghívom a renderAllCardElementset
}

window.addEventListener("load", loadEvent);
