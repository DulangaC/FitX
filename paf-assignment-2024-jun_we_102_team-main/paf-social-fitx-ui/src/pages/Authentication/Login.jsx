import { TextField, Button, Box } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const initialValues = { email: "", password: "" };

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Login = () => {

    const navigate = useNavigate();
    

    const handleSubmit = (values) => {
        console.log("handle submit", values);
    };

    return (
        <div>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className="space-y-5">
                <div className="space-y-5">
                    <div>
                        <Field as={TextField} name="email" placeholder="Email" type="email" variant="outlined" fullWidth />
                        <ErrorMessage name="email" component="div" className="text-red-500" />
                    </div>
                    <div>
                        <Field as={TextField} name="password" placeholder="Password" type="password" variant="outlined" fullWidth />
                        <ErrorMessage name="password" component="div" className="text-red-500" />
                    </div>
                    <Box display="flex" justifyContent="center">
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{ backgroundColor: '#007bff', color: '#ffffff', '&:hover': { backgroundColor: '#0056b3' } }}
                        fullWidth>
                            Login
                        </Button>

                        
                    </Box>

                    <div className="flex gap-2 item-center justify-center pt-5">
                    <p>If you don't have account ?</p>
                    </div>
                    <Box display="flex" justifyContent="center">
                        <Button onClick={()=>navigate("/register")}
                            sx={{ backgroundColor: '#007bff', color: '#ffffff', '&:hover': { backgroundColor: '#0056b3' } }}
                        fullWidth>
                            Register
                        </Button>
                        </Box>


                </div>
            </Form>
        </Formik>



</div>
    );
};

export default Login;
