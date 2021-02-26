/* eslint-disable no-use-before-define */
import {
  parseRequestUrl,
  showLoading,
  hideLoading,
  showMessage,
  rerender,
} from '../util';
import { deliverOrder, getOrder, getPaypalClientId, payOrder } from '../api';
import { getUserInfo } from '../localStorage';

const addPaypalSdk = async (totalPrice) => {
  const clientId = await getPaypalClientId();
  showLoading();
  if (!window.paypal) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.paypalobjects.com/api/checkout.js';
    script.async = true;
    script.onload = () => handlePayment(clientId, totalPrice);
    document.body.appendChild(script);
  } else {
    handlePayment(clientId, totalPrice);
  }
};
const handlePayment = (clientId, totalPrice) => {
  window.paypal.Button.render(
    {
      env: 'sandbox',
      client: {
        sandbox: clientId,
        production: '',
      },
      locale: 'en_US',
      style: {
        size: 'responsive',
        color: 'gold',
        shape: 'pill',
      },

      commit: true,
      payment(data, actions) {
        return actions.payment.create({
          transactions: [
            {
              amount: {
                total: totalPrice,
                currency: 'USD',
              },
            },
          ],
        });
      },
      onAuthorize(data, actions) {
        return actions.payment.execute().then(async () => {
          showLoading();
          await payOrder(parseRequestUrl().id, {
            orderID: data.orderID,
            payerID: data.payerID,
            paymentID: data.paymentID,
          });
          hideLoading();
          showMessage('Payment was successfull.', () => {
            rerender(OrderScreen);
          });
        });
      },
    },
    '#paypal-button'
  ).then(() => {
    hideLoading();
  });
};

const OrderScreen = {
  after_render: async () => {
    const request = parseRequestUrl();
    document
      .getElementById('deliver-order-button')
      .addEventListener('click', async () => {
        showLoading();
        await deliverOrder(request.id);
        hideLoading();
        showMessage('Order Delivered.');
        rerender(OrderScreen);
      });
  },
  render: async () => {
    const { isAdmin } = getUserInfo();

    const request = parseRequestUrl();
    const {
      _id,
      shipping,
      payment,
      orderItems,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
      isDelivered,
      deliveredAt,
      isPaid,
      paidAt,
    } = await getOrder(request.id);
    if (!isPaid) {
      addPaypalSdk(totalPrice);
    }
    return `
    <div>
    <h1>Orden ${_id}</h1>
      <div class="order">
        <div class="order-info">
          <div>
            <h2>Envío o entrega</h2>
            <div>
            ${shipping.address}, ${shipping.city}, ${shipping.postalCode}, 
            ${shipping.country}
            </div>
            ${
              isDelivered
                ? `<div class="success">Entregado en ${deliveredAt}</div>`
                : `<div class="error">No Entregado</div>`
            }
             
          </div>
          <div>
            <h2>Forma de Pago</h2>
            <div>
              Método de pago: ${payment.paymentMethod}
            </div>
            ${
              isPaid
                ? `<div class="success">Pagado en  ${paidAt}</div>`
                : `<div class="error">No ha sigo pagado</div>`
            }
          </div>
          <div>
            <ul class="cart-list-container">
              <li>
                <h2>Carrito de compras</h2>
                <div>Precio</div>
              </li>
              ${orderItems
                .map(
                  (item) => `
                <li>
                  <div class="cart-image">
                    <img src="${item.image}" alt="${item.name}" />
                  </div>
                  <div class="cart-name">
                    <div>
                      <a href="/#/product/${item.product}">${item.name} </a>
                    </div>
                    <div> Cantidad: ${item.qty} </div>
                  </div>
                  <div class="cart-price"> ₡${item.price}</div>
                </li>
                `
                )
                .join('\n')}
            </ul>
          </div>
        </div>
        <div class="order-action">
           <ul>
                <li>
                  <h2>Datos de la compra</h2>
                 </li>
                 <li><div>Artículos</div><div>₡${itemsPrice}</div></li>
                 <li><div>Envío</div><div>₡${shippingPrice}</div></li>
                 <li><div>Impuestos</div><div>₡${taxPrice}</div></li>
                 <li class="total"><div>Precio total</div><div>₡${totalPrice}</div></li>                  
                 <li><div class="fw" id="paypal-button"></div></li>
                   <li>
                   ${
                    isPaid && !isDelivered && isAdmin
                      ? `<button id="deliver-order-button" class="primary fw">Entregar Orden</button>`
                      : ''
                  }
                  </li>
               
        </div>
      </div>
    </div>
    `;
  },
};
export default OrderScreen;