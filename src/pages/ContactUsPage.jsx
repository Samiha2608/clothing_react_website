import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactUsPage = () => {
  return (
    <div className="bg-cover bg-center bg-[#224F34]" >
      <Header />
      <div className="pt-24">
        <h1 className="text-5xl font-bold text-white text-center mt-8">Contact Us</h1>
        <p className="text-lg text-white text-center mb-8">Feel free to contact us for any query!</p>
        <div className="flex justify-center bg-[#224F34]">
          <Formik
            initialValues={{ name: '', email: '', description: '' }}
            validationSchema={Yup.object({
              name: Yup.string().required('Required'),
              email: Yup.string().email('Invalid email address').required('Required'),
              description: Yup.string().required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="bg-[#224F34] p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white">Name</label>
                  <Field name="name" type="text" className="w-full p-2 border rounded" />
                  <ErrorMessage name="name" component="div" className="text-red-600" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white">Email</label>
                  <Field name="email" type="email" className="w-full p-2 border rounded" />
                  <ErrorMessage name="email" component="div" className="text-red-600" />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-white">Description</label>
                  <Field name="description" as="textarea" className="w-full p-2 border rounded" />
                  <ErrorMessage name="description" component="div" className="text-red-600" />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full p-2 bg-transparent border border-[#EFE8C2] text-[#EFE8C2] rounded hover:bg-[#E7D37F] hover:text-white"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
