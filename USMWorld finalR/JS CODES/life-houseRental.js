document.getElementById("post-property-button").addEventListener("click", function() {
    $("#post-property-modal").modal();
  });
  
  document.getElementById("submit-button").addEventListener("click", function() {
    // Collect form data
    var name = document.getElementById("name").value;
    var location = document.getElementById("location").value;
    var rent = document.getElementById("rent").value;
    var bedrooms = document.getElementById("bedrooms").value;
    var description = document.getElementById("description").value;
    var image = document.getElementById("image").files[0];
    // Validate form data
    if (!name || !location || !rent || !bedrooms || !description || !image) {
      alert("Please fill in all fields");
      return;
    }
    // Create FormData object to send form data to server
    var formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("rent", rent);
    formData.append("bedrooms", bedrooms);
    formData.append("description", description);
    formData.append("image", image);
    // Send AJAX request to backend to post property
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var result = JSON.parse(xhr.responseText);
        if (result.success) {
          $("#post-property-modal").modal("hide");
          alert("Property posted successfully");
        } else {
          alert("Error posting property: " + result.error);
        }
      }
    };
    document.getElementById("post-property-button").addEventListener("click", function() {
        $("#post-property-modal").modal();
      });
      
      document.getElementById("submit-button").addEventListener("click", function() {
        // Collect form data
        var name = document.getElementById("name").value;
        var location = document.getElementById("location").value;
        var rent = document.getElementById("rent").value;
        var bedrooms = document.getElementById("bedrooms").value;
        var description = document.getElementById("description").value;
        var image = document.getElementById("image").files[0];
        // Validate form data
        if (!name || !location || !rent || !bedrooms || !description || !image) {
          alert("Please fill in all fields");
          return;
        }
        // Create FormData object to send form data to server
        var formData = new FormData();
        formData.append("name", name);
        formData.append("location", location);
        formData.append("rent", rent);
        formData.append("bedrooms", bedrooms);
        formData.append("description", description);
        formData.append("image", image);
        // Send AJAX request to backend to post property
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText);
            if (result.success) {
              $("#post-property-modal").modal("hide");
              alert("Property posted successfully");
            } else {
              alert("Error posting property: " + result.error);
            }
          }
        };