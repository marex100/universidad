import { getUserInfo } from '../localStorage';

const Header = {
  render: () => {
    const { name, isAdmin } = getUserInfo();
    return ` 
  <div class="brand">
    <a href="/#/">Llantas Grecia</a>
  </div>
  <div class="example">
  ${
    name
      ? `<a href="/#/profile">${name}</a>`
      : `<a href="/#/signin">LOGIN</a>`
  }
    
    <a href="/#/cart">COMPRAR</a>
    <a href="/#/contact">CONTACTENOS</a>
    ${isAdmin ? `<a href="/#/dashboard">REPORTES</a>` : ''}

  </div>`;
  },
  after_render: () => {},
};
export default Header;