import React from "react"
import image from "../backgroundColor.jpg";
import Perfil from "../Perfil-min.jpg";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import '../index.css';

export default function Home() {
    return (
        
        <main className="relative">
            {/* <img 
                src={image} 
                alt="universe background" 
                className="sm:w-full absolute h-screen min-h-full min-w-auto object-cover bg-repeat bg-repeat-y"
            /> */}
            
            
            <section className="justify-center max-h-screen pt-12 lg:pt-40 px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16 text-center auto-rows-fr">
                        <div className="relative row-start-2 col-start-1 md:row-start-1 md:col-start-1 px-4 pb-3 mb-0 self-center h-full">

                            <h2 className="whitespace-nowrap text-lg sm:text-3xl md:text-4xl lg:text-5xl spring-green-400 font-bold leading-none lg:leading-snug purple-shadow animate__animated animate__backInLeft lg:uppercase">Hola! Soy Jon.</h2>
                            <br />
                            <h2 className="whitespace-nowrap text-lg sm:text-3xl md:text-4xl lg:text-5xl spring-green-400 font-bold leading-none lg:leading-snug purple-shadow animate__animated animate__slideInLeft lg:uppercase">Desarrollador Frontend</h2>
                            <br />
                            <h2 className="typewriter whitespace-normal text-3xl sm:text-2xl md:text-4xl lg:text-5xl spring-green-400 font-bold leading-none lg:leading-snug purple-shadow animate__animated animate__slideInLeft lg:uppercase">Bienvenidos</h2>
                            <div className="sm:inline-flex pt-3 px-3 my-6 items-center justify-between">
                                <NavLink to="/about" className="mt-10 p-2 btn btn-white btn-animation-1" activeClassName="text-green-100 bg-green-500">
                                    <button className="mt-10 btn btn-white btn-animation-1"><span>➕ Sobre Mi</span></button>
                                </NavLink>
                                <NavLink to="/project" className="mt-10 p-2 btn btn-white btn-animation-1" activeClassName="text-green-100 bg-green-500">
                                    <button className="mt-10 btn btn-white btn-animation-1"><span>💻 Proyectos</span></button>
                                </NavLink>
                                <NavLink to="/contact" className="sm:hidden mt-10 p-2 btn btn-white btn-animation-1" activeClassName="text-green-100 bg-green-500">
                                    <button className="mt-10 btn btn-white btn-animation-1"><span>✉ Escríbeme</span></button>
                                </NavLink>
                            </div>
                         </div>
                    <div className="relative z-10 row-start-1 col-start-1 md:row-start-1 md:col-start-2 px-4 pb-3 mb-0 self-center">
                    <img src={Perfil} alt="Foto perfil" className="w-full h-full object-cover rounded-lg rounded-full w-32 h-32 lg:w-auto lg:h-auto shadow-2xl mx-auto animate__animated animate__pulse border-8 border-purple-heart-400"/>
                        <div className="inline-flex pt-3 px-3 my-6 items-center justify-between md:w-64">
                            <SocialIcon  url="https://twitter.com/JonDcst" className="m-2 animate__animated animate__pulse" target="_blank" fgColor="#fff" style={{ height: 50, width: 50}} />
                            <SocialIcon  url="https://github.com/JonDacosta" className="m-2 animate__animated animate__pulse" target="_blank" fgColor="#fff" style={{ height: 50, width: 50}} />
                            <SocialIcon  url="https://es.linkedin.com/in/jonatan-dacosta-afonso-a4535a1b1" className="m-2 animate__animated animate__pulse" target="_blank" fgColor="#fff" style={{ height: 50, width: 50}} />
                        </div>
                    </div>
                    </div>
            </section>
            {/* <footer className="relative text-center text-lg sm:text-2xl md:text-3xl lg:text-5xl spring-green-400 font-bold">
                <p className="m-1 pb-2">2021 All rigths reserved</p>
            </footer> */}
            
        </main>
    )
}