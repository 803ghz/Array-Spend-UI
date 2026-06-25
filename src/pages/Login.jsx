import { LoginForm } from '../features/auth/LoginForm';

function Login() {
    return (
        <div className="flex min-h-screen font-sans transition-colors duration-300 bg-[var(--bg)] text-[var(--text)]">

            <div className="hidden md:flex flex-1 items-center justify-center bg-[var(--bg)] p-10 transition-colors">

                <div className="max-w-md text-center">

                    <h1 className="text-3xl font-bold mb-4">
                        Gestiona todos tus gastos con eficiencia
                    </h1>

                    <p className="mb-8 opacity-70">
                        La forma más sencilla de llevar el control de tu economía diaria.
                    </p>

                    <div className="mt-5 flex h-[200px] w-full items-center justify-center rounded-xl bg-[var(--bg)]">
                        <img className="h-auto w-[300px] rounded-lg" src="/src/shared/assets/flatdesign.png" alt="Mockup" />
                    </div>

                </div>
            </div>

            <div className="flex flex-1 items-center justify-center p-10 bg-[var(--bg)]">

                <div className="w-full max-w-[360px] bg-[var(--bg)] p-8 rounded-2xl shadow-sm">

                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export {
    Login
}