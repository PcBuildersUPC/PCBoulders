<template>
    <div class="product-list">
      <div class="sidebar">
        <h1 class="company-name">PC BUILDERS</h1>
        <div class="company-info">
          <p class="company-description">¡Bienvenido a PC BUILDERS!</p>
          <p class="company-description">Aquí encontrarás una amplia selección de productos de electrónica para construir tu propia PC.</p>
        </div>
        <button class="edit-products-button" @click="editProducts">Editar productos</button>
      </div>
      <div class="product-list-container">
        <h2 class="product-list-title">Lista de productos</h2>
        <div class="product-card" v-for="product in products" :key="product.id">
          <div class="product-image-container">
            <img :src="product.image" :alt="product.name" class="product-image">
          </div>
          <div class="product-details">
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-description">{{ product.description }}</p>
            <p class="product-price">Precio: S/ {{ product.price }}</p>
          </div>
          <button class="product-button">Añadir al carrito</button>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .product-list {
    display: flex;
    background-color: #f2f2f2;
    color: #333333;
 
  }
  
  .sidebar {
    padding: 20px;
    width: 300px;
    background-color: #ffffff;
  }
  
  .company-name {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    color: #ff6600;
  }
  
  .company-info {
    margin-top: 20px;
  }
  
  .company-description {
    margin: 10px 0;
    font-size: 16px;
    line-height: 1.5;
  }
  
  .product-list-container {
    padding: 20px;
    flex-grow: 1;
  }
  
  .product-list-title {
    margin-top: 0;
    font-size: 20px;
    font-weight: bold;
  }
  
  .product-card {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .product-image-container {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    background-color: #eeeeee;
    border-radius: 8px;
  }
  
  .product-image {
    max-width: 100%;
    max-height: 100%;
  }
  
  .product-details {
    flex-grow: 1;
  }
  
  .product-name {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }
  
  .product-description {
    margin: 5px 0;
    font-size: 16px;
    line-height: 1.5;
  }
  
  .product-price {
    margin: 5px 0;
    font-size: 16px;
    color: #888888;
  }
  
  .product-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .product-button:hover {
    background-color: #0056b3;
  }
  
  .edit-products-button {
    padding: 10px 20px;
    background-color: #ff6600;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;
    margin-top: 20px;
  }
  
  .edit-products-button:hover {
    background-color: #ff5500;
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        products: [
          {
            id: 1,
            name: "Procesador Intel Core i7",
            description: "Potente procesador para un rendimiento excepcional.",
            price: "1,299",
            image: "https://via.placeholder.com/200x200"
          },
          {
            id: 2,
            name: "Tarjeta gráfica NVIDIA GeForce RTX 3080",
            description: "La mejor tarjeta gráfica para juegos de última generación.",
            price: "4,999",
            image: "https://via.placeholder.com/200x200"
          },
          {
            id: 3,
            name: "Memoria RAM Corsair Vengeance RGB Pro",
            description: "Memoria RAM de alta velocidad con efectos de iluminación RGB.",
            price: "699",
            image: "https://via.placeholder.com/200x200"
          },
          {
            id: 4,
            name: "Placa base ASUS ROG Strix Z590-E Gaming",
            description: "Placa base de alta gama para un rendimiento óptimo.",
            price: "1,199",
            image: "https://via.placeholder.com/200x200"
          },
          {
            id: 5,
            name: "Disco duro SSD Samsung 970 EVO Plus",
            description: "Almacenamiento de alta velocidad para cargar rápidamente tus aplicaciones y juegos.",
            price: "599",
            image: "https://via.placeholder.com/200x200"
          },
          {
            id: 6,
            name: "Fuente de alimentación Corsair RM750x",
            description: "Fuente de alimentación confiable y eficiente para tu PC.",
            price: "449",
            image: "https://via.placeholder.com/200x200"
          }
        ]
      };
    },
    methods: {
      editProducts() {
        // Lógica para editar productos
      }
    }
  };
  </script>
  