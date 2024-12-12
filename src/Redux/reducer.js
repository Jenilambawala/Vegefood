const initialState = {
    products: [
      {
        id: 1,
        name: "Bell Pepper",
        price: 120.00,
        salePrice: 80.00,
        image: "images/product-1.jpg",
        discount: 30,
      },
      {
        id: 2,
        name: "Strawberry",
        price: 120.00,
        image: "images/product-2.jpg",
      },
      {
        id: 3,
        name: "Green Beans",
        price: 120.00,
        image: "images/product-3.jpg",
      },
      {
        id: 4,
        name: "Purple Cabbage",
        price: 120.00,
        image: "images/product-4.jpg",
      },
      {
        id: 5,
        name: "Tomatoe",
        price: 120.00,
        image: "images/product-5.jpg",
        discount: 30,
      },
      {
        id: 6,
        name: "Brocolli",
        price: 120.00,
        image: "images/product-6.jpg",
      },
      {
        id: 7,
        name: "Carrots",
        price: 120.00,
        image: "images/product-7.jpg",
      },
      {
        id: 8,
        name: "Fruit Juice",
        price: 120.00,
        image: "images/product-8.jpg",
      },
      {
        id: 9,
        name: "Onion",
        price: 120.00,
        image: "images/product-9.jpg",
        discount: 30,
      },
      {
        id: 10,
        name: "Apple",
        price: 120.00,
        image: "images/product-10.jpg",
      },
      {
        id: 11,
        name: "Garlic",
        price: 120.00,
        image: "images/product-11.jpg",
      },
      {
        id: 12,
        name: "Chilli",
        price: 120.00,
        image: "images/product-12.jpg",
      },
    ],
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default productReducer;