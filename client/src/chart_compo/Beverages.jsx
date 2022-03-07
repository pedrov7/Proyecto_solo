import React, { useContext } from 'react'
import { myContext } from '../context/Mycontext';
import { Modalfood } from './Modalfood'

export const Beverages = () => {

    const { order, setOrder } = useContext(myContext);

    const handleOnClick = (imgtxt, price) => {
        setOrder([...order, {
            dish: imgtxt,
            price: price
        }])
    }

    const beverages = [
        {
            lfolder: 'images/gas.jpeg',
            imgtxt: 'Agua con gas',
            description: '5 porciones de pan con mantequilla, ajo, jamón.',
            price: '1.00'
        },
        {
            lfolder: 'images/gas.jpeg',
            imgtxt: 'Agua sin gas',
            description: '6 nuggets de pechuga de pollo con papa frita.',
            price: '0.75'
        },
        {
            lfolder: 'images/gaseosa.jpg',
            imgtxt: 'Gaseosa',
            description: 'Papas fritas o criollas con chorizo picado.',
            price: '1.25'
        },
        {
            lfolder: 'images/jugo.jpg',
            imgtxt: 'Jugo',
            description: 'Empanadas, brochetas lomo de res, chorizo paisa con pimiento.',
            price: '2.20'
        }
    ]

    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingBebidas">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseBebidas" aria-expanded="true" aria-controls="panelsStayOpen-collapseBebidas">
                        Bebidas
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseBebidas" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingBebidas">
                    <div className="accordion-body text-center">


                        {beverages.map((item, index) => <Modalfood
                            key={index}
                            lfolder={item.lfolder}
                            imgtxt={item.imgtxt}
                            description={item.description}
                            price={item.price}
                            handleOnClick={handleOnClick} />
                        )}



                    </div>
                </div>

            </div>
            
            <div className="input-group my-5">
                <span className="input-group-text">Comentarios</span>
                <textarea className="form-control " rows="5" aria-label="With textarea" ></textarea>
                <button type="button" className="btn btn-danger m-5">Confirmar Orden</button>
            </div>


        </>

    )
}
