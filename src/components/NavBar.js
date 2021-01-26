import React from "react";
import { NavLink } from "react-router-dom";
// import { SocialIcon } from "react-social-icons";
import Logodev from "../Logodev.png";

export default function NavBar() {
    return (
        <header className="bg-asparagus-800 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center max-h-28">
            <div className="container mx-auto flex items-center justify-center sm:justify-between w-screen">
                <nav className="flex justify-center">
                    {/* Logo Navbar */}
                    <NavLink to="/" exact activeClassName="text-white" className="w-auto sm:w-24 h-auto relative inline-flex items-center block">
                        <img src={Logodev} 
                             alt="Logo" 
                             className="block" 
                        />
                    </NavLink>
                    {/* <NavLink to="/post" className="invisible sm:visible md:text-2xl inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-green-800" activeClassName="text-purple-500 underline">
                        Blog Posts
                    </NavLink> */}
                    <NavLink to="/project" className="block invisible sm:visible md:text-2xl inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-green-800" activeClassName="text-purple-500 underline">
                        Proyectos
                    </NavLink>
                    <NavLink to="/about" className="block invisible sm:visible md:text-2xl inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-green-800" activeClassName="text-purple-500 underline">
                        Sobre Mi
                    </NavLink>
                    <NavLink to="/contact" className="block invisible sm:visible md:text-2xl inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-green-800" activeClassName="text-purple-500 underline">
                        Contacto
                    </NavLink>
                </nav>
                {/* <div className="inline-flex pt-3 px-3 my-6">
                    <SocialIcon  url="https://twitter.com/JonDcst" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 40, width: 40}} />
                    <SocialIcon  url="https://github.com/JonDacosta" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 40, width: 40}} />
                    <SocialIcon  url="https://es.linkedin.com/in/jonatan-dacosta-afonso-a4535a1b1" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 40, width: 40}} />
                </div> */}
            </div>
        </header>
    )
}