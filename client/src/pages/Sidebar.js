import React from 'react'
import { Navbar } from '../layout/Navbar'
import { Link } from 'react-router-dom'
import { Chart } from '../layout/Chart'
import { Displayer } from '../layout/Displayer'
import { Orders } from '../layout/Orders'


export const Sidebar = () => {
    return (
        <div className='bodyMenuChart'>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link active" to='/'>
                                        <i className="fa-solid fa-house m-1"></i>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='orders'>
                                        <i className="fa-solid fa-bell-concierge m-1"></i>
                                        Orders
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='chart'>
                                        <i className="fa-solid fa-book-open m-1"></i>
                                        Menu
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/chart'>
                                        <i className="fa-solid fa-utensils m-1"></i>
                                        Kitchen
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/chart'>
                                        <i className="fa-solid fa-table-list m-1"></i>
                                        See all orders
                                    </Link>
                                </li>

                            </ul>

                        </div>
                    </nav>


                </div>
            </div>
        </div >


    )
}
