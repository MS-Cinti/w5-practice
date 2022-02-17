function loadEvent() {

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

    let renderAllCardElements = function(incomingMoviesArray){
        let renderedCardList = "";
        
        //for ciklus, ami végig megy a cardsArrayen
        for (const incomingMovie of incomingMoviesArray) {
            //for ciklus minden lépcsőjénél hozzáadja a renderedCardListhez az adott elemet a megfelelő div cardban
            renderedCardList +=  `
            <div class="card">
            <h2>${incomingMovie.title}</h2>
            <div class="time">${incomingMovie.year}</div>
            <div class="rate">${incomingMovie.rate}</div>
            </div>
            `
        }
        console.log(renderedCardList);
        //returnöli az elkészült elemekkel feltöltött renderedCardListet
        return renderedCardList;
    }

    //movies.sort(function(a, b){return a.year - b.year}); // ezzel időrendi sorrendbe teszi a filmeket

    let newGoodMovies = [];

    for (const movieSend of movies) {      
        /* let newerThan2000 = false;
        if (movieSend.year > 2000){    
            newerThan2000 = true;
        }
        if (newerThan2000) {
            rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, movieSend.rate));
        } */
        //let floorRate = Math.floor(movieSend.rate);

        if (movieSend.year > 2000 && movieSend.rate >= 8){
            newGoodMovies.push(movieSend); //csak azok, amikre igazak az állítások
            //rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, floorRate));
        }
    }

    

    newGoodMovies.sort(function(a, b){return a.year - b.year});
    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies));
}
window.addEventListener("load", loadEvent);
