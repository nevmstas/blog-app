import React from 'react';
import { useFormik } from 'formik';

export default function NewPost(){
    const formik = useFormik({
        initialValues: {
          title: '',
          body: '',
        },
        onSubmit: values => {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: values.title, body: values.body })
            };
            fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
                .then(response => response.json())
                .then(data => console.log(data))
        }
      });
    return(
        <form onSubmit={formik.handleSubmit}>
       <label htmlFor="title">Title</label>
       <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.title}
       />
       <label htmlFor="body">Body</label>
       <input
         id="body"
         name="body"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.body}
       />
       <label htmlFor="email">Email Address</label>
       <button type="submit">Submit</button>
     </form>
    )
}