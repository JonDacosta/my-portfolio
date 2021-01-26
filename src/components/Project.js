import React from "react";
// import project from "../../studio/schemas/project.js";


export default function Project() {
    


    return (
        <main className="min-h-screen p-5 pt-10 lg:pt-20">
            <section className="container mx-auto">
                <h1 className="whitespace-nowrap text-lg sm:text-3xl md:text-4xl lg:text-5xl spring-green-400 font-bold leading-none lg:leading-snug purple-shadow animate__animated animate__backInLeft lg:uppercase text-center">Mis Proyectos</h1>
                <h2 className="whitespace-nowrap text-sm md:text-2xl lg:text-3xl spring-green-400 font-bold leading-none lg:leading-snug purple-shadow animate__animated animate__backInRight mb-12 text-center whitespace-pre-line">Bienvenidos a las zona de mis proyectos</h2>
                
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                   {/* Proyecto 01 */}
                   <article className="relative rounded-lg shadow-xl bg-white p-5 sm:p-16">
                            <h3 className="text-gray-700 text-3xl font-bold mb-2 hover:text-green-300 underline">
                                <a
                                   href="https://jondacosta.github.io/Landing-CarApp/"
                                    alt="Gif"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ejemplo Landing para una APP
                                </a>
                            </h3>
                            <div className="text-gray-500 text-xs space-x-0">
                                <span>
                                    <strong className="font-bold">Acabado en:</strong>:{" "}
                                    {/* {new Date(project.date).toLocaleDateString()} */}
                                    01/09/2020
                                </span>
                                <span>
                                    <strong className="font-bold">Lugar</strong>:{" "}
                                    {/* {project.place} */}
                                    Ourense, Galicia
                                </span>
                                <span>
                                    <strong className="font-bold">Tipo</strong>:{" "}
                                    {/* {project.projectType} */}
                                    Personal
                                </span>
                                <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                    {/* {project.description} */}
                                    Landing sencilla para la presentación de una APP utilizando HTML5, CSS con bootstrap y JavaScript. Pequeño efecto en las imágenes, temporizador en testimonials controlado por JS.
                                </p>
                                <a 
                                    href="https://jondacosta.github.io/Landing-CarApp/" 
                                    rel="noopener noreferrer" 
                                    target="_blank" 
                                    className="text-purple-500 font-bold hover:underline hover:text-red-400 text-xl"
                                >
                                    Ver el Proyecto{" "}
                                    <span role="img" aria-label="right pointer">
                                        👉
                                    </span>
                                </a>
                            </div>
                        </article>
                    {/* /////////////////////////////////////////////////////// */}
                   {/* Proyecto 02 */}
                        <article className="relative rounded-lg shadow-xl bg-white p-5 sm:p-16">
                            <h3 className="text-gray-700 text-3xl font-bold mb-2 hover:text-green-300 underline">
                                <a
                                   href="https://jondacosta.github.io/React-GifApp/"
                                    alt="Gif"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Buscador Gif con API (GIPHY) en React
                                </a>
                            </h3>
                            <div className="text-gray-500 text-xs space-x-0">
                                <span>
                                    <strong className="font-bold">Acabado en:</strong>:{" "}
                                    {/* {new Date(project.date).toLocaleDateString()} */}
                                    10/01/2021
                                </span>
                                <span>
                                    <strong className="font-bold">Lugar</strong>:{" "}
                                    {/* {project.place} */}
                                    Ourense, Galicia
                                </span>
                                <span>
                                    <strong className="font-bold">Tipo</strong>:{" "}
                                    {/* {project.projectType} */}
                                    Personal
                                </span>
                                <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                    {/* {project.description} */}
                                    Actualmente estoy aprendiendo React y esta es mi primera app para busqueda de gif's, es muy utilizada por las principales aplicaciones de mensajería conectándose a GIPHY.
                                </p>
                                <a 
                                    href="https://jondacosta.github.io/React-GifApp/" 
                                    rel="noopener noreferrer" 
                                    target="_blank" 
                                    className="text-purple-500 font-bold hover:underline hover:text-red-400 text-xl"
                                >
                                    Ver el Proyecto{" "}
                                    <span role="img" aria-label="right pointer">
                                        👉
                                    </span>
                                </a>
                            </div>
                        </article>
                    {/* /////////////////////////////////////////////////////// */}
                    
                    {/* Proximamente */}
                    <article className="relative rounded-lg shadow-xl bg-white p-5 sm:p-16">
                            <h3 className="text-gray-700 text-3xl font-bold mb-2 ">
                                <p
                                >
                                    Actualizando nuevos proyectos...
                                </p>
                            </h3>
                            <div className="text-gray-500 text-xs space-x-0">
                                <span>
                                    <strong className="font-bold">Acabado en:</strong>:{" "}
                                    {/* {new Date(project.date).toLocaleDateString()} */}
                                    00/00/0000
                                </span>
                                <span>
                                    <strong className="font-bold">Lugar</strong>:{" "}
                                    {/* {project.place} */}
                                    Ourense, Galicia
                                </span>
                                <span>
                                    <strong className="font-bold">Tipo</strong>:{" "}
                                    {/* {project.projectType} */}
                                    -------
                                </span>
                                <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                    {/* {project.description} */}
                                    
                                </p>
                                
                            </div>
                        </article>
                    {/* /////////////////////////////////////////////////////// */}
                </section>
            </section>
        </main>
    )
}