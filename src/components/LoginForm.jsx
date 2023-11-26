"use client";
import { useFormik } from "formik";
import Textfield from "./Textfield";
import { useState } from "react";

function LoginForm () {
    const formik = useFormik(
        {
            initialValues: {
                email:"",
                password: "",
            },
            onSubmit: (values) => {console.log(values);}
        }
    );
        return(
        <>
            <form onSubmit={() => {}}>
            <Textfield Name="email" Value={formik.values.username} onChange={formik.handleChange}/>
            <Textfield Name="password" Value={formik.values.password} onChange={formik.handleChange}/>
            </form>
        </>
    )
};

export default LoginForm;