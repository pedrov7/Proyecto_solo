import React from 'react'
import { Link } from 'react-router-dom'

export const Signin = () => {
  return (

    <div className="container col-xl-10 col-xxl-8 px-4 py-5">

      <div className="row align-items-center g-lg-5 py-5">

        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">hurryApp</h1>
          <p className="col-lg-10 fs-4">Always improving</p>
        </div>

        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-light">

            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingName" placeholder="Name" />
              <label htmlFor="floatingInput">Name</label>
            </div>

            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingLastName" placeholder="LastName" />
              <label htmlFor="floatingInput">Last Name</label>
            </div>

            <div className="form-floating mb-3">
              <input type="date" className="form-control" id="floatingDate" placeholder="date" />
              <label htmlFor="floatingPassword">Birth Date</label>
            </div>

            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingEmail" placeholder="email" />
              <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="older" /> Are you over +18?
              </label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>

            <div className='text-center'>
              <Link className="m-3 btn btn-lg btn-link btn-sm" to="/">Return to Main</Link>
            </div>

            <hr className="my-4" />
            <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
          </form>
        </div>
      </div>
    </div>





  )
}
