const Footer  = () => {
    return (
        <>
            <footer className="flex items-center flex-col border-t-2 border-yellow-600 bg-stone-900 mt-4 text-gray-300">
                <section className="max-w-[1200px]">
                    <div className="flex">
                        <div>
                            <h2 className="font-cinzel font-bold text-yellow-600">Game Of Thrones</h2>
                            <hr className="w-full border-t border-gray-600 mb-4"/>
                            <p>
                            Proyecto académico desarrollado para el consumo de la 
                            <a className="text-yellow-600" href="https://thronesapi.com/">Thrones API</a>.
                            Visualización de personajes del universo creado por George R. R. Martin.
                            </p>
                        </div>
                        <div>
                            <h2 className="font-cinzel font-bold text-yellow-600"> Proyecto </h2>
                            <hr className="w-full border-t border-gray-600 mb-4"/>
                            <ul>
                                <li>Equipo 3</li>
                                <li>JM Factoria</li>
                                <li>HTML · CSS · JavaScript</li>
                                <li>Consumo de API REST</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <hr className="w-full border-t border-gray-600 mb-4"/>
                        <h2 className=" font-cinzel font-bold text-yellow-600">
                            Aviso legal
                        </h2>
                        <hr className="w-full border-t border-gray-600 mb-4"/>
                        <p>Este proyecto no es oficial y se utiliza únicamente con fines educativos. 
                            Game of Thrones y sus personajes pertenecen a HBO® y George R. R. Martin.
                        </p>
                        <p className="text-sm text-gray-500 p-4 mb-6">
                            © 2025 · Proyecto Game of Thrones · Equipo 3
                        </p>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer;