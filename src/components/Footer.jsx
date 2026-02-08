const Footer  = () => {
    return (
        <>
            <footer className="border-t-2 border-yellow-600 bg-stone-900 mt-16 text-gray-300">
                <section className="max-w-[1200px] mx-auto mt-4 p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        <div>
                            <h2 className="text-xl font-cinzel font-bold text-yellow-600">Game Of Thrones</h2>
                            <hr className="w-full border-t border-gray-600 mb-4"/>
                            <p>
                            Proyecto académico desarrollado para el consumo de la 
                            <a className="text-xl text-yellow-600" href="https://thronesapi.com/">Thrones API</a>.
                            Visualización de personajes del universo creado por George R. R. Martin.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-cinzel font-bold text-yellow-600">Casas de Poniente</h2>
                            <hr className="w-full border-t border-gray-600 mb-4"/>
                            <ul>
                                <li>Casa Stark</li>
                                <li>Casa Lannister</li>
                                <li>Casa Targaryen</li>
                                <li>Casa Baratheon</li>
                                <li>Casa Tyrell</li>
                                <li>Casa Greyjoy</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-cinzel font-bold text-yellow-600"> Proyecto </h2>
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
                        <hr className="w-full border-t border-gray-600"/>
                        <h2 className="text-2xl font-cinzel font-bold text-yellow-600 my-4">
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