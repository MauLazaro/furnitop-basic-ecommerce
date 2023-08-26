import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"


function Category() {
  return (
    <div>
      <div className="product-json">
        <div className="container">
          <div className="wrapper">
            <div className="column">
              <div className="sectop flexitem">
                <h1><i className="ri-box-3-line"></i> Filtrado por Categoria</h1>
              </div>
              <div>
                  <ItemListContainer />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category