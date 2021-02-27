/* eslint-disable no-unused-vars */
import axios from 'axios';
import Rating from '../components/Rating';
import { getProducts } from '../api';


const HomeScreen = {
  render: async () => {
    const products = await getProducts();
    if (products.error) {
      return `<div class="error">${products.error}</div>`;
    }
    return `
    <div id="demo" class="carousel slide" data-ride="carousel">
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
      <li data-target="#demo" data-slide-to="3"></li>

      </ul>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../../images/2.png" alt="Los Angeles" width="1100" height="500">
        <div class="carousel-caption">
          <h3>Llantas Grecia los mejores precios</h3>
          <p>Encuentranos en WAZE</p>
        </div>   
      </div>
      <div class="carousel-item">
        <img src="../../images/4.png" alt="Chicago" width="1100" height="500">
        <div class="carousel-caption">
          <h3>Grecia de Alajuela</h3>
          <p>Servicio de alta calidad</p>
        </div>   
      </div>
      <div class="carousel-item">
        <img src="../../images/5.png" alt="New York" width="1100" height="500">
        <div class="carousel-caption">
          <h3>Tenemos las mejores marcas</h3>
          <p>Precios de locura!</p>
        </div>   
      </div>
      <div class="carousel-item">
      <img src="../../images/6.png" alt="New York" width="1100" height="500">
      <div class="carousel-caption">
        <h3>Estamos en todas las redes sociales</h3>
        <p>Calidad garantizada</p>
      </div>   
    </div>

    </div>
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>
  


    <ul class="products">
      ${products
    .map(
      (product) => `
      <li>
        <div class="product">
          <a href="/#/product/${product._id}">
            <img src="${product.image}" alt="${product.name}" />
          </a>
        <div class="product-name">

          <a href="/#/product/1">
            ${product.name}
          </a>
        </div>
        <div class="product-rating">${Rating.render({value: product.rating, text: `${product.numReviews} reviews`, })}</div>
        <div class="product-brand">
          ${product.brand}
        </div>
        <div class="product-price">
        ₡${product.price}
        </div>
        </div>
      </li>
      `,
    )
    .join('\n')}
    `;
  },
};
export default HomeScreen;
