import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const msPerDay = 86400000;
const firstDeliveryDate = new Date().getTime() + msPerDay;
const maxDate = new Date().getTime() + 31 * msPerDay;
const maxDeliveryDate = new Date(maxDate).toISOString().split("T")[0];
const tomorrow = new Date(firstDeliveryDate).toISOString().split("T")[0];

const OrderFormValidated = (props) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        deliveryTime: "",
        deliveryDate: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(25, "Must be 25 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(25, "Must be 25 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        address: Yup.string()
          .min(10, "Must be 10 characters or more")
          .required("Required"),
        deliveryTime: Yup.string().required("Required"),
        deliveryDate: Yup.string().required("Required"),
        cartItems: Yup.number().min(5, "There are no items in your order")
      })}
      onSubmit={(values, actions) => {
        if (props.cartItems.length === 0){
          alert('There are no items in your order')
          return
        }
        setTimeout(() => {
          props.submitOrder(values);
          actions.resetForm();
          actions.setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <div id="order-form">
          <Field
            aria-label="First Name"
            placeholder="First Name"
            name="firstName"
            type="text"
          />
          <ErrorMessage render={msg => <div className="error">{msg}</div>} name="firstName" />

          <Field
            aria-label="Last Name"
            placeholder="Last Name"
            name="lastName"
            type="text"
          />

          <ErrorMessage render={msg => <div className="error">{msg}</div>} name="lastName" />

          <Field
            aria-label="Email"
            placeholder="Email Address"
            name="email"
            type="email"
          />

          <ErrorMessage render={msg => <div className="error">{msg}</div>} name="email" />

          <Field
            aria-label="Street Address"
            placeholder="Delivery Address"
            name="address"
            type="text"
          />

          <ErrorMessage render={msg => <div className="error">{msg}</div>} name="address" />

          <div id="deliveryTime-radio-group">Delivery Time (24h)</div>
          <div role="group" id="delivery-times" aria-labelledby="deliveryTime-radio-group">
            <label>
              <Field
                className="clickable"
                type="radio"
                name="deliveryTime"
                value="7-12"
              />
              7-12
            </label>
            <label>
              <Field
                className="clickable"
                type="radio"
                name="deliveryTime"
                value="12-16"
              />
              12-16
            </label>
            <label>
              <Field
                className="clickable"
                type="radio"
                name="deliveryTime"
                value="16-20"
              />
              16-20
            </label>
          </div>
          <ErrorMessage render={msg => <div className="error" id="error-radio">{msg}</div>} name="deliveryTime" />

          <label htmlFor="deliveryDate">Delivery Date</label>
          <Field
            className="clickable"
            type="date"
            name="deliveryDate"
            min={tomorrow}
            max={maxDeliveryDate}
          />
          <ErrorMessage render={msg => <div className="error">{msg}</div>} name="deliveryDate" />
          
          <button id="submit-button" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};
export default OrderFormValidated;
