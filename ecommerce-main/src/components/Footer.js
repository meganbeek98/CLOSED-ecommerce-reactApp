function Footer() {
  return (
   
     <div className="footer-section">
       <footer class="section-footer bg-white border-top">
          <div class="container">
          <section class="footer-main padding-y">
              <div class="row">
              <aside class="col-12 col-sm-12 col-lg-3">
                  <article class="me-lg-4">
                  <p class="mt-3"> © 2021- 2022 EcommProducts. <br /> All rights reserved. </p>
                  </article>
              </aside>
              <aside class="col-6 col-sm-4 col-lg-2">
                  <h6 class="title">Information</h6>
                  <ul class="list-menu mb-4">
                  <li> <a href="#">About us</a></li>
                  <li> <a href="#"></a></li>
                  </ul>
              </aside>
              {/* <aside class="col-6 col-sm-4 col-lg-2">
                  <h6 class="title">Information</h6>
                  <ul class="list-menu mb-4">
                  <li> <a href="#">Help center</a></li>
                  <li> <a href="#">Money refund</a></li>
                  <li> <a href="#">Shipping info</a></li>
                  <li> <a href="#">Refunds</a></li>
                  </ul>
              </aside> */}
              <aside class="col-6 col-sm-4  col-lg-2">
                  <h6 class="title">Support</h6>
                  <ul class="list-menu mb-4">
                  <li> <a href="#"> Contact Us </a></li>
                  <li> <a href="#"> My Orders </a></li>
                  </ul>
              </aside>
              <aside class="col-12 col-sm-12 col-lg-3">
                  <h6 class="title">Promotions</h6>
                  <p>Join our emailing list, and recieve free shipping on your first order! </p>
                  <form class="mb-3">
                  <div class="input-group">
                      <input class="form-control" type="text" placeholder="Email" />
                      <button class="btn btn-light" type="submit">
                      Join
                      </button>
                  </div>
                  <p>(We will never sell your information to third parties)</p>
                  </form>
              </aside>
              </div> 
          </section>  
          
          <section class="footer-bottom d-flex justify-content-lg-between border-top">
              <div>
              <i class="fab fa-lg fa-cc-visa"></i>
              <i class="fab fa-lg fa-cc-amex"></i>
              <i class="fab fa-lg fa-cc-mastercard"></i>
              <i class="fab fa-lg fa-cc-paypal"></i>
              </div>
                        {/* START OF FEATURE TO TRANSLATE TO OTHER LANGUAGES */}
              {/* <nav class="dropup">
                  <button class="dropdown-toggle btn d-flex align-items-center py-0" type="button" data-bs-toggle="dropdown">
                  <img src="assets/images/flag-usa.webp" class="me-2" height="20" /> 
                  <span>English</span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" href="#">Russian</a></li>
                  <li><a class="dropdown-item" href="#">Arabic</a></li>
                  <li><a class="dropdown-item" href="#">Spanish</a></li>
                  </ul>
              </nav>   */}
          </section>
          </div>
          </footer>
          
     </div>
    
     
  );
}
export default Footer;