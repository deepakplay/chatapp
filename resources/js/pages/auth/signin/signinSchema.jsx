import * as Yup from 'yup';

export const SigninSchema = Yup.object().shape({
    email: Yup.string().email("Please enter the valid email").required("Email field is required"),
    password: Yup.string().required("Password field is required"),
});
// password: Yup.string().required("Password field is required").min(8, 'Password must be at least 8 characters'),
