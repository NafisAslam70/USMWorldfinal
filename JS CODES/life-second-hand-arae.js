
// Get list of items from backend
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var items = JSON.parse(xhr.responseText);
    displayItems(items);
  }
};
xhr.open("GET", "/api/items", true);
xhr.send();

function displayItems(items) {
  var itemsDiv = document.getElementById("items");
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var div = document.createElement("div");
    div.classList.add("item", "col-sm-4");
    div.innerHTML = '<div class="name">' + item.name + '</div>' +
                    '<div class="image"><img src="' + item.image + '" alt="' + item.name + '"></div>' +
                    '<div class="description">' + item.description + '</div>' +
                    '<div class="price">$' + item.price + '</div>';
    itemsDiv.appendChild(div);
  }
}

// Submit form to post an item
document.getElementById("post-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var image = document.getElementById("image").value;
  var description = document.getElementById("description").value;
  var price = document.getElementById("price").value;
  // Send AJAX request to backend to post item
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Clear form and display success message
      document.getElementById("post-form").reset();
      document.getElementById("success").style.display = "block";
      setTimeout(function() {
        document.getElementById("success").style.display = "none";
      }, 2000);
    }
  };
  xhr.open("POST", "/api/items", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({
    name: name,
    image: image,
    description: description,
    price: price
  }));
});

      