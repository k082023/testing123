document.addEventListener("DOMContentLoaded", function() {
    // Load JSON data
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const cardContainer = document.getElementById("cardContainer");
            data.forEach(item => {
                const card = createCard(item);
                cardContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error fetching JSON data: ", error);
        });
});

function createCard(data) {
    const card = document.createElement("div");
    card.classList.add("card");

    // Create card content based on the JSON data
    // You can customize this based on the structure of your JSON
    const cardContent = `
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <!-- Add more content here -->
    `;

    card.innerHTML = cardContent;
    return card;
}
