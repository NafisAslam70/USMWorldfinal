
// // selection visibility

// const headings = document.querySelectorAll('#eat-drink-play h3');

//     headings.forEach(heading => {
//       heading.addEventListener('click', () => {
//         heading.nextElementSibling.classList.toggle('visible');
//       });
//     });

document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var location = document.getElementById("location").value;
    var cuisine = document.getElementById("cuisine").value;
    var delivery = document.getElementById("delivery").checked;
   
    // Send AJAX request to backend to retrieve search results
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var results = JSON.parse(xhr.responseText);
        displayResults(results);
      }
    };
    xhr.open("GET", "/api/search?location=" + encodeURIComponent(location) + "&cuisine=" + encodeURIComponent(cuisine) + "&delivery=" + delivery, true);
    xhr.send();
  });
  
  function displayResults(results) {
    var searchResultsDiv = document.getElementById("search-results");
    searchResultsDiv.innerHTML = "";
    for (var i = 0; i < results.length; i++) {
      var result = results[i];
      var div = document.createElement("div");
      div.classList.add("result", "col-sm-4");
      div.innerHTML = '<div class="name">' + result.name + '</div>' +
                      '<div class="location">' + result.location + '</div>' +
                      '<div class="rating">';
      for (var j = 0; j < 5; j++) {
        if (j < result.rating) {
          div.innerHTML += '<span class="star">&#9733;</span>';
        } else {
          div.innerHTML += '<span class="star empty">&#9733;</span>';
        }
      }
      div.innerHTML += '</div>';
      if (result.price) {
        div.innerHTML += '<div class="price">' + result.price + '</div>';
      }
      div.innerHTML += '<button class="btn btn-primary more-info" data-id="' + result.id + '">More info</button>';
      searchResultsDiv.appendChild(div);
    }
  }
  var moreInfoButtons = document.querySelectorAll(".more-info");
moreInfoButtons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    var id = event.target.getAttribute("data-id");
   
    // Send AJ
    
    //   This code will display the search results in the "search-results" element on the page by creating a div 
    //   for each result and appending it to the "search-results" element. 
    //   It will also display the name, location, rating, and price (if available) for each result//