const axios = require("axios");
const { response } = require("express");
const port = 3000;
const dataServiceBaseUrl = ` :${port}`;

function getMovie() {
  //obican
  axios
    .get(dataServiceBaseUrl + "/api/movie")
    .then((response) => {
      console.log("Success: ", response.data);
    })
    .catch((error) => {
      debugger;
      console.error("Error: ", error);
    });
}

function getMovieById() {
  //request params
  axios
    .get(dataServiceBaseUrl + "/api/movie/1")
    .then((response) => {
      console.log("Success: ", response.data);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

function getMovieByRatingOrName() {
  //with query params
  const rating = 8;
  const name = "Pulp Fiction";
  axios
    .get(dataServiceBaseUrl + `/api/movie?rating=${rating}&name=${name}`)
    .then((response) => {
      console.log("Success: ", response.data);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

function wontGetAnythingJustForShow() {
  //s ekstra headerima
  const config = {
    headers: {
      Authorization: "Bearer YourAuthToken",
      Accept: "application/json",
    },
  };
  axios
    .get(dataServiceBaseUrl + "/api", config)
    .then((response) => {
      console.log("Success:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

//POST REQUEST
function addMovie() {
  const postData = {
    id: 11,
    title: "The Hangover",
  };
  const headers = {
    "Content-Type": "application/json",
  };

  axios
    .post(dataServiceBaseUrl + "/api/movie", postData, { headers: headers })
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      debugger;
      console.error("Error:", error);
    });
}

//PUT REQUEST
function changeMovieInfo() {
  const updatedMovieData = {
    id: 1,
    title: "The Shawshank Redemption",
    genres: ["Drama"],
    year: 1994,
    rating: 9.5,
  };

  axios
    .put(dataServiceBaseUrl + "/api/movie/1", updatedMovieData)
    .then((response) => {
      debugger;
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

//PATCH REQUEST
function changePartOfMovieInfo() {
  const partialMovieData = {
    rating: 9.6,
  };

  axios
    .patch(dataServiceBaseUrl + "/api/movie/1", partialMovieData)
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

//DELETE REQUEST
function deleteMovie() {
  axios
    .delete(dataServiceBaseUrl + "/api/movie/1")
    .then((response) => {
      console.log("Success: ", response.data);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

//MAIN
//-------------------------------------- GET
//getMovie();
//getMovieById();
//getMovieByRatingOrName();
//wontGetAnythingJustForShow();

//-------------------------------------- POST


//////////////////			 3. Vježbe 		///////////////////////
/*
// 1. zadatak -> Dodati novi film 
function addMovie() {
	const postData = {
		id: 12,
		title: 'Mamurluk',
	  };
	const headers = {
		'Content-Type': 'application/json',
	  };

	axios.post(dataServiceBaseUrl + '/api/movie/', postData, {headers: headers} )
		.then(response => { console.log('Response:', response.data)})
		.catch(error => { debugger; console.error('Error:', error)});
}
addMovie();



// 2. zadatak -> Dohvatiti sve filmove
getMovie();


// 3. zadatak -> Promjeniti ime novog filma
function changePartOfMovieInfo() {
	const partialMovieData = {
		title: 'Spiderman'
	};

	axios.patch(dataServiceBaseUrl + '/api/movie/12', partialMovieData)
		.then(response => { console.log('Response:', response.data)})
		.catch(error => { console.error('Error:', error)});
}
changePartOfMovieInfo();

// 4. zadatak -> Dohvatiti sve filmove
getMovie();


*/


///////////////////////////			4. vježbe 			////////////////////
// 1. Zadatak -> Dodati funkcionalnost koja briše filmove. Input je lista id-eva.
// function deleteMovies(ids) {
//   ids.forEach((id) => {
//     axios
//       .delete(dataServiceBaseUrl + "/api/movie/" + id)
//       .then((response) => {
//         console.log("Success: ", response.data);
//       })
//       .catch((error) => {
//         console.error("Error: ", error);
//       });
//   });
// }

// const arrayId = [50,51,52];
// deleteMovies(arrayId);
// getMovie();

// 2. zadatak
// Dodati funkcionalnost koja računa prosječnu vrijenost ratinga
function calculateAverageRating() {
  axios
    .get(dataServiceBaseUrl + "/api/movie")
    .then((response) => {
      const movies = response.data;
      if (movies.length === 0) {
        console.log("No movies to calculate the average rating.");
        return;
      }

      const totalRating = movies.reduce((acc, movie) => acc + movie.rating, 0);
      const averageRating = totalRating / movies.length;

      console.log("Average Rating:", averageRating);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

calculateAverageRating();



//////////////////////////////// MOJI ZADACI /////////////////////////
// 1. Zadatak (smislio ja)
// Napravi funkcionalnost koja ispisuje samo imena svih filmova koje imaš u bazi
// function getMovieName(){
//   axios
//   .get(dataServiceBaseUrl + "/api/titleMovie")
//   .then((response) => {
//     console.log("Imena svih filmova:");
//     console.log(response.data);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });
// }

// getMovieName();


// 2. Zadatak -> Dodati funkcionalnost koja filtrira filmove koji su stariji od 2005 godine 
function countByYears(){
  axios
  .get(dataServiceBaseUrl + "/api/countByYears")
  .then((response) => {
    console.log("Filmovi koji su noviji od 2005. godine:");
    console.log("Success:", response.data);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
}
countByYears();

//////////////////////////////// MOJI ZADACI /////////////////////////