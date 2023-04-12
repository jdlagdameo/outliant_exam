import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Swal from 'sweetalert2';

const ProductForm = ({ setSelectedProduct, selectedProduct, setReload  }) => {
    
    const id = selectedProduct?.id ?? null;

    const initialValues = {
        name: selectedProduct?.name ?? '',
        price: selectedProduct?.price ?? '',
    }

    const validationSchema = Yup.object().shape({
        name: Yup
            .string()
            .trim()
            .required('Name is required')
            .max(100, 'Name exceeds the maximum number of characters'),
        price: Yup
            .string()
            .trim()
            .required('Price is required')
            .matches(/^\d+(\.\d{1,2})?$/, "Price format is invalid")
            .max(10, 'Price exceeds the maximum number of digits')
    });

    const onSubmit = (values, { setSubmitting, resetForm }) => {
       
        const curProducts = localStorage.getItem('products');
        
        const text = `Are you sure you want to ${id ? "Save Changes" : "create new product"}?`;
        const textSuccess = `Product successfully ${id ? "created" : "updated"}.`; 

        Swal.fire({
            title: "Product",
            text,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {

            setSubmitting(false);

            if (result.isConfirmed) {
                
                Swal.fire('Success!', textSuccess, 'success');

                if(id){
                    const products = JSON.parse(curProducts).map(v => {
                        if(v.id === id){
                            return {...v, ...values}
                        }
                        return v;
                    })
                    localStorage.setItem("products", JSON.stringify(products));
                }else{
                    const newProduct = {id: Math.random(), ... values};
                    const products = curProducts ? [... JSON.parse(curProducts) , newProduct] : [newProduct];
                    localStorage.setItem("products", JSON.stringify(products));
                }
            
                resetForm();
                setSelectedProduct({});
                setReload(true);
           
            }
          });

    }
      
    return (
         <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={validationSchema}>
            {({ isSubmitting, errors, touched }) => (
                <Form autoComplete='off'>
                    <div id="form-product">
                        <div className='bg-theme-dark p-5'>

                        <div className='text-center'>
                            <h4>Header Text</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur <br /> adpiscing elit ut</p>
                        </div>
                        
                        {/* Name */}
                        <div className='form-group mt-3'>
                            <Field 
                                name="name" 
                                type="text" 
                                maxLength="100"
                                placeholder="Name" 
                                className={`form-control ${errors.name && touched.name ? "is-invalid" : ""} `} />
                            
                            <ErrorMessage 
                                name="name" 
                                component="div" 
                                className="invalid-feedback d-block" />
                        </div>

                        {/* Price */}
                        <div className='form-group mt-3'>
                            <Field 
                                name="price" 
                                type="text" 
                                maxLength="10" 
                                placeholder="Price" 
                                className={`form-control ${errors.name && touched.name ? "is-invalid" : ""} `} />
                            
                            <ErrorMessage 
                                name="price" 
                                component="div" 
                                className="invalid-feedback d-block"/>
                        </div>

                        <div className='d-grid mt-3'>
                            <button 
                                type='submit' 
                                disabled={isSubmitting}
                                className='btn btn-dark btn-block'>
                                {id ? "Save" : "Create"}
                            </button>   

                            {id && (
                                <button 
                                    type='button' 
                                    disabled={isSubmitting}
                                    onClick={() => setSelectedProduct({})}
                                    className='btn btn-outline-dark btn-block mt-2'>
                                    Cancel
                                </button>      
                            )}
             
                        </div>
                    </div>
     
                </div>
            </Form>
        )}
    </Formik>

    )
}

ProductForm.propTypes = {}

export default ProductForm