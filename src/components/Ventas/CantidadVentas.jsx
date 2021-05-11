import React from 'react'

const CantidadVentas = (props) => {

    const borrarVentas = (id) => {
        props.setVentas(props.ventas.filter(venta => venta.id !== id))
    }

    return (
        <div>
        <h2>Cantidad de Ventas - { props.ventas.length } </h2>
        <table className="table">
            <thead>
                <tr>
                   
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {
                        props.ventas.length > 0 ? 
                        props.ventas.map(venta => (

                             <tr key={venta.id}>
                                    <td>{venta.producto}</td>
                                    <td>{venta.precio}</td>
                                    <td><button
                                            className="btn btn-danger"
                                            onClick={ () => borrarVentas(venta.id) }
                                    >Borrar</button></td>
                             </tr>
                        )):
                        (
                            <tr>
                                <td>No hay productos</td>
                            </tr>
                        )
                }
            </tbody>    
        </table>

 </div>
    )
}

export default CantidadVentas
