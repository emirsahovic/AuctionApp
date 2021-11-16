import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../utilities/Request';
import { setSession, setRememberUser, getRememberUser, removeRememberUser } from '../../utilities/Auth';
import { useBreadcrumbContext } from '../../BreadcrumbContext'
import * as yup from 'yup';

import './login.css';

const Login = ({ changeLoggedInState, showMessage }) => {

    const { setBreadcrumb } = useBreadcrumbContext();

    useEffect(() => { setBreadcrumb("Login", []); }, []);

    const history = useHistory();
    const rememberUser = getRememberUser();
    const [loginError, setLoginError] = useState(false);

    const handleSubmit = async (user) => {
        try {
            const response = await loginUser(user);
            setSession(response.data.person, response.data.token);
            if (user.remember) setRememberUser(user.email, user.password);
            else removeRememberUser();
            history.push("/");
            changeLoggedInState();
            showMessage("success", "You have successfully logged in to AuctionApp");
        } catch (error) {
            if (error.response.data.status === 401) {
                setLoginError(true);
            }
            showMessage("danger", "You have entered an incorrect email address or password");
        }
    }

    const validationSchema = yup.object().shape({
        email: yup.string()
            .email("*Email must be valid")
            .max(255, "*Email must be less than 255 characters")
            .required("*Email is required"),
        password: yup.string()
            .required("*Password is required"),
        remember: yup.bool()
    });

    return (
        <>
            <div className="login-container">
                <div className="login-title">Login</div>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{
                        email: rememberUser.email || "",
                        password: rememberUser.password || "",
                        remember: rememberUser.email !== null
                    }}
                    onSubmit={handleSubmit}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        touched,
                        errors,
                    }) => (
                        <Form noValidate className="login-form" onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Enter Email</Form.Label>
                                <Form.Control
                                    className="form-control-gray"
                                    type="email"
                                    name="email"
                                    defaultValue={rememberUser.email || ""}
                                    onChange={handleChange}
                                    isInvalid={(touched.email && errors.email) || loginError}
                                    placeholder="Enter your email address"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    className="form-control-gray"
                                    type="password"
                                    name="password"
                                    defaultValue={rememberUser.password || ""}
                                    onChange={handleChange}
                                    isInvalid={(touched.password && errors.password) || loginError}
                                    placeholder="Enter your password"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Check
                                type="checkbox"
                                id="remember-checkbox"
                                label="Remember me"
                                name="remember"
                                defaultChecked={rememberUser.email !== null}
                                onChange={handleChange}
                            />

                            <Button className="login-button" type="submit">Login</Button>

                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}

export default Login;
