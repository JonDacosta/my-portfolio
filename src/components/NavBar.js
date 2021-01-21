import React from "react";
import { NavLink } from "react-router-dom";
// import { SocialIcon } from "react-social-icons";
import Logodev from "../Logodev.png";

export default function NavBar() {
    return (
        <header className="bg-asparagus-800">
            <div className="container mx-auto flex justify-center sm:justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white" className="mx-auto relative inflex-flex items-center py-6 px-3 mr-4 font-bold curvive tracking-widest">
                        <img src={Logodev} 
                             alt="Logo" 
                             className="ml-40 sm:ml-0 flex relative w-32 h-32" 
                        />
                    </NavLink>
                    {/* <NavLink to="/post" className="invisible sm:visible md:text-2xl inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-green-800" activeClassName="text-purple-500 underline">
                        Blog Posts
                    </NavLink> */}
                    <NavLink to="/project" className="invisible sm:visible md:text-2xl inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-green-800" activeClassName="text-purple-500 underline">
                        Proyectos
                    </NavLink>
                    <NavLink to="/about" className="invisible sm:visible md:text-2xl inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-green-800" activeClassName="text-purple-500 underline">
                        Sobre Mi
                    </NavLink>
                    <NavLink to="/contact" className="invisible sm:visible md:text-2xl inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-green-800" activeClassName="text-purple-500 underline">
                        Contacto
                    </NavLink>
                </nav>
                {/* <div className="inline-flex pt-3 px-3 my-6">
                    <SocialIcon  url="https://twitter.com/Osoyeah" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 40, width: 40}} />
                    <SocialIcon  url="https://github.com/JonDacosta" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 40, width: 40}} />
                    <SocialIcon  url="https://es.linkedin.com/in/jonatan-dacosta-afonso-a4535a1b1" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 40, width: 40}} />
                </div> */}
            </div>
        </header>
    )
}