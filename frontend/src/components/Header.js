import { getUserInfo } from '../localStorage';

const Header = {
  render: () => {
    const { name, isAdmin } = getUserInfo();
    return ` 
  <div class="brand">
    <a href="/#/">Llantas Grecia</a>
  </div>
  <div>
  ${
    name
      ? `<a href="/#/profile">${name}</a>`
      : `<a href="/#/signin">Sign-In</a>`
  }
    
    <a href="/#/cart">COMPRAR</a>
    ${isAdmin ? `<a href="/#/dashboard">Dashboard</a>` : ''}

  </div>`;
  },
  after_render: () => {},
};
export default Header;