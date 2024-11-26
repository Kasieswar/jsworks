// Array of products
const products = [
    {
        title: "Majestic Man Cotton Checkered Slim Fit Casual Shirt",
        image: "https://m.media-amazon.com/images/I/71lXmdn59hL._SY741_.jpg",
        material: "Pure Cotton",
        pattern: "Checkered",
        fit: "Slim Fit",
        price: 498
    },
    {
        title: "Symbol Men's Solid Cotton Shirt | Casual | Plain | Full Sleeve",
        image: "https://m.media-amazon.com/images/I/71y0jvWeG3L._SY879_.jpg",
        material: "100% Cotton",
        pattern: "Solid",
        fit: "Regular Fit",
        price: 549
    },
    {
        title: "Majestic Man Slim Fit Satin Cotton Formal Shirt for Men",
        image: "https://m.media-amazon.com/images/I/61HoVwwzRiL._SY879_.jpg",
        material: "100% Cotton",
        pattern: "Solid",
        fit: "Regular Fit",
        price: 549
    },
    {
        title: "Dennis Lingo Men's Denim Solid Casual Shirt",
        image: "https://m.media-amazon.com/images/I/61Z4RuwOZeL._SX679_.jpg",
        material: "100% Cotton",
        pattern: "Solid",
        fit: "Regular Fit",
        price: 549
    },
    {
        title: "HKV-100 Men Striped Casual Shirt",
        image: "https://m.media-amazon.com/images/I/41PskqEODBL.jpg",
        material: "100% Cotton",
        pattern: "Solid",
        fit: "Regular Fit",
        price: 549
    },
    {
        title: "IndoPrimo Men's Casual Solid Satin Shirt for Men Full Sleeves - Crystal",
        image: "https://m.media-amazon.com/images/I/71YpLqxFChL._SY879_.jpg",
        material: "100% Cotton",
        pattern: "Solid",
        fit: "Regular Fit",
        price: 549
    },
    {
        title: "Parx Men Slim Fit Print Pattern Pure Cotton Semi Cutaway Collar Full Sleeve Casual Shirt",
        image: "",
        material: "100% Cotton",
        pattern: "Solid",
        fit: "Regular Fit",
        price: 549
    },
    {
        title: "IndoPrimo Men's Solid Regular Fit Shirt",
        image: "https://img.freepik.com/free-photo/handsome-model-man-posing_144627-42751.jpg",
        material: "100% Cotton",
        pattern: "Solid",
        fit: "Regular Fit",
        price: 549
    },
    {
        title: "Urbano Fashion Men's Full Sleeve Regular Fit Casual Denim Shirt",
        image: "https://img.freepik.com/free-photo/handsome-model-man-posing_144627-42751.jpg",
        material: "100% Cotton",
        pattern: "Solid",
        fit: "Regular Fit",
        price: 549
    },
    {
        title: "Jack & Jones Men's Slim Fit Shirt",
        image: "https://img.freepik.com/free-photo/handsome-model-man-posing_144627-42751.jpg",
        material: "100% Cotton",
        pattern: "Solid",
        fit: "Regular Fit",
        price: 549
    },
    {
        title: "Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt || Men Printed Shirt",
        image: "https://img.freepik.com/free-photo/handsome-model-man-posing_144627-42751.jpg",
        material: "100% Cotton",
        pattern: "Solid",
        fit: "Regular Fit",
        price: 549
    },
    {
        title: "Park Avenue Men's Polyester Blend Semi Cutaway Collar Full Sleeve Formal Shirt",
        image: "https://img.freepik.com/free-photo/handsome-model-man-posing_144627-42751.jpg",
        material: "100% Cotton",
        pattern: "Solid",
        fit: "Regular Fit",
        price: 549
    },
    // Add more products here
];

// Function to render products
function renderProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = ''; // Clear the container

    products.forEach((product, index) => {
        const productCard = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">Material: ${product.material}</p>
                        <p class="card-text">Pattern: ${product.pattern}</p>
                        <p class="card-text">Fit: ${product.fit}</p>
                        <p class="card-text">Price: ₹${product.price}</p>
                        <button class="btn btn-primary" onclick="addToCart(${index})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productCard;
    });
}

// Initialize the products page
renderProducts();

// Function to add a product to the cart
function addToCart(index) {
    const product = products[index];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.title} added to cart!`);
}
