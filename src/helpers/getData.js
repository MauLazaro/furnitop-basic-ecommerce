import products from "./../data/products.json";

export const getData = () =>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(products);
        },1);
    })
}


export const getItemById=(id)=>{
    return new Promise((resolve,reject)=>{
        const item=products.find((el)=>el.id===id);

        if (item) {
            resolve(item)
        }else{
            reject({
                error: "No se encontro el producto"
            })
        }
    })
}
