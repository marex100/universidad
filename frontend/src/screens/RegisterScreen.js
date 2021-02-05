import { register } from '../api';
import { getUserInfo, setUserInfo } from '../localStorage';
import { hideLoading, redirectUser, showLoading, showMessage } from '../util';

const RegisterScreen = {
  after_render: () => {
    document
      .getElementById('register-form')
      .addEventListener('submit', async (e) => {
        e.preventDefault();
        showLoading();
        const data = await register({
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
        });
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          setUserInfo(data);
          redirectUser();
        }
      });
  },
  render: () => {
    if (getUserInfo().name) {
      redirectUser();
    }
    return `
    <div class="form-container">
      <form id="register-form">
        <ul class="form-items">
          <li>
            <h1>Crear una nueva cuenta</h1>
          </li>
          <li>
            <label for="name">Nombre Completo</label>
            <input type="name" name="name" id="name" />
          </li>
          <li>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
          </li>
          <li>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
          </li>
          <li>
            <label for="repassword">Re-Ingrese Password</label>
            <input type="password" name="repassword" id="repassword" />
          </li>
          <li>
            <button type="submit" class="primary">Registrarse</button>
          </li>
          <li>
            <div>
            Ya tienes unas cuenta creada?
              <a href="/#/signin">Sign-In </a>
            </div>
          </li>
        </ul>
      </form>
    </div>
    `;
  },
};
export default RegisterScreen;