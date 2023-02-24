// Then, you can add an event listener to the form that will send an AJAX request to the b
// ackend to retrieve the filtered search results when the form is submitted:


document.getElementById("filter-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var rating = document.getElementById("rating").value;
   
    // Send AJAX-1 request to backend to retrieve filtered search results
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var results = JSON.parse(xhr.responseText);
        displayResults(results);
      }
    };
    xhr.open("GET", "/api/filter?rating=" + rating, true);
    xhr.send();
  });
  