const container = document.getElementById("products");
const errorMsg = document.getElementById("error");

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    data.forEach(product => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${product.image}">
        <p>${product.title}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    errorMsg.textContent = "Failed to load products. Please try again.";
    console.error(error);
  });