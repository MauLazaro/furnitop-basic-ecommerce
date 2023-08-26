import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from '../../helpers/getData';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const[item,setItem]=useState(null);
    const id=useParams().id;

    useEffect(()=>{
        getItemById(Number(id))
        .then((res)=>{
            setItem(res);
        })
    },[id])
  return (
    <div>
        {item && <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer