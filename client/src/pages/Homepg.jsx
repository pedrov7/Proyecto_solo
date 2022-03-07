import React from 'react'
import { Link } from 'react-router-dom'


export const Homepg = () => {
  return (

    <div className="d-flex  text-center text-white bg-dark vh-100">

      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <div className="mb-auto">
          <div>
            <h3 className="float-md-start text-warning mb-0">hurryApp</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <Link className="nav-link active" to='login'>Log in</Link>
              <Link className="nav-link" to="chart">Menu</Link>
              <a className="nav-link" href="#">Reserve</a>
              <a className="nav-link" href="#">Contact</a>
            </nav>
          </div>
        </div>

        <div className="px-3">
          <h1>Help to improve your orders</h1>
          <br/>
          <p className="lead">hurryApp is an application that helps to speed up orders in your restaurant. Try it for free 30 days trial. Don't lose it</p>
          <p className="lead">Don't lose it</p>
          <br/>
          <p className="lead">
            <Link className="btn btn-lg btn-secondary mx-3 fw-bold border-white bg-white" to="/login">Log in</Link>
            <Link className="btn btn-lg btn-warning fw-bold" to="/signin">Sign Up!</Link>
          </p>
        </div>

        <div className="mt-auto text-white-50">
          <p>Developed <a href="/" className="text-white">Pedro Valladares</a>, by <a href="/" className="text-white">@pedrov7</a>.</p>
        </div>
      </div>



    </div>

  )
}
