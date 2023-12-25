import React from "react";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="card employee-card">
      <div className="card-body">
        <div className="row h-100">
          <div className="col-2 text-center card-left-right-section">
            <Image
              src="assets/product.png"
              className="emp-img"
              roundedCircle
              alt=""
            />
            <div>
              <FontAwesomeIcon icon="fa-solid fa-ribbon" />
              <label>Certified</label>
            </div>

            <ProgressBar
              striped
              variant="danger"
              now={employee.percentage}
              label={`${employee.percentage}%`}
            />

            <div>
              <FontAwesomeIcon icon="fa-solid fa-angle-left" />
              {employee.percentage}
              <FontAwesomeIcon icon="fa-solid fa-angle-right" />
            </div>
          </div>
          <div className="col-8 card-middle-section">
            <div>
              <h5 className="card-title">{employee?.displayName}</h5>
              <div className="rating-color">
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star-half-stroke" />
              </div>
              <p className="emp-description ellipsis">
                {employee?.name}
                {employee?.grpIdentifier}
              </p>
            </div>
            <div>
              <Button variant="secondary">DataSouk</Button>
            </div>
          </div>
          <div className="col-2 text-end card-left-right-section">
            <div>
              <FontAwesomeIcon icon="fa-solid fa-thumbtack" />
            </div>
            <div>
              <FontAwesomeIcon icon="fa-solid fa-share-nodes" />
            </div>
            <div>
              <FontAwesomeIcon icon="fa-solid fa-atom" />
            </div>
            <div>
              <FontAwesomeIcon icon="fa-heart" /> | 0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
