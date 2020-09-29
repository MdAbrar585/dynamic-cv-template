import React from "react";
import { useForm } from "react-hook-form";

const CreateCV = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const information = data;
    console.log(information);
    fetch("http://localhost:4000/placeInformation", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(information), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((info) => {
        //clear local storage cart
        console.log("info Saved", info);
        alert("success!!");
      });
  };
  return (
    <div className="container">
      <h1 className="display-5 text-center">Create Your Own CV</h1>
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-xl-6">
            <div class="form-group">
              <label for="inputName">Name</label>
              <input
                name="name"
                className="form-control"
                ref={register({ required: true })}
                placeholder="Name"
              />
              {errors.name && (
                <span className="error">Name field is required</span>
              )}
            </div>
          </div>
          <div className="col-xl-6">
            <div class="form-group">
              <label for="inputName">Father Name</label>
              <input
                name="fatherName"
                className="form-control"
                ref={register({ required: true })}
                placeholder="Name"
              />
              {errors.fatherName && (
                <span className="error">Father Name field is required</span>
              )}
            </div>
          </div>

          <div className="col-xl-6">
            <div class="form-group">
              <label for="inputBirthDate">Date of Birth</label>
              <input
                type="date"
                name="birthDate"
                className="form-control"
                ref={register({ required: true })}
              />
              {errors.birthDate && (
                <span className="error"> Birth Date field is required</span>
              )}
            </div>
          </div>

          <div className="col-xl-6">
            <div class="form-group">
              <label for="inputGender">Gender</label>
              <select
                name="gender"
                ref={register({ required: true })}
                className="form-control"
              >
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
              {errors.gender && (
                <span className="error">Father Name field is required</span>
              )}
            </div>
          </div>

          <div className="col-xl-6">
            <div class="form-group">
              <label for="inputPhone">Phone Number</label>
              <input
                name="phone"
                className="form-control"
                ref={register({ required: true })}
                placeholder="Phone No."
              />
              {errors.fatherName && (
                <span className="error">Phone Number field is required</span>
              )}
            </div>
          </div>

          <div className="col-xl-6">
            <div class="form-group">
              <label for="inputName">Email</label>
              <input
                name="email"
                className="form-control"
                ref={register({ required: true })}
                placeholder="Email"
              />
              {errors.email && (
                <span className="error">Email field is required</span>
              )}
            </div>
          </div>

          <div className="col-xl-6">
            <div class="form-group">
              <label for="inputName">Address</label>
              <input
                name="address"
                className="form-control"
                ref={register({ required: true })}
                placeholder="Address"
              />
              {errors.address && (
                <span className="error">Address field is required</span>
              )}
            </div>
          </div>

          <div className="col-xl-6">
            <div class="form-group">
              <label for="inputDistrict">District</label>
              <select
                name="district"
                ref={register({ required: true })}
                className="form-control"
              >
                <option value="female">Dhaka</option>
                <option value="male">Chittagong</option>
                <option value="other">Feni</option>
              </select>
              {errors.district && (
                <span className="error">Father Name field is required</span>
              )}
            </div>
          </div>

          <div className="col-xl-6">
            <div class="form-group">
              <label for="inputInstitute">Institute</label>
              <input
                name="institute"
                className="form-control"
                ref={register({ required: true })}
                placeholder="Institute"
              />
              {errors.institute && (
                <span className="error">Institute field is required</span>
              )}
            </div>
          </div>

          <div className="col-xl-6">
            <div class="form-group">
              <label for="inputSubject">Subject</label>
              <input
                name="subject"
                className="form-control"
                ref={register({ required: true })}
                placeholder="Subject"
              />
              {errors.subject && (
                <span className="error">Subject field is required</span>
              )}
            </div>
          </div>

          <div className="col-xl-6">
            <div class="form-group">
              <label for="inputPassingyear">Passing Year</label>
              <input
                name="passingyear"
                className="form-control"
                ref={register({ required: true })}
                placeholder="Passing Year"
              />
              {errors.passingyear && (
                <span className="error">Passing Year field is required</span>
              )}
            </div>
          </div>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateCV;
