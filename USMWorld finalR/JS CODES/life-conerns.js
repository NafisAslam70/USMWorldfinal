document.getElementById("post-concern-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    // Send AJAX request to backend to post concern
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert("Your concern has been posted!");
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
      }
    };
    xhr.open("POST", "/api/post_concern", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ title: title, description: description }));
  });