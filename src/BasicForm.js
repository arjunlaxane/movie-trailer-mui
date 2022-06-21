// import { useFormik } from 'formik';
// import * as yup from 'yup';

// const formValidationSchema = yup.object({
//   email: yup
//     .string()
//     .email()
//     .min(5, 'need a bigger email')
//     .required('Why not fill thi email'),
//   // password: yup.string().min(8),
//   //to givr custom msg
//   // password: yup.string().min(8, 'Need bigger password bro'),

//   //u can do chaining
//   password: yup
//     .string()
//     .min(8, 'Need bigger password bro')
//     .max(12, 'Too much password')
//     .required('Why not fill this password'),
// });

// export function BasicForm() {
//   // useFormik takes object
//   //no need to pass usestate as we did
//   const formik = useFormik({
//     initialValues: { email: 'Arjun', password: 'abc' },
//     validationSchema: formValidationSchema,
//     onSubmit: values => {
//       console.log('On submit', values);
//     },
//     // this is callback function :(values)=>{
//     // console.log("On submit",values);
//     // }
//     //formik by default give result in object. Unlike earlier where we use to create object: name poster trailer....
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       {/* by default html 5 validation, html5 validation is not so strong, it is ignoring .com. Thus comes custom validation */}
//       <input
//         type="email"
//         value={formik.values.email}
//         onChange={formik.handleChange}
//         placeholder="Enter email"
//         name="email"
//         onBlur={formik.handleBlur}
//       />
//       {/* {formik.errors.email} */}

//       {/* only if user touched the form and moves away, then show the error msg */}

//       {formik.touched.email && formik.errors.email ? formik.errors.email : ''}
//       {/* u will get this error msg from yup library */}

//       {/* here, v r saying formik u handle the change */}
//       {/* default type is text */}
//       <input
//         name="password"
//         type={'password'}
//         onChange={formik.handleChange}
//         value={formik.values.password}
//         placeholder="Enter password"
//         onBlur={formik.handleBlur}
//       />

//       {/* {formik.errors.password} */}
//       {formik.touched.password && formik.errors.password
//         ? formik.errors.password
//         : ''}

//       {/* after writing name u can write in inputs, now formik is handling all trouble for us */}
//       {/* handlechange-> We want it to listen for typing event with onchange. In last scenario we knew what v r updating ex. setName updating name, setPoster updating poster but as handlechange is general method. So, how formik will identify which input is email/password. to identify we add name(id can also be add) */}

//       <button type="submit">Submit</button>
//       {/* <p>Values: {JSON.stringify(formik.values)}</p> */}
//       {/* <p>Touches:{JSON.stringify(formik.touched)}</p> */}
//       {/* <p>Errors :{JSON.stringify(formik.errors)}</p> */}
//     </form>
//   );
// }

// //when u submit, it gives this in url: http://localhost:3000/basic-form?email=arjunlaxane%40gmail.com&password=abc + page was also refreshing
// //we want to capture this submit event. so, add onsubmit evenr to form tag
// //so due to submit event page will not refresh

// //we r not using states here, everything is done by formik
// //to hack system means to get into network panel

//----------------------------------------------------------------------------
// In above code we use formik too many times so just destructure it

import { useFormik } from 'formik';
import * as yup from 'yup';

const formValidationSchema = yup.object({
  email: yup
    .string()
    .email()
    .min(5, 'need a bigger email')
    .required('Why not fill thi email'),
  // password: yup.string().min(8),
  //to givr custom msg
  // password: yup.string().min(8, 'Need bigger password bro'),

  //u can do chaining
  password: yup
    .string()
    .min(8, 'Need bigger password bro')
    .max(12, 'Too much password')
    .required('Why not fill this password'),

  /* for password setting use regex
  password: yup
    .string()
    .min(8, 'Need bigger password bro')
    .max(12, 'Too much password')
    .required('Why not fill this password'),
    .match(/regex/) */
});

export function BasicForm() {
  // useFormik takes object
  //no need to pass usestate as we did
  const { handleSubmit, handleBlur, handleChange, values, touched, errors } =
    useFormik({
      initialValues: { email: 'Arjun', password: 'abc' },
      validationSchema: formValidationSchema,
      onSubmit: values => {
        console.log('On submit', values);
      },
      // this is callback function :(values)=>{
      // console.log("On submit",values);
      // }
      //formik by default give result in object. Unlike earlier where we use to create object: name poster trailer....
    });

  return (
    <form onSubmit={handleSubmit}>
      {/* by default html 5 validation, html5 validation is not so strong, it is ignoring .com. Thus comes custom validation */}
      <input
        type="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Enter email"
        name="email"
        onBlur={handleBlur}
      />
      {/* {formik.errors.email} */}

      {/* only if user touched the form and moves away, then show the error msg */}

      {touched.email && errors.email ? errors.email : ''}
      {/* u will get this error msg from yup library */}

      {/* here, v r saying formik u handle the change */}
      {/* default type is text */}
      <input
        name="password"
        type={'password'}
        onChange={handleChange}
        value={values.password}
        placeholder="Enter password"
        onBlur={handleBlur}
      />

      {/* {formik.errors.password} */}
      {touched.password && errors.password ? errors.password : ''}

      {/* after writing name u can write in inputs, now formik is handling all trouble for us */}
      {/* handlechange-> We want it to listen for typing event with onchange. In last scenario we knew what v r updating ex. setName updating name, setPoster updating poster but as handlechange is general method. So, how formik will identify which input is email/password. to identify we add name(id can also be add) */}

      <button type="submit">Submit</button>
      {/* <p>Values: {JSON.stringify(formik.values)}</p> */}
      {/* <p>Touches:{JSON.stringify(formik.touched)}</p> */}
      {/* <p>Errors :{JSON.stringify(formik.errors)}</p> */}
    </form>
  );
}

//when u submit, it gives this in url: http://localhost:3000/basic-form?email=arjunlaxane%40gmail.com&password=abc + page was also refreshing
//we want to capture this submit event. so, add onsubmit evenr to form tag
//so due to submit event page will not refresh

//we r not using states here, everything is done by formik
//to hack system means to get into network panel
