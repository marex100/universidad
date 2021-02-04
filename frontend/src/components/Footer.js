/* eslint-disable arrow-body-style */

const Footer = {
  render: () => {
    return ` 
    <footer class="footer-distributed">

			<div class="footer-left">

				<h3>Llantas<span>Grecia</span></h3>

				<p class="footer-links">
					<a href="#">Home</a>
					
				</p>

				<p class="footer-company-name">Mario Hidalgo &copy; 2021</p>
			</div>

			<div class="footer-center">

				<div>
					<a href="https://www.waze.com/es/live-map/directions/serbia/los-angeles,-bolivar,-grecia/llantas-grecia-s.a.?place=w.180682853.1806762994.3866329&utm_expid=.K6QI8s_pTz6FfRdYRPpI3A.0&utm_referrer=https%3A%2F%2Fwww.google.com%2F " target="_blank" rel="noopener noreferrer"><i class="fa fa-map-marker"></i></a>
					<p><span>1 Km Este de la Iglesia de Los Angeles </span> 20308 Grecia, Alajuela Province, Costa Rica</p>
                    </div>

				<div>
                   
                    <a href="tel:+50624445637" target="_blank" rel="noopener noreferrer"> <i class="fa fa-phone"></i></a>
					<p>2444-5637</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
                    <p><a href="mailto:llantasgrecia@gmail.com">llantasgrecia@gmail.com</a></p>
                    
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>Acerca de la empresa</span>
					Somos una empresa dedicada a la venta y comercialización de llantas y aros de lujo. Además poseemos equipo que nos permite brindar el servicio de mecánica rápida. Nuestro principal objetivo es ofrecer una solución rápida e integral a nuestros clientes. Esperamos nos visiten, nos pueden encontrar a través de Waze con el nombre "Llantas Grecia"
				</p>

				<div class="footer-icons">

					<a href="https://www.facebook.com/llantasgrecia" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook"></i></a>

					<a href="https://api.whatsapp.com/send?phone=50685224085" target="_blank" rel="noopener noreferrer"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>

					<a href="#"><i class="fas fa-map-marker-alt" aria-hidden="true"></i>	</a>

					<a href="#"><i class="fab fa-waze"  aria-hidden="true"></i></a>



                    <a href="#" class="fa fa-instagram"></a>

				</div>

			</div>

		</footer>
 `;
  },
  after_render: () => {},
};
export default Footer;