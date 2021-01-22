import React, { useEffect, useState } from "react";
import swal from 'sweetalert';

export default function Contact() {
    
    const [formState, setFormState] = useState({
        name:'',
        email:'',
        message:''
    });
    

    const { name, email, message } = formState;
    
    useEffect( () => {
        console.log('email cambió')
    }, [ email ]);

    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log( formState );
        swal("Mensaje enviado", "Muchas gracias!", "success");
        
    }

    const handleInputChange = ({ target }) => {
        
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });

    }



    return (

        <form onSubmit={handleSubmit} className="container mx-auto relative p-20" method="POST" data-netlify="true" id="form">
            <div className="form-group mb-4 w-64 pt-20">
                <label className="block spring-green-400 text-sm font-bold mb-2" for="name">
                    Nombre:
                </label>
                <input 
                    className="form-control shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    name="name" 
                    type="text"
                    required
                    placeholder="Nombre"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form-group mb-4 w-64 pt-5">
                <label className="block spring-green-400 text-sm font-bold mb-2" for="email">
                    Email:
                </label>
                <input 
                    className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    name="email" 
                    type="email"
                    required 
                    placeholder="abc@abc.com"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form-group mb-4 w-64 h-64 pt-5">
                <label className="block spring-green-400 text-sm font-bold mb-2" for="message">
                    Mensaje:
                </label>
                <input 
                    className="h-64 justify-start form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    name="message" 
                    type="textarea" 
                    placeholder="Escribir aquí"
                    value={ message }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="flex items-center justify-between mt-20">
                <button className="bg-green-500 hover:bg-green-700 text-white hover:text-purple-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Enviar
                </button>
            </div>
        </form>
    )
}