import { useEffect, useState  } from 'react';
import PropTypes from 'prop-types'
import Section from '../../components/Section'
import ProductForm from './ProductForm';

const Products = props => {

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
    const newProductList = [...productList].filter(v => v.id !== product.id);
    setSelectedProduct(newProductList);
    localStorage.setItem("products", JSON.stringify(newProductList));
    setReload(true);
  }

  const onChangeFilter = (v) => {
    const term = v.target.value;
    const filter = productList.filter(({name}) => (name.toLowerCase()).search(term.toLowerCase()) > -1)
    setFilteredProductList(filter);
  }

  return (
    <Section>
      <div className='row'>

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
          <table 
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

Products.propTypes = {}

export default Products