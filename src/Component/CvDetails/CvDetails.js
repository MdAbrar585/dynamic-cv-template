import React from "react";
import { Link } from "react-router-dom";

const CvDetails = (props) => {
  console.log("dfg", props.dt.name);

  const {
    _id,
    name,
    address,
    birthDate,
    district,
    email,
    fatherName,
    gender,
    institute,
    passingyear,
    phone,
    subject,
  } = props.dt;

  return (
    <div className="container">
      <h3 className="text-center display-3">Your Detials</h3>
      <div className="cv-details-section">
        <h4 className="display-4 text-center mt-2 mb-5">Curriculam Vita</h4>
        <div className="row cv-info">
          <div className="col-xl-6">
            <p className="bottom-hr">
              <label className="cv-label">Name :</label> {name}
            </p>
          </div>
          <div className="col-xl-6">
            <p className="bottom-hr">
              <label className="cv-label">Father Name :</label> {fatherName}
            </p>
          </div>
          <div className="col-xl-6">
            <p className="bottom-hr">
              <label className="cv-label">Phone : </label> {phone}
            </p>
          </div>
          <div className="col-xl-6">
            <p className="bottom-hr">
              <label className="cv-label">Email :</label>
              {email}
            </p>
          </div>
          <div className="col-xl-6">
            <p className="bottom-hr">
              {" "}
              <label className="cv-label">Address :</label> {address}
            </p>
          </div>
          <div className="col-xl-6">
            <p className="bottom-hr">
              {" "}
              <label className="cv-label">District :</label> {district}
            </p>
          </div>
          <div className="col-xl-6">
            <p className="bottom-hr">
              {" "}
              <label className="cv-label">Brirth Date :</label> {birthDate}
            </p>
          </div>
          <div className="col-xl-6">
            <p className="bottom-hr">
              {" "}
              <label className="cv-label"> Gender :</label> {gender}
            </p>
          </div>
          <div className="col-xl-6">
            <p className="bottom-hr">
              {" "}
              <label className="cv-label">Institution :</label> {institute}
            </p>
          </div>
          <div className="col-xl-6">
            <p className="bottom-hr">
              {" "}
              <label className="cv-label">Passing Year :</label> {passingyear}
            </p>
          </div>
          <div className="col-xl-6">
            <p className="bottom-hr">
              {" "}
              <label className="cv-label">Subject :</label> {subject}
            </p>
          </div>
        </div>
        <Link to="/cvlist">
          <button className="btn btn-secondary">Back</button>
        </Link>
        {/* <p>id : {_id}</p> */}
      </div>
    </div>
  );
};

export default CvDetails;
