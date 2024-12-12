import React from 'react'
import { useSelector } from 'react-redux';


export const Products = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <React.Fragment>
      <div class="hero-wrap hero-bread" style={{backgroundImage: "url(" + "images/bg_1.jpg" + ")"}}>
        <div class="container">
          <div class="row no-gutters slider-text align-items-center justify-content-center">
            <div class="col-md-9 text-center">
              <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home</a></span> <span>Products</span></p>
              <h1 class="mb-0 bread">Products</h1>
            </div>
          </div>
        </div>
      </div>

      <section className='bg-light' style={{padding: "6em 0"}}>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10 mb-5 text-center">
              <ul class="product-category">
                <li><a href="#" class="active">All</a></li>
                <li><a href="#">Vegetables</a></li>
                <li><a href="#">Fruits</a></li>
                <li><a href="#">Juice</a></li>
                <li><a href="#">Dried</a></li>
              </ul>
            </div>
          </div>

          <div className="row">
            {products.map((product) => (
              <div className="col-md-6 col-lg-3" key={product.id}>
                <div className="product">
                  <a href="#" className="img-prod">
                    <img className="img-fluid" src={product.image} alt={product.name} />
                    {product.discount && <span className="status">{product.discount}%</span>}
                    <div className="overlay"></div>
                  </a>
                  <div className="text py-3 pb-4 px-3 text-center">
                    <h3><a href="#">{product.name}</a></h3>
                    <div className="d-flex">
                      <div className="pricing">
                        {product.salePrice ? (
                          <p className="price">
                            <span className="mr-2 price-dc">${product.price.toFixed(2)}</span>
                            <span className="price-sale">${product.salePrice.toFixed(2)}</span>
                          </p>
                        ) : (
                          <p className="price"><span>${product.price.toFixed(2)}</span></p>
                        )}
                      </div>
                    </div>
                    <div className="bottom-area d-flex px-3">
                      <div className="m-auto d-flex">
                        <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                          <span><i className="ion-ios-menu"></i></span>
                        </a>
                        <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                          <span><i className="ion-ios-cart"></i></span>
                        </a>
                        <a href="#" className="heart d-flex justify-content-center align-items-center">
                          <span><i className="ion-ios-heart"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>          

          <div class="row mt-5">
            <div class="col text-center">
              <div class="block-27">
                <ul>
                  <li><a href="#">&lt;</a></li>
                  <li class="active"><span>1</span></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">&gt;</a></li>
                </ul>
              </div>
            </div>
          </div>


        </div>
      </section>
    </React.Fragment>
  )
}

export default Products