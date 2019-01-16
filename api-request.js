let url =  "https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=1d81b476474d4f2087e7d125159a34f6";

fetch(url)
  .then(r => {
    return r.json();
  })
  .then(data => {
    let results = data.articles; // get the array of results from the data object
    let holdingList = document.createElement("ol"); // create a new `<li>`
    let body = document.querySelector("body"); // attach to the `<body>` node of the DOM
    body.appendChild(holdingList); // append the list to the body
    results.map(story => {
      // loop through each story object in the array of stories

      if (story.content == null){
        story.content = "No description provided. Click Title for the story.";
      }
      let storyItem = document.createElement("li"); // create a story item `<li>`
      storyItem.innerHTML = "<a href="+ story.url +">"+ story.title +"</a><br>"+ story.content;
      holdingList.appendChild(storyItem); // append each story to the `<ul>`
    });
  })
  .catch(e => {
    console.log(`An error occurred: ${e}`);
  });
