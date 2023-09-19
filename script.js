// Shoe data as an array of objects
const shoesData = [
    {
        name: "Luella Crystal",
        price: "R668.88",
        imageSrc: "shoe.jpeg"
    },
    {
        name: "Sudded Stappy",
        price: "R789.50",
        imageSrc: "amaze.jpeg"
    },
    {
        name: "Chunky Loafer",
        price: "R499.50",
        imageSrc: "shoe_three.webp"
    },
    {
        name: "Patant Sandal Heel",
        price: "R888.99",
        imageSrc: "five.jpg"
    },
    {
        name: "Spring Urban",
        price: "R785.99",
        imageSrc: "hope.jpeg"
    },
    {
        name: "Sunmarie Pump",
        price: "R666.79",
        imageSrc: "shoe_four.jpeg"
    },
    {
        name: "Lady in Red",
        price: "R690.79",
        imageSrc: "love.jpg"
    },
    {
        name: "Classic Maryjanes",
        price: "R456.99",
        imageSrc: "shoe_two.jpg"
    },
    {
        name: "Floral boots",
        price: "R799.99",
        imageSrc: "shoe_eight.jpg"
    },
    {
        name: "Boho Skaters",
        price: "R1000.00",
        imageSrc: "shoe_seven.jpeg"
    },
    {
        name: "Barbie Courts",
        price: "R1000.00",
        imageSrc: "pp.jpg"
    },
    {
        name: "Block heel Sandal",
        price: "R199.99",
        imageSrc: "ddd.jpg"
    },
];

// Function to create a shoe card
function createShoeCard(shoe) {
    const card = document.createElement("div");
    card.classList.add("card");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image");

    const image = document.createElement("img");
    image.src = shoe.imageSrc;
    image.alt = shoe.name;

    const textDiv = document.createElement("div");
    textDiv.classList.add("text");

    const title = document.createElement("span");
    title.textContent = shoe.name;

    const price = document.createElement("p");
    price.textContent = shoe.price;

    imageDiv.appendChild(image);
    textDiv.appendChild(title);
    textDiv.appendChild(price);
    card.appendChild(imageDiv);
    card.appendChild(textDiv);

    // Add the hover effect to the card
    card.addEventListener("mouseenter", () => {
        card.classList.add("hovered");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("hovered");
    });

    return card;
}

// Function to display shoe cards
function displayShoeCards() {
    const shoeContainer = document.getElementById("shoeContainer");

    shoesData.forEach((shoe) => {
        const card = createShoeCard(shoe);
        shoeContainer.appendChild(card);
    });
}

// Call the function to display the shoe cards when the page loads
window.onload = displayShoeCards;

// Initialize an empty cart array to store selected items
const cart = [];

// Function to add a shoe to the cart
function addToCart(shoe) {
    cart.push(shoe);
    updateCartCount();
}

// Function to remove a shoe from the cart
function removeFromCart(shoe) {
    const index = cart.indexOf(shoe);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCartCount();
    }
}

// Function to update the cart count in the navbar
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    cartCountElement.textContent = cart.length;
}

// Call addToCart or removeFromCart when a user interacts with the cart
// For example, you can add a click event listener to your "Add to Cart" button on each card
// Example usage:
// const addToCartButton = document.querySelector('.add-to-cart-button');
// addToCartButton.addEventListener('click', () => {
//     addToCart(shoe);
// });
