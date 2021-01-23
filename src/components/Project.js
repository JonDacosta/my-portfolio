import React from "react";
// import project from "../../studio/schemas/project.js";


export default function Project() {
    


    return (
        <main className="bg-gray-300 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Mis Proyectos</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Bienvenidos a las zona de mis proyectos</h2>
                
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                   {/* Proyecto 01 */}
                        <article className="relative rounded-lg shadow-xl bg-white p-16">
                            <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                                <a
                                   href="https://jondacosta.github.io/React-GifApp/"
                                    alt="Gif"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Buscador Gif con API (GIPHY) en React
                                </a>
                            </h3>
                            <div className="text-gray-500 text-xs space-x-4">
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
                                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                                >
                                    Ver el Proyecto{" "}
                                    <span role="img" aria-label="right pointer">
                                        👉
                                    </span>
                                </a>
                            </div>
                        </article>
                    {/* /////////////////////////////////////////////////////// */}
                    {/* Proyecto 01 */}
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                            <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                                <a
                                   href="https://jondacosta.github.io/React-GifApp/"
                                    alt="Gif"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ejemplo SPA
                                </a>
                            </h3>
                            <div className="text-gray-500 text-xs space-x-4">
                                <span>
                                    <strong className="font-bold">Acabado en:</strong>:{" "}
                                    {/* {new Date(project.date).toLocaleDateString()} */}
                                    01/08/2020
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
                                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                                >
                                    Ver el Proyecto{" "}
                                    <span role="img" aria-label="right pointer">
                                        👉
                                    </span>
                                </a>
                            </div>
                        </article>
                    {/* /////////////////////////////////////////////////////// */}
                </section>
            </section>
        </main>
    )
}