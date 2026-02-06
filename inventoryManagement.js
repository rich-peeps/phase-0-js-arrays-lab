// Write your code here
//Array of products
const products = ['Laptop', 'Phone', 'Headphones', 'Monitor Wine']
// Log first product
function logFirstProduct() {
  console.log(products[0])
}
//  Add a new product
function addProduct(productName) {
  products.push(productName)
}
// Update product name by position (index)
function updateProductName(position, newName) {
  products[position] = newName
}
// Remove last product
function removeLastProduct() {
  products.pop()
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
