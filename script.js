// Initial References
let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

// Function to fetch data from API
let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&
    apikey=${key}`;
    // If input field is empty
    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;

    }
    // If input field is Not empty
    else {
        fetch (url)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                console.log(data.Poster);
                console.log(data.Title);
                console.log(data.imbdRating);
                console.log(data.Rated);
                console.log(data.Year);
                console.log(data.Runtime);
                console.log(data.Genre);
                console.log(data.Plot);
                console.log(data.Actors);
            });
    }
};

window.addEventListener("load",getMovie);