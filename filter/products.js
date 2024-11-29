// Array of products
const products = [
    {
        title: "Espoir Black DIAL and Silver Strap Watch",
        image: "https://m.media-amazon.com/images/I/71+EXKho4VS._SX679_.jpg",
        Casediameter: "38.5 Millimetres",
        Bandcolour :"Silver",
        Warranty: "typeManufacturer",
        price: 359
    },
    {
        title: "Espoir Stainless Steel Analog Mens Watch",
        image: "https://m.media-amazon.com/images/I/71QoQPgheFL._SX679_.jpg",
        Casediameter: "40 Millimetres",
        Bandcolour: "Silver",
        Warrantytype :"Manufacturer",
        price: 299
    },
    {
        title: "LOUIS DEVIN WT030 Leather Strap Analog Wrist Watch for Men",
        image: "https://m.media-amazon.com/images/I/81kLhCWFSjL._SX679_.jpg",
        Casediameter: "45 Millimetres",
        Bandcolour: "Silver",
        Warrantytype :"Manufacturer",
        price: 379
    },
    {
        title: "Casio Vintage A158WA-1DF Black Digital Dial Silver Stainless Steel Band D011",
        image: "https://m.media-amazon.com/images/I/61ybeKQto8L._SY679_.jpg",
        Casediameter: "45 Millimetres",
        Bandcolour: "Silver",
        Warrantytype :"Manufacturer",
        price: 459
    },
    {
        title: "SELLORIA Black Dial Analogue Stainless Still Black Dial Analog Watch",
        image: "https://m.media-amazon.com/images/I/41D0W0JLCIL.jpg",
        Casediameter: "45 Millimetres",
        Bandcolour: "Black",
        Warrantytype :"No Warranty",
        price: 199
    },
    {
        title: "Titan Quartz Analog Silver Dial Leather Strap Watch for Women",
        image: "https://m.media-amazon.com/images/I/61Zd0Uuw0uL._SX679_.jpg",
        Casediameter: "27 Millimetres",
        Bandcolour: "Brown",
        Warrantytype :"Manufacturer",
        price: 1995
    },
    {
        title: "Matrix Minimalist Dial with Softest Silicone Strap Analog Wrist Watch",
        image: "https://m.media-amazon.com/images/I/618MdeNFBmL._SX679_.jpg",
        Casediameter: "57 Millimetres",
        Bandcolour: "57",
        Warrantytype :"Manufacturer",
        price: 549
    },
    {
        title: "SELLORIA Silicone Digital Watch Shockproof Multi-Functional Automatic Black Color Strap",
        image: "https://m.media-amazon.com/images/I/61YTgYOiedL._SY679_.jpg",
        Casediameter: "28 Millimetres",
        Bandcolour: "Black",
        Warrantytype :"No Warranty",
        price: 169
    },
    {
        title: "Matrix Antique 2.0 Day & Date Softest Silicone Strap Analog Watch for Men",
        image: "https://m.media-amazon.com/images/I/711NXCmUfbL._SX679_.jpg",
        Casediameter: "44 Millimetres",
        Bandcolour: "Black",
        Warrantytype :"Manufacturer",
        price: 318
    },
    {
        title: "Fastrack Analog Unisex-Adult Watch",
        image: "https://m.media-amazon.com/images/I/61FFBTzKiUL._SX679_.jpg",
        Casediameter: "57 Millimetres",
        Bandcolour: "Black",
        Warrantytype :"Manufacturer",
        price: 809
    },
    {
        title: "NIBOSI Watches Men Sport Quartz Watches",
        image: "https://m.media-amazon.com/images/I/516QZXGuq+L._SY679_.jpg",
        Casediameter: "43 Millimetres",
        Bandcolour: "Black",
        Warrantytype :"Manufacturer",
        price: 1990
    },
    {
        title: "Titan Karishma Analog Black Dial Men's Watch",
        image: "https://m.media-amazon.com/images/I/51ykbSj-eoL._SX679_.jpg",
        Casediameter: "45.6 Millimetres",
        Bandcolour: "Silver",
        Warrantytype :"Manufacturer",
        price: 1995
    },
];

// Function to render products
function renderProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = ''; // Clear the container

    products.forEach((product, index) => {
        const productCard = `
            <div class="col-md-3">
                <div class="card" data-value="${product.price}">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body bg-dark text-light">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">Casediameter: ${product.Casediameter}</p>
                        <p class="card-text">Bandcolour: ${product.Bandcolour}</p>
                        <p class="card-text">Warrantytype: ${product.Warrantytype}</p>
                        <p class="card-text">Price: ₹${product.price}</p>
                        <button class="btn btn-secondary" onclick="addToCart(${index})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productCard;
    });
}

// Initialize the products page
renderProducts();

// Filter Function
function filter() {
    const minPrice = parseInt(document.getElementById('min').value) || 0;
    const maxPrice = parseInt(document.getElementById('max').value) || Infinity;

    // Select all product cards
    const cards = document.querySelectorAll('.card');

    // Iterate through each card and apply filter
    cards.forEach(card => {
        const price = parseInt(card.getAttribute('data-value'));

        // Use `closest` to manipulate the parent column
        if (price >= minPrice && price <= maxPrice) {
            card.closest('.col-md-3').style.display = 'block';
        } 
        else {
            card.closest('.col-md-3').style.display = 'none'; 
        }
    });
}

// Function to add a product to the cart
function addToCart(index) {
    const product = products[index];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.title} added to cart!`);
}

