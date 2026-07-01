function About() {
    return (
        <div className="mx-auto max-w-2xl p-6">
            <h1 className="text-3xl font-bold mb-4">Quiénes somos</h1> 
            
            <p className="mb-4 text-gray-500">
                Array Spend es una aplicación diseñada para que gestiones tus gastos de forma simple, rápida y visual. 
                Nuestro objetivo es ayudarte a tomar el control de tu economía personal sin complicaciones.
            </p>
            
            <p className="mb-6 dark:text-gray-500">
                Creemos que la tecnología debe facilitarnos la vida, por eso hemos creado una herramienta 
                intuitiva que te permite entender en qué gastas tu dinero con un solo vistazo.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                    Creado por <strong>Sergio Diaz</strong>
                </p>
            </div>
        </div>
    );
}

export {
    About
};