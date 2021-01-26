import React from "react";
import bgPerfil from "../bgPerfil-min.jpg";
import image from "../Perfil-min.jpg";
import html from "../assets/images/Html.png"
import css from "../assets/images/Css.png"
import js from "../assets/images/Js.png"
import laravel from "../assets/images/Laravel.png"
import git from "../assets/images/Git.png"
import typescript from "../assets/images/Typescript.png"
import imgReact from "../assets/images/imgReact.png"
import bootstrap from "../assets/images/Bootstrap.png"





// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//     return builder.image(source);
// }


export default function About() {
    //Para conectar con Sanity
    // const [ author, setAuthor ] = useState(null);
    
    // useEffect( () => {
    //     sanityClient.fetch(`*[_type == "author"]{
    //         name,
    //         bio,
    //         "authorImage": image.asset->url
    //     }`).then((data) => setAuthor(data[0]))
    //     .catch(console.error);
    // }, []);

    // if (!author) return <div>Cargando...</div>
    
    return (
        <main className="relative">
            <img src={bgPerfil} alt="Foto perfil" className="absolute w-full h-full object-cover"/>
            <div className="sm:p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-green-500 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={image} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8 shadow-2xl" alt="autor"/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-gray-700 mb-4 mt-3">
                            Hola! Soy {" "}
                            {/* <span className="text-gray-900">{author.name}</span> */}
                            <span className="text-gray-900">Jon</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            {/* <BlockContent blocks={author.bio} projectId="aifzlsny" dataset="production" /> */}
                            <p className="prose lg:prose-xl text-white">
                                Jr. Frontend dev !! CS en Desarrollo de aplicaciones Web. Me apasiona el desarrollo y diseño en web!
                                <br />
                                <br />
                                Me gusta cada día ir aprendiendo cosas nuevas sobre UX/UI, accesibilidad, patrones de diseño, arquitectura de software y cualquier manera de mejorar el código que vamos a escribir.
                                Aprendiendo React, con lo que he realizado este portfolio y como futuras tecnologías que me gustaría aprender se encuentra Vuejs, e ir poco a poco adentrándome en la parte de backend.
                                <br />
                                <br />
                                Actualmente estoy buscando un puesto de desarrollador Frontend 💻
                                <br />
                                <br />
                                ❤ 😺 & 🎵
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="p-10 container mx-auto relative text-center">
                <h2 className="text-3xl sm:text-6xl text-gray-700 mb-4 mt-3 underline">Conocimientos</h2>
            </div>
            
            <div className="p-10 lg:pt-30 container mx-auto relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                <div class='box-outer'>
                    <div class='main_box'>
                        <div class='bar top'></div>
                        <div class='bar right delay'></div>
                        <div class='bar bottom delay'></div>
                        <div class='bar left'></div>
                        <img src={html} className="animate__animated animate__flip" alt="html"></img>
                    </div>
                    
                </div>
                <div class='box-outer'>
                    <div class='main_box'>
                        <div class='bar top'></div>
                        <div class='bar right delay'></div>
                        <div class='bar bottom delay'></div>
                        <div class='bar left'></div>
                        <img src={css} className="animate__animated animate__flip" alt="css"></img>
                    </div>
                </div>
                <div class='box-outer'>
                    <div class='main_box'>
                        <div class='bar top'></div>
                        <div class='bar right delay'></div>
                        <div class='bar bottom delay'></div>
                        <div class='bar left'></div>
                        <img src={js} className="animate__animated animate__flip" alt="js"></img>
                    </div>
                </div>
                <div class='box-outer'>
                    <div class='main_box'>
                        <div class='bar top'></div>
                        <div class='bar right delay'></div>
                        <div class='bar bottom delay'></div>
                        <div class='bar left'></div>
                        <img src={laravel} className="animate__animated animate__flip" alt="laravel"></img>
                    </div>
                </div>
            </div>
            <div className="p-10 lg:pt-5 container mx-auto relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                <div class='box-outer'>
                    <div class='main_box'>
                        <div class='bar top'></div>
                        <div class='bar right delay'></div>
                        <div class='bar bottom delay'></div>
                        <div class='bar left'></div>
                        <img src={git} className="animate__animated animate__flip" alt="git"></img>
                    </div>
                </div>
                <div class='box-outer'>
                    <div class='main_box'>
                        <div class='bar top'></div>
                        <div class='bar right delay'></div>
                        <div class='bar bottom delay'></div>
                        <div class='bar left'></div>
                        <img src={typescript} className="animate__animated animate__flip" alt="typescript"></img>
                    </div>
                </div>
                <div class='box-outer'>
                    <div class='main_box'>
                        <div class='bar top'></div>
                        <div class='bar right delay'></div>
                        <div class='bar bottom delay'></div>
                        <div class='bar left'></div>
                        <img src={imgReact} className="animate__animated animate__flip" alt="imgReact"></img>
                    </div>
                </div>
                <div class='box-outer'>
                    <div class='main_box'>
                        <div class='bar top'></div>
                        <div class='bar right delay'></div>
                        <div class='bar bottom delay'></div>
                        <div class='bar left'></div>
                        <img src={bootstrap} className="animate__animated animate__flip" alt="bootstrap"></img>
                    </div>
                </div>
            </div>
        </main>
    )
}