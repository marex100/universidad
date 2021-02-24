/* eslint-disable arrow-body-style */
const CheckoutSteps = {
  render: (props) => {
    return `
    <div class="checkout-steps">
      <div class="${props.step1 ? 'active' : ''}">Sign-in</div>
      <div class="${props.step2 ? 'active' : ''}">Envio </div>
      <div class="${props.step3 ? 'active' : ''}">Forma de pago</div>
      <div class="${props.step4 ? 'active' : ''}">Completar la orden</div>
    </div>
    `;
  },
};
export default CheckoutSteps;