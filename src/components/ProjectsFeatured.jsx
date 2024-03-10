import { useState } from "preact/hooks";
import $ from 'jquery';

export function ProyectsFeatureds(){

    var DicProjectsFeatured = {
        1:{
            software: "FULLSTACK",
            NameProject: "Face recognition",
            resumen: "App web de reconocimiento facial. Registra usuarios entrantes en una base de datos a partir de sus rasgos fisicos",
            code: "https://github.com/Jostiin/Reconocimiento-facial-DB",
            listTegnologys: ["JS","HMTL","CSS","EJS"],
            imgProject: "/ProyectdFeaturedIMG/face_recognition.png"
        },
        2:{
            software: "FULLSTACK",
            NameProject: "Password Manager",
            resumen: "App web de reconocimiento facial. Guarda, gestiona y encripta contraseñas de diferentes plataformas",
            code: "https://github.com/Jostiin/PasswordManager",
            listTegnologys: ["PHP","HMTL","CSS","LARAVEL"],
            imgProject: "/ProyectdFeaturedIMG/password_manager.png"
        },
        3:{
            software: "FULLSTACK",
            NameProject: "TicTacToeMobileApk",
            resumen: "App mobile. Juego comun de 3 en rayas",
            code: "https://github.com/Jostiin/TicTacToeMobileApk",
            listTegnologys: ["JS","REACT NATIVE"],
            imgProject: "/ProyectdFeaturedIMG/tiktaktoe_mobile.jpeg"
        },
        4:{
            software: "FULLSTACK",
            NameProject: "AssistantVoiceChat",
            resumen: "App web. Asistente de voz impulsado por la API de OpenAI",
            code: "https://github.com/Jostiin/AssistantVoiceChat",
            listTegnologys: ["JS","HTML","CSS","AJAX","EJS"],
            imgProject: "/ProyectdFeaturedIMG/assistant_voice.png"
        },
        5:{
            software: "FULLSTACK",
            NameProject: "SystemPoints",
            resumen: "App web. CRUD de puntos de la materia de lengua y literatura. Proyecto estudiantil",
            code: "https://github.com/Jostiin/SystemPoints",
            listTegnologys: ["JS","HTML","CSS","AJAX","EJS"],
            imgProject: "/ProyectdFeaturedIMG/system_points.png"
        },
        6:{
            software: "FULLSTACK",
            NameProject: "API CLIMA",
            resumen: "App web. Obtiene datos del clima del mundo, consumiendo una api publica",
            code: "https://github.com/Jostiin/Clima-laravel",
            listTegnologys: ["PHP","HTML","CSS","LARAVEL"],
            imgProject: "/ProyectdFeaturedIMG/clima_laravel.png"
        }
    }

    function listTegnologyLI(number) {
        return DicProjectsFeatured[number].listTegnologys.map((element) => {
            return (
                <li><span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{element}</span></li>
            );
        });
    }

    const [numberProyect, setnumberProyect] = useState(1);

    const NextProyects = () => {
        if (numberProyect > 0 && numberProyect <= Object.keys(DicProjectsFeatured).length) {
            setnumberProyect(numberProyect+2);
        }
        
    }

    const PreviusProyects = () => {
        if (numberProyect > 0 && numberProyect <= Object.keys(DicProjectsFeatured).length) {
            setnumberProyect(numberProyect-2);
        }
    }

    return (
        <>
            <div class="inline-flex rounded-md shadow-sm mt-5" role="group">
					<button type="button"  id="btn_previus" onClick={PreviusProyects} class="text-center inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
						<svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
						</svg>
						<span class="text-[10px]">Anterior</span>
					</button>
					<button type="button" id="btn_next" onClick={NextProyects} class="text-center inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
						<span class="text-[10px]">Siguiente</span>
						<svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
						</svg>
					</button>
			</div>
            <div class="flex flex-col p-5 gap-5">
                <div class="grid grid-cols-2 gap-10">
                    <div class="flex flex-col gap-2">
                        <span class="text-[10px] text-blue-700">{DicProjectsFeatured[numberProyect].software}</span>

                        <h3 class="text-xl" id="proyect_name">{DicProjectsFeatured[numberProyect].NameProject}</h3>
                        <p class="text-sm" id="proyect_resume">{DicProjectsFeatured[numberProyect].resumen}</p>
                        <a id="proyect_href" href={DicProjectsFeatured[numberProyect].code} class="flex cursor-pointer gap-1 w-min items-center text-sm bg-color-secondary hover:bg-black text-white font-semibold py-1 px-4  rounded shadow">
                            <svg class="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-[10px]">Codigo</span>
                        </a>   
                        <div class="" >
                            <ul class="flex flex-wrap">
                                {listTegnologyLI(numberProyect)}
                            </ul>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <img id="proyect_img" class=" h-28 md:h-40" src={DicProjectsFeatured[numberProyect].imgProject} alt="" />
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-10">
                    <div class="flex items-center" >
                        <img id="proyect_img2" class=" h-28 md:h-40" src={DicProjectsFeatured[numberProyect+1].imgProject} alt="" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <span class="text-[10px] text-blue-700">{DicProjectsFeatured[numberProyect+1].software}</span>
                        <h3 class="text-xl" id="proyect_name2">{DicProjectsFeatured[numberProyect+1].NameProject}</h3>
                        <p class="text-sm" id="proyect_resume2">{DicProjectsFeatured[numberProyect+1].resumen}</p>
                        <a id="proyect_href2" href={DicProjectsFeatured[numberProyect+1].code} class="flex cursor-pointer gap-1 w-min items-center text-sm bg-color-secondary hover:bg-black text-white font-semibold py-1 px-4  rounded shadow">
                            <svg class="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-[10px]">Codigo</span>
                        </a>   
                        <div class="" >
                            <ul class="flex flex-wrap">
                                {listTegnologyLI(numberProyect+1)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </>
    )

    
}
