import React, {useState} from 'react'
import CantidadVentas from './CantidadVentas'
import Form from './Form'

const Ventas = () => {

    const [ventas, setVentas] = useState([])

    return (
        <div className="row"> 
            <div className="col-md-6 ">
                 <Form ventas={ventas} setVentas={setVentas}/>
            </div>
            <div className="col-md-6 "> 
                 <CantidadVentas ventas={ventas} setVentas={setVentas} />
            </div>
         </div>
    )
}

export default Ventas
