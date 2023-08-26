import { useEffect, useState } from 'react'
import { getData } from '../../helpers/getData';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const[products, setProducts]=useState([]);

    const category = useParams().category;
    console.log(category);


    useEffect(() => {
        getData().then((res) => {
            if (category) {
                setProducts(res.filter((prod) => prod.category === category));
            } else {
                setProducts(res);
            }
        });
    }, [category]);

    return (
        <div>
            <ItemList products = {products} />
        </div>
    )
}

export default ItemListContainer