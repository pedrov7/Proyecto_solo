import React from 'react'
import { Link } from 'react-router-dom'

export const LogIn = () => {
    return (


            <div className="containerLogIn text-center vh-100">

                <div className="form-signin">
                    <form>
                        <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        <Link className="m-3 btn btn-lg btn-link btn-sm" to="/">Return to Main</Link>
                        <p className="mt-5 mb-3 text-muted">&copy; 2022</p>

                    </form>
                </div>
            </div>
        


    )
}
