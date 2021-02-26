import { getProduct } from '../api';

import Rating from '../components/Rating';
import { hideLoading, parseRequestUrl, showLoading } from '../util';

const ProductScreen = {
  after_render:() => {
    const request = parseRequestUrl();

    document.getElementById("add-button").addEventListener('click', () => {
          document.location.hash = `/cart/${request.id}`;
  } );
  },
  render: async () => {
    const request =  parseRequestUrl();
    showLoading();

    const product = await getProduct (request.id);
    if(product.error){
      return `<div>${product.error}</div>`;
    }
    hideLoading();

    return `<div class="content">
    <div class="back-to-result">
      <a href="/#/">Regresar</a>
    </div>
    <div class="details">
    <div class="details-image">
     <img src="${product.image}" alt="${product.name}"/>
    </div>
    <div class="details-info">
      <ul>
        <li>
          <h1>${product.name}</h1>
        </li>
        <li>
        ${Rating.render({
          value: product.rating,
          text: `${product.numReviews} reviews`,
        })}
        </li>
        <li>
        Precio: <strong>₡${product.price}</strong>
        </li>
        <li>
        Descripción:
        <div>
        ${product.description}
        </div>
        </li>
      </ul>         
    </div>
    <div class="details-action">
    <ul>
    <li>
    Precio: ₡${product.price}
    </li>
    <li>
    Estado:
    ${
      product.countInStock > 0
      ? `<span class="success">Disponible</span>`
      : `<span class="error">No hay stock</span>`
    }
    </li>
    <li>
    <button id="add-button" class="fw primary"> Agregar al carrito
    </li>
    </ul>
        </div>

    </div>
    </div>`;
  },
};
export default ProductScreen;
