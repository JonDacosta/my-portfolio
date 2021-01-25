import React, { useEffect, useState } from "react";
// import swal from 'sweetalert';

export default function Contact() {
    const [success, setSuccess] = useState(false);
  
    useEffect(() => {
      if ( window.location.search.includes('success=true') ) {
        setSuccess(true);
      }
    }, []);
  
    return (
      <div className="container mx-auto relative">
        <h2 className="text-center spring-green-400 text-3xl font-bold">Contacto</h2>
        {success && (
            <p className="text-center pt-3 text-2xl" style={{ color: "green" }}>Gracias por tu mensaje! </p>
          )}
        
          <form 
              name="contact" 
              method="POST" 
              action="/contact/?success=true"
              data-netlify="true"
              className="container mx-auto relative p-20 grid justify-items-auto place-content-center" 
              >
            <div className="form-group mb-4 w-64 pt-20">
                <input type="hidden" name="form-name" value="contact" />
                <label className="block spring-green-400 text-sm font-bold mb-2" for="name">
                    Nombre:
                </label>
                    <input className="form-control shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="standard-basic" label="name" name="name" placeholder="Furguson" /> <br />
            </div>
            <div className="form-group mb-4 w-64 pt-5">
                <label className="block spring-green-400 text-sm font-bold mb-2" for="email">
                    Email:
                </label>
                    <input className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="standard-basic" label="email" name="email" placeholder="Furguson@catmail.com" /> <br />
            </div>        
            <div className="form-group mb-4 w-64 h-64 pt-5"> 
                <label className="block spring-green-400 text-sm font-bold mb-2" for="message">
                    Mensaje:
                </label>      
                    <input
                    multiline
                    id="standard-multiline-static"
                    placeholder="Me pasaba a saludar..."
                    label="message"
                    name="message"
                    type="textarea"
                    className="h-64 justify-start form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    
                    />
            </div>        
                    <br />
                    <div className="grid place-content-center mt-20">
                    <button className="bg-green-500 hover:bg-green-700 text-white hover:text-purple-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Enviar</button>
                    </div>
            
          </form>
        
      </div>
    );
  }