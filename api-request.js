let url = "https://cors-anywhere.herokuapp.com/http://recipepuppy.com/api";

fetch(url)
  .then(r => {
    return r.json();
  })
  .then(data => {
    let results = data.results; // get the array of results from the data object
    let recipeList = document.createElement("ul"); // create a new `<li>`
    let body = document.querySelector("body"); // attach to the `<body>` node of the DOM
    body.appendChild(recipeList); // append the list to the body
    results.map(recipe => {
      // loop through each recipe object in the array of recipes
      let recipeItem = document.createElement("li"); // create a recipe item `<li>`
      recipeItem.innerHTML = '<a href='+ recipe.href + '><img src=' + recipe.thumbnail + '></a><br><a href="' + recipe.href + '">' + recipe.title + "</a><br><ol> <span id='ingredients'>Ingredients</span> <br> " + recipe.ingredients +"</ol><br><br>" ; // add the link to each li with each recipe's title as the text and link as the href
      recipeList.appendChild(recipeItem); // append each recipe to the `<ul>`
    });
  })
  .catch(e => {
    console.log(`An error occurred: ${e}`);
  });


"<br><a href=" + recipe.href + '>' + recipe.title + "</a><br><ol> " + recipe.ingredients +"</ol><br><br>"

//'<a href='+ recipe.href + '><img src=' + recipe.thumbnail + '></a>'


//<a href="https://news.ycombinator.com"><img id="logo"src="y18.gif" width="18" height="18" style="border: 1px white solid;" alt="hacker news logo"></a>


//'<a href="' + recipe.href + '"><img src="' + recipe.thumbnail + '"> </a>'
