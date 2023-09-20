// Shoe data as an array of objects
const shoesData = [
    {
        name: "Luella Crystal",
        price: "R668.88",
        sizes: "4 5",
        imageSrc: "./public/shoe.jpeg"
    },
    {
        name: "Sudded Stappy",
        price: "R789.50",
        sizes: "4 5",
        imageSrc: "./public/amaze.jpeg"
    },
    {
        name: "Chunky Loafer",
        price: "R499.50",
        sizes: "7 8",
        imageSrc: "./public/shoe_three.webp"
    },
    {
        name: "Patant Sandal Heel",
        price: "R888.99",
        sizes: "7 8",
        imageSrc: "./public/five.jpg"
    },
    {
        name: "Spring Urban",
        price: "R785.99",
        sizes: "4 5",
        imageSrc: "./public/hope.jpeg"
    },
    {
        name: "Sunmarie Pump",
        price: "R666.79",
        sizes: "5 6",
        imageSrc: "./public/shoe_four.jpeg"
    },
    {
        name: "Lady in Red",
        price: "R690.79",
        sizes: "5 6",
        imageSrc: "./public/love.jpg"
    },
    {
        name: "Classic Maryjanes",
        price: "R456.99",
        sizes: "7 8",
        imageSrc: "./public/shoe_two.jpg"
    },
    {
        name: "Floral boots",
        price: "R799.99",
        sizes: "4 5",
        imageSrc: "./public/shoe_eight.jpg"
    },
    {
        name: "Boho Skaters",
        price: "R1000.00",
        sizes: "4 5 6",
        imageSrc: "./public/shoe_seven.jpeg"
    },
    {
        name: "Barbie Courts",
        price: "R1000.00",
        sizes: "6 7 8",
        imageSrc: "./public/pp.jpg"
    },
    {
        name: "Block heel Sandal",
        price: "R199.99",
        sizes: "5 6 7",
        imageSrc: "./public/ddd.jpg"
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

    const sizeOptions = document.createElement("div");
    sizeOptions.classList.add("size-options");

    shoe.sizes.split(" ").forEach((size) => {
        const sizeLabel = document.createElement("label");
        const sizeInput = document.createElement("input");
        sizeInput.type = "checkbox";
        sizeInput.value = size;
        sizeLabel.textContent = size; // Set the label text to the size
        sizeLabel.appendChild(sizeInput);
        sizeOptions.appendChild(sizeLabel);
    });

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.addEventListener("click", () => {
        const selectedSizes = Array.from(sizeOptions.querySelectorAll("input[type=checkbox]:checked")).map(input => input.value);
        if (selectedSizes.length > 0) {
            const shoeCopy = { ...shoe }; // Create a copy of the shoe object
            shoeCopy.selectedSizes = selectedSizes; // Add selected sizes to the shoe object
            addToCart(shoeCopy);
        }
    });

    imageDiv.appendChild(image);
    textDiv.appendChild(title);
    textDiv.appendChild(price);
    textDiv.appendChild(sizeOptions);
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

