import React from 'react'
import { Beverages } from '../chart_compo/Beverages'
import { Coments } from '../chart_compo/Coments'
import { Entries } from '../chart_compo/Entries'
import { Lasagna } from '../chart_compo/Lasagna'
import { Salads } from '../chart_compo/Salads'
import { Spaguetti } from '../chart_compo/Spaguetti'


export const Chart = () => {

  

  return (

    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1>Menu</h1>
      </div>

      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className=''>
          <Salads />
          <Entries />
          <Spaguetti />
          <Lasagna />
          <Beverages />
          <Coments />

        </div>
      </div>
    </div>
  )
}
