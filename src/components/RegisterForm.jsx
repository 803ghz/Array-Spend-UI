import { useState } from "react";

function RegisterForm() {
    const  [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [errors, setErrors] = useState({})

    function handleChange(e) {
        const { name, value } = e.target;
        console.log(e.target);
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const foundedErrors = validate(data);
        setErrors(foundedErrors)

        if(foundedErrors.length > 0) {
            return
        };

        console.log("Enviando", data);
    }

    function validate(data) {
        const errors = {} 

        if (!data.name.trim) errors.name = "El nombre es obligatorio" 
        if (!data.email.includes("@")) errors.email = "El email es obligatorio"
        if (!data.password.length >= 6) errors.password = "Mínimo 6 caracteres"
        if (data.password !== data.confirmPassword) errors.confirmPassword = "Las contraseñas no coinciden"
        return errors;
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={data.name}
                onChange={handleChange}
            /> {errors.name && <span className="error">{errors.name}</span>}
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={handleChange}
            /> {errors.email && <span className="error">{errors.email}</span>}
            <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={data.password}
                onChange={handleChange}
            /> {errors.password && <span className="error">{errors.password}</span>}
            <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmar contraseña"
                value={data.confirmPassword}
                onChange={handleChange}
            /> {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            <button type="submit">Registrarse</button>
        </form>
    )
}

export {
    RegisterForm
}