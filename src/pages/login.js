import React from "react";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));

    return (
            <div className="div-login">
                <h3 className="primary-color">Iniciar sesión</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="div-login-form mb-3">
                        <label htmlFor="email" className="form-label mt-3">Correo electrónico</label>
                        <input {...register("email")} type="email" name="email" className="form-control" id="email" />
                        <label htmlFor="password" className="form-label mt-3">Contraseña</label>
                        <input {...register("password")} type="password" name="password" className="form-control" id="password" />
                    </div>
                    <input type="submit" value="Acceder" className="button-green" />
                </form>
                <p>¿No tienes cuenta? <Link to="register"><span className="primary-color">Regístrate</span></Link></p>
            </div>
    );
};

export default Login;