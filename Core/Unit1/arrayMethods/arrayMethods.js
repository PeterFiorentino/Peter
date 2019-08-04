// ################ For Each ###############


//array.forEach(function) goes through the entire array and uses each element in the callback function.

let arr = [1, 2, 3];

function logVal (currentElem) {
  console.log(currentElem);
}

arr.forEach(logVal);



//this is the same thing but with an anonymous ES6 function (use this when the function will only be used once.)
//array.forEach((element) => {anonymous function})
arr.forEach((currentElem, index) => {
  console.log(index + " " + currentElem);
})


arr.forEach((currentElem) => {
  console.log(currentElem * 2);
})

let mixedArr = [1, true, "hello", {color: "red"}];

mixedArr.forEach((currentElem) => {
  console.log(currentElem + " is a " + typeof currentElem);
})
//forEach() does not use return.

//####################### Map ############################
// map() acts like forEach() by going through the array, but then pushes its return into a new array.

let result = arr.map((currentElem) => {
  return currentElem * 2
})

console.log(result)

//##########

let films = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
]



let ratingAndTitlePairs = films.map((movie) => {
  return {title: movie.title, rating: movie.rating}
})

console.log(ratingAndTitlePairs);

//######################## Filter #######################
// Filters through your array, applys the number to a function, if it is true it gets placed in a new array

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArray = arr1.filter((currentElem) => {
  return currentElem % 2 === 0;
})

console.log(newArray);

let bestFilms = films.filter((movie) => {
  return movie.rating === 5
}).map((movie) => {
  return movie.title;
})

console.log(bestFilms)

let mappedBestFilms = bestFilms.map((movie) => {
  return movie.title
})

console.log(mappedBestFilms);



// ####################### Reduce #######################

let arr2 = [3, 41, 65, 17, 8, 0]

let biggestNum = arr2.reduce((acc, currentElem) => {
  if (acc > currentElem) {
    return acc;
  } else {
    return currentElem;
  }
})

console.log(biggestNum);
