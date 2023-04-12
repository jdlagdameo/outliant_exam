/**
 * Products page 
 * 
 * @author: John Dave Lagdameo
 * @since: 04/13/2023 
 * 
 * @internal revisions:
 * + 
 * +
 * +
 */
import { useEffect, useState  } from 'react';
import Swal from 'sweetalert2';

import ProductForm from './ProductForm';
import Section from '../../components/Section';

const Products = () => {

  const [reload, setReload] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [productList, setProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);

  useEffect(() => {
    if(reload){
      setReload(false);
      const getProducts = localStorage.getItem('products');
      const newProductList = getProducts ? [...JSON.parse(getProducts)] : [];
      setProductList(newProductList);
      setFilteredProductList(newProductList);

    }
  },[reload]);

  const editHandler = (product) => {
    setSelectedProduct(product);
  }

  const deleteHandler = (product) => {
    Swal.fire({
      title: "Product",
      text: "Are you sure you want to delete this product?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {

      if (result.isConfirmed) {
        const newProductList = [...productList].filter(v => v.id !== product.id);
        setSelectedProduct(newProductList);
        localStorage.setItem("products", JSON.stringify(newProductList));
        
        Swal.fire('Success!', "Product successfully deleted.", 'success');
        setReload(true);
        
      }

    });

  }

  const onChangeFilter = (v) => {
    const term = v.target.value;
    const filter = productList.filter(({name}) => (name.toLowerCase()).search(term.toLowerCase()) > -1)
    setFilteredProductList(filter);
  }

  return (
    <Section>
      <div className='row mb-4'>
        <div className='col-lg-6'>
          <div className='row'>
            <div className='col-lg-6'>
              <h2>Products</h2>
            </div>
            <div className='col-lg-6'>
              <input 
                type='text' 
                className='form-control'
                onChange={(v) => onChangeFilter(v)}
                placeholder='Search for keywords...' />
            </div>
          </div>
          <div class="table-responsive mt-3">
            <table 
              id="table-product"
              style={{width: "100%" }}
              className='table table-bordered text-center'>
                <thead>
                  <tr>
                    <th style={{width: "35%" }}>Name</th>
                    <th style={{width: "35%" }}>Price</th>
                    <th style={{width: "30%" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProductList.map((v) => (
                    <tr key={v.id}>
                        <td>{v.name}</td>
                        <td>{v.price}</td>
                        <td>
                          <button 
                            onClick={() => editHandler(v)}
                            className='btn btn-sm btn-dark me-1'>
                            Edit
                          </button>
                          <button 
                            onClick={() => deleteHandler(v)}
                            className='btn btn-sm btn-outline-dark'>
                            Delete
                          </button>
                        </td>
                    </tr>
                  ))}
                  {filteredProductList.length === 0 && (
                    <tr>
                      <td colSpan={3}>
                        No Product/s to show.
                      </td>
                    </tr>
                  )}
                </tbody>
            </table>
          </div>
        </div>

        <div className='col-lg-6'>
          <ProductForm 
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            setProductList={setProductList}
            setReload={setReload} />
        </div>
        
      </div>
    </Section>
  )
}

export default Products;