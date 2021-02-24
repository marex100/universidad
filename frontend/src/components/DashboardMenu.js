/* eslint-disable arrow-body-style */
const DashboardMenu = {
    render: (props) => {
      return `
      <div class="dashboard-menu">
        <ul>
          <li class="${props.selected === 'dashboard' ? 'selected' : ''}">
            <a href="/#/dashboard">Reportes</a>
          </li>
          <li class="${props.selected === 'orders' ? 'selected' : ''}">
            <a href="/#/orderlist">Ordenes</a>
          </li>
          <li class="${props.selected === 'products' ? 'selected' : ''}">
            <a href="/#/productlist">Productos</a>
          </li>
        </ul>
      </div>
      `;
    },
  };
  export default DashboardMenu;