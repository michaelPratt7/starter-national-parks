console.log(document)
const heading = document.querySelector("h1")
console.log(heading)
const valueElement = document.querySelector(".value")
console.log(valueElement)
const button = document.querySelector("button")
console.log(button)
const area = document.querySelector(".area")
console.log(area)
const divStat = document.querySelector(".stat div")
console.log(divStat)
const hello = document.querySelector(".hello")
console.log(hello)

const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
    let content = desc.innerText;

    if(content.length > 250) {
        content = content.slice(0, 250)
        content = content + '<a href="#">...</a>'
    }
    desc.innerHTML = content
  }

  const ratings = document.querySelectorAll(".rating-display .value");
  for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
    if (ratingValue > 4.7) {
        rating.classList.add("high-rating");
        rating.classList.remove("value")
      }
  }

 


  const parks = document.querySelectorAll(".park-display");
  const numberParks = parks.length;
  const newElement = document.createElement("div");
  newElement.innerText = `${numberParks} exciting parks to visit`;
  newElement.classList.add("header-statement");
  const header = document.querySelector("header");
  header.appendChild(newElement);

  
  const firstBtn = document.querySelector("button");
  firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
  });
  firstBtn.addEventListener("click", (event) => {
    console.log(event.target);
  });

  // Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target);
  });
});
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target.parentNode);
  });
});

allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});




// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

// Add an event listener 
nameSorter.addEventListener("click", (event) => {
  event.preventDefault();
  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main element
  main.innerHTML = "";
  // 4. Create an array
const parksArray = Array.from(parksList);
// 5. Sort the array
parksArray.sort((parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
});
//6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
  console.log("You clicked the name sorter");
});


// Function for sorting by name, / alternative to step 5. parksArray.sort(sortByName)
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// Function for handling the `nameSorter` click / alternative to event listener
const nameSorterClickHandler = (event) => {
  event.preventDefault();
  // 1.  get the main element
  const main = document.querySelector("main");

  // 2. get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. empty the main
  main.innerHTML = "";

  // 4. create an array
  const parksArray = Array.from(parksList);

  // 5. sort the array
  parksArray.sort(sortByName);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// the point where all the code starts
const main = () => {
  // select the nameSorter link
  const nameSorter = document.querySelector("#name-sorter");

  // add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);

  // select the ratingSorter link
  const ratingSorter = document.querySelector("#rating-sorter");

  // add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);

  // select all the buttons for all the parks
  const allBtns = document.querySelectorAll(".rate-button");

  // iterate the list of buttons and add an event handler to each
  allBtns.forEach((btn) => {
    btn.addEventListener("click", favoriteButtonClickHandler);
  });
};

// Add event listener for DOMContentLoaded
window.addEventListener("DOMContentLoaded", main);



//24.6
function validateExists(value) {
  return value && value.trim();
}

const submitHandler = (event) => {
  event.preventDefault();
   const form = event.target;
  const formData = new FormData(form);
  if(!validateExists(formData.get(form))) {
    let newDiv = document.createElement("div")
    newDiv.classList.add("error")
    newDiv.setAttribute("id", "searchError")
    newDiv.innerText = "Please enter a search term"
    form.appendChild(newDiv)
  }
}

  
  const main = () => {
  let form = document.querySelector("form")
  form.addEventListener("submit", submitHandler);
  }
  window.addEventListener("DOMContentLoaded", main)