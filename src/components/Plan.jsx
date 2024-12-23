import React from "react";

const Plan = () => {
  return (
    <div>
        <br /><br />
      <section className="py-5" id="plans">
        <div className="container">
          <h3 className="display-5 fw-bold text-center mb-4">
            Pricing Plan for CCTV <br /> Security Services
          </h3>
          <div className="row pt-3">
            <div className="col-md-4 col-sm-6 mb-2">
              <div className="card border-primary">
                <div className="card-header py-5 bg-primary text-white text-center">
                  <h3>Basic Plan</h3>
                  <h3>
                    <sup>$</sup>49 <sub style={{ fontSize: "16px" }}>/ mo</sub>
                  </h3>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">One Camera</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li>
                  </ul>
                </div>
                <div className="card-footer text-center">
                  <a href="#" className="btn btn-primary">
                    Order Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-2">
              <div className="card border-danger">
                <div className="card-header py-5 bg-danger text-white text-center">
                  <h3>Standard Plan</h3>
                  <h3>
                    <sup>$</sup>99 <sub style={{ fontSize: "16px" }}>/ mo</sub>
                  </h3>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">Two Cameras</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li>
                  </ul>
                </div>
                <div className="card-footer text-center">
                  <a href="#" className="btn btn-danger">
                    Order Now
                  </a>
                </div>
              </div>
            </div>

            {/* Extended Plan */}
            <div className="col-md-4 col-sm-6 mb-2">
              <div className="card border-primary">
                <div className="card-header py-5 bg-primary text-white text-center">
                  <h3>Extended Plan</h3>
                  <h3>
                    <sup>$</sup>149 <sub style={{ fontSize: "16px" }}>/ mo</sub>
                  </h3>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">Three Cameras</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li>
                  </ul>
                </div>
                <div className="card-footer text-center">
                  <a href="#" className="btn btn-primary">
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plan;
