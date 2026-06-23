var inventory = [
  { name: "Dell XPS 15", inStock: true },
  { name: "Dell Inspiron 14", inStock: true },
  { name: "Dell Alienware m16", inStock: false },
  { name: "Dell Latitude 5540", inStock: true }
];
function displayInventory() {
  var list = document.getElementById("product-list");
  list.innerHTML = "";

  for (var i = 0; i < inventory.length; i++) {
    var item = inventory[i];
    var li = document.createElement("li");
    li.textContent = item.name + " - " + (item.inStock ? "In Stock" : "Out of Stock");
    list.appendChild(li);
  }
}

displayInventory();
function addProduct() {
  var input = document.getElementById("product-input");
  var name = input.value.trim();

  if (name === "") {
    alert("Please enter a product name!");
    return;
  }

  inventory.push({ name: name, inStock: true });
  input.value = "";
  displayInventory();
}