/* eslint-disable arrow-body-style */

const Footer = {
  render: () => {
    return ` 
	<div class="footer-dark">
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-sm-6 col-md-3 item">
					<h3>Opciones</h3>
					<ul>
						<li><a href="#">Inicio</a></li>
						<li><a href="#/cart">Carrito de Compras</a></li>

						<li><a href="#/signin">Login</a></li>
					</ul>
				</div>
				<div class="col-sm-6 col-md-3 item">
					<h3>Contacto</h3>
					<ul>
					<li><a  href="tel:+50624445637" target="_blank" rel="noopener noreferrer"> <i class="fa fa-phone"></i> 2444-5637 </a></li>
                    <li><a href="mailto:llantasgrecia@gmail.com">llantasgrecia@gmail.com</a></li>

					</ul>
				</div>
				<div class="col-md-6 item text">
					<h3>Llantas Grecia</h3>
					<p>Somos una empresa dedicada a la venta y comercialización de llantas y aros de lujo. Además poseemos equipo que nos permite brindar el servicio de mecánica rápida. Nuestro principal objetivo es ofrecer una solución rápida e integral a nuestros clientes. Esperamos nos visiten</p>
				</div>
				<div class="col item social">                    <a href="https://www.facebook.com/llantasgrecia" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook"></i></a>

				<a href="https://api.whatsapp.com/send?phone=50685224085" target="_blank" rel="noopener noreferrer"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>

				<a href="#"><i class="fas fa-map-marker-alt" aria-hidden="true"></i>    </a>

				<a href="#"><i class="fab fa-waze"  aria-hidden="true"></i></a>


				<a href="#" class="fa fa-instagram"></a>
</div>
			</div>
			<p class="copyright">Mario Hidalgo © 2021</p>
		</div>
	</footer>
</div>

 `;
  },
  after_render: () => {},
};
export default Footer;