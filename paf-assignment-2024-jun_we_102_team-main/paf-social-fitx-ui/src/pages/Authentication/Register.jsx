import { TextField, Button, Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const initialValues = { firstName: "", lastName: "",email: "", password: "", gender: "" };

const validationSchema = Yup.object().shape({
    
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Register = () => {

    const [gender,setGender] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (values) => {
        values.gender = gender
        console.log("handle submit", values);
    };

    const handleChange = (event) =>{
        setGender(event.target.value)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className="space-y-5">
                <div className="space-y-5">
                    <div>
                        <Field as={TextField} name="firstName" placeholder="First Name" type="text" variant="outlined" fullWidth />
                        <ErrorMessage name="firstName" component="div" className="text-red-500" />
                    </div>
                    <div>
                        <Field as={TextField} name="lastName" placeholder="Last Name" type="text" variant="outlined" fullWidth />
                        <ErrorMessage name="lastName" component="div" className="text-red-500" />
                    </div>
                    <div>
                        <Field as={TextField} name="email" placeholder="Email" type="email" variant="outlined" fullWidth />
                        <ErrorMessage name="email" component="div" className="text-red-500" />
                    </div>
                    <div>
                        <Field as={TextField} name="password" placeholder="Password" type="password" variant="outlined" fullWidth />
                        <ErrorMessage name="password" component="div" className="text-red-500" />
                    </div>
                    <div>
                    <RadioGroup on onChange={handleChange}row aria-label="gender" name="gender">
                            <FormControlLabel value="female" control={<Radio/>} label="Female" />
                            <FormControlLabel value="male" control={<Radio/>} label="Male" />
                            <ErrorMessage name="gender" component="div" className="text-red-500" />

                    </RadioGroup>
                    </div>
                    <Box display="flex" justifyContent="center">
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{ backgroundColor: '#007bff', color: '#ffffff', '&:hover': { backgroundColor: '#0056b3' } }}
                        fullWidth>
                            Register
                        </Button>
                    </Box>

                    <div className="flex gap-2 item-center justify-center pt-5">
                    <p>If you have already account ?</p>
                    </div>
                    <Box display="flex" justifyContent="center">
                        <Button onClick={()=>navigate("/login")}
                            sx={{ backgroundColor: '#007bff', color: '#ffffff', '&:hover': { backgroundColor: '#0056b3' } }}
                        fullWidth>
                            Login
                        </Button>
                        </Box>

                </div>
            </Form>
        </Formik>
    );
};

export default Register;
