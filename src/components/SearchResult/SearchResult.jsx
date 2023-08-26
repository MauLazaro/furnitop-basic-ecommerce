import { useEffect, useState } from 'react'
import { getData } from '../../helpers/getData';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const SearchResult = () => {
  const [products, setProducts] = useState([]);

  const titulo = useParams().titulo.toUpperCase();
  console.log(titulo);


  useEffect(() => {
    getData().then((res) => {
      if (titulo) {
        setProducts(res.filter((prod) => prod.titulo == titulo));
      } else {
        setProducts(res);
      }
    });
  }, [titulo]);
  return (
    <div>
      <div className="product-json">
        <div className="container">
          <div className="wrapper">
            <div className="column">
              <div className="sectop flexitem">
                <h1><i className="ri-search-line"></i> Busqueda</h1>
              </div>
              <div>
                <ItemList products={products} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult