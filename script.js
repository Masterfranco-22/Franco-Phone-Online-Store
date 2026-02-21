function buyNow(productName) {
    alert("You selected: " + productName + 
          "\nProceed to Contact page to complete your order.");
}
function buyNow(productName) {
    localStorage.setItem("selectedProduct", productName);
    window.location.href = "contact.html";
}

// When contact page loads
window.onload = function() {
    const product = localStorage.getItem("selectedProduct");
    if (product) {
        const textarea = document.getElementById("productField");
        if (textarea) {
            textarea.value = product;
        }
    }
}