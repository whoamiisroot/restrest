import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center align-items-center justify-content-lg-between p-4 border-bottom" style={{ height: '10vh' }}>
  <div style={{ textAlign: 'center', position: 'relative', color: 'red', padding: '5px', borderRadius: '5px', margin: '0 auto' }}>
    Please note that due to the large number of restaurants, there may be a delay in loading the drop-down menu.
  </div>
</section>



      {/* Section: Social media */}

      {/* Section: Links  */}
      <section>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>A M I S T A
              </h6>
              <p>
                Best company in the world for locating your nearby favourite restaurants
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            
            {/* Grid column */}

            {/* Grid column */}
        
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i>Bayt al maarifa , El Jadida</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                seddam@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i>Ilyass : +212 6 95 60 42 51</p>
              <p><i className="fas fa-print me-3"></i>Youssef : +212 6 45 31 81 05</p>
              <p><i className="fas fa-print me-3"></i>Nassim :  +212 6 99 42 66 30</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://mninou.com/">Amista developpers</a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;

