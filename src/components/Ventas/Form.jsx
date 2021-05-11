import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useForm } from "react-hook-form";
import Ventas from './Ventas';

const Form = (props) => {

    const {register,  handleSubmit } = useForm();
    

    const registrarVentas = (data, e) => {
        data.id = uuidv4();
        props.setVentas([
            ...props.ventas,
            data
          ])
        e.target.reset();
    }

  
    return (
   
        <div>
        <h2>Registro de Ventas</h2>
            <form  onSubmit={handleSubmit(registrarVentas)}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Producto</label>
                <input 
                    type="text" 
                    name="producto"
                    className="form-control" 
                    {...register('producto', { required: true })} 
                />
                
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Precio $</label>
                <input 
                    type="number" 
                    name="precio"
                    className="form-control" 
                    {...register('precio', { required: true })} 
                />
            </div>
            <button type="submit" className="btn btn-primary">Registrar</button>
            </form>

   
         </div>
    )
}

export default Form
