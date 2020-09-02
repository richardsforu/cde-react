import React from 'react';
import useForm from './useForm';

const ProductForm = ({submitForm}) => {
    const{handleSubmit,f1}=useForm(submitForm);
   
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                <div>
                        <label>Id</label>
                        <input type="text" name="id"/>
                    </div>

                    <div>
                        <label>Product Name</label>
                        <input type="text" name="name"/>
                    </div>

                    <div>
                        <label>Price</label>
                        <input type="text" name="price"/>
                    </div>

                    <div>
                        <label>Description</label>
                        <textarea name="description"></textarea>
                    </div>


                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default ProductForm;