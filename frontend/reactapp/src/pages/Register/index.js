import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { setSession } from '../../utilities/Auth';
import { registerUser } from '../../utilities/Request';
import { useState } from 'react';
import { useLocation } from 'react-router';
import * as yup from 'yup';

import './register.css';

const Register = ({ changeLoggedInState, showMessage }) => {

    const history = useHistory();
    const [existingEmail, setExistingEmail] = useState(false);

    const validationSchema = yup.object().shape({
        firstName: yup.string()
            .min(2, "*First name must have at least 2 characters")
            .max(30, "*First name cannot be longer than 30 characters")
            .required("*First name is required"),
        lastName: yup.string()
            .min(2, "*Last name must have at least 2 characters")
            .max(30, "*Last name cannot be longer than 30 characters")
            .required("*Last name is required"),
        email: yup.string()
            .email("*Email must be valid")
            .max(255, "*Email must be less than 255 characters")
            .required("*Email is required"),
        password: yup.string()
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                "Password must contain at least eight characters, one letter and one number"
            )
            .required("*Password is required"),
    });

    const handleSubmit = async (user) => {
        try {
            const response = await registerUser(user);
            setSession(response.data.person, response.data.token);
            history.push("/account");
            changeLoggedInState();
            showMessage("success", "Your account has been successfully created ");
        } catch (error) {
            if (error.response.data.status === 409 || error.response.data.status === 500) {
                setExistingEmail(true);
            }
            showMessage("danger", "This email address already exists");
        }
    }

    const location = useLocation();
    const { pathname } = location;

    return (
        <>
            <div className="page-title">
                {pathname.charAt(pathname.lastIndexOf("/") + 1).toUpperCase() + pathname.slice(pathname.lastIndexOf("/") + 2)}
            </div>

            <div className="register-container">
                <div className="register-title">Register</div>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
                    onSubmit={handleSubmit}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        touched,
                        errors,
                    }) => (
                        <Form noValidate className="register-form" onSubmit={handleSubmit}>
                            <Form.Group controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    className="form-control-gray"
                                    type="text"
                                    name="firstName"
                                    onChange={handleChange}
                                    isValid={touched.firstName && !errors.firstName}
                                    isInvalid={touched.firstName && errors.firstName}
                                    placeholder="Enter your first name"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.firstName}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    className="form-control-gray"
                                    type="text"
                                    name="lastName"
                                    onChange={handleChange}
                                    isValid={touched.lastName && !errors.lastName}
                                    isInvalid={touched.lastName && errors.lastName}
                                    placeholder="Enter your last name"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.lastName}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Enter Email</Form.Label>
                                <Form.Control
                                    className="form-control-gray"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    isValid={touched.email && !errors.email}
                                    isInvalid={(touched.email && errors.email) || existingEmail}
                                    placeholder="Enter your email address"
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    className="form-control-gray"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    isValid={touched.password && !errors.password}
                                    isInvalid={touched.password && errors.password}
                                    placeholder="Enter your password"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button type="submit" className="register-button">
                                Register
                            </Button>

                            <Form.Text className="already-registered">
                                Already have an account?
                                <Link className="login-link" to="/login">
                                    Login
                                </Link>
                            </Form.Text>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}

export default Register;
