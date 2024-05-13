const product = {
  product_id: "1",
  product_name: "iPhone",
  quantity_in_stock: 100,
  unit_price: 32000,
  product_description: {
    product_brand: "Apple",
    size_or_quantity: "6.7inch",
    taste_or_scent: "NULL",
    color: "Blue",
    additional_description: "Extra details about the product.",
  },
};

console.log("Product ID: ", product.product_id);
console.log("Product Name: ", product.product_name);
console.log("Quantity in Stock: ", product.quantity_in_stock);
console.log("Unit Price: ", product.unit_price);
console.log("Product Brand: ", product.product_description.product_brand);
console.log("Size or Quantity: ", product.product_description.size_or_quantity);
console.log("Taste or Scent: ", product.product_description.taste_or_scent);
console.log("Color: ", product.product_description.color);
console.log(
  "Additional Description: ",
  product.product_description.additional_description
);
