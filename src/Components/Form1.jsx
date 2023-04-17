import React from "react";
import {useForm} from 'react-hook-form';

export default function Form1() {
  const {register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <div className="container py-5">
        <div className="card border-0 shadow p-4 w-50 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row form-group">
              <div className="col my-2">
                <input
                  type="text"
                  name="fullname"
                  {...register("fullname", { required: true })}
                  className="form-control"
                  placeholder="Full Name"
                />
                {errors.fullname && <span className="error-message">Name is required</span>}
              </div>
              <div className="col my-2">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
                {errors.email && <span className="error-message">Email is required</span>}
              </div>
              <div className="col my-2">
                <input
                  type="password"
                  {...register("password", { required: true })}
                  name="password"
                  className="form-control"
                  placeholder="password"
                />
                {errors.password && <span className="error-message">Password is required</span>}
              </div>
              <button type="submit" className="btn btn-danger">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
