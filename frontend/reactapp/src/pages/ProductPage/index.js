import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { getProduct } from '../../utilities/Request';
import { Button, Form, Image } from 'react-bootstrap';
import { IoIosArrowForward } from "react-icons/io";

import './productPage.css';

const ProductPage = ({ match }) => {

    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const productId = match.params.id;
            setProduct(await getProduct(productId, 0));
        }
        fetchData();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {product !== null ? (
                <>
                    <div className="product-container">
                        <div className="images-container">
                            <Image className="big-img-container" key={product.pictures[0].id} height="450px" width="100%"
                                src={product.pictures[0].url} />
                            <div className="small-img-container">
                                {product.pictures.map((picture, i) => (
                                    <div key={i}>
                                        <Image
                                            width="100px"
                                            height="100px"
                                            src={picture.url}
                                        />
                                        <Image
                                            width="100px"
                                            height="100px"
                                            src={picture.url}
                                        />
                                        <Image
                                            width="100px"
                                            height="100px"
                                            src={picture.url}
                                        />
                                        <Image
                                            width="100px"
                                            height="100px"
                                            src={picture.url}
                                        />
                                        <Image
                                            width="100px"
                                            height="100px"
                                            src={picture.url}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="product-info-container">
                            <h1>
                                {product.name}
                            </h1>
                            <div style={{ marginBottom: '35px' }}>
                                Starts from <span className="purple-text">${product.startPrice}</span>
                            </div>
                            <div className="bid-container">
                                <div style={{ color: '#9B9B9B' }}>
                                    Highest bid: <span className="purple-text">57$</span>
                                    <br />
                                    Number of bids: <span className="purple-text">1</span>
                                    <br />
                                    Time left: <span className="purple-text">10 weeks 6 days</span>
                                </div>
                            </div>
                            <div className="bid-input-button">
                                <Form.Control className="form-control-gray" type="text" placeholder="Enter $57.00 or higher" />
                                <Button>
                                    Place bid
                                    <IoIosArrowForward style={{ fontSize: 22, marginLeft: '10px', marginBottom: '3px' }} />
                                </Button>
                            </div>
                            <div>
                                <div className="info-container" style={{ marginTop: 15 }}>
                                    <div className="info-title">
                                        <p className="purple-text detail-title">Details</p>
                                        <p>Seller information</p>
                                        <p>Customer reviews</p>
                                    </div>
                                    <div className="lines">
                                        <div className="purple-line" />
                                        <div className="gray-line" />
                                    </div>
                                    <div style={{ color: '#9b9b9b', fontStyle: 'italic' }}>
                                        {product.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="related-products-container">
                        <h5 className="related-products-title">Related Products</h5>
                        <div className="related-products-line"></div>
                        <div className="related-products-grid">
                            <div className="related-products-grid-item">
                                <Image height="450px" width="100%"
                                    src={product.pictures[0].url} />
                                <h5 className="related-products-item-title">Shoes Collection</h5>
                                Starts from <span className="purple-text">${product.startPrice}</span>
                            </div>
                            <div className="related-products-grid-item">
                                <Image height="450px" width="100%"
                                    src={product.pictures[0].url} />
                                <h5 className="related-products-item-title">Shoes Collection</h5>
                                Starts from <span className="purple-text">${product.startPrice}</span>
                            </div>
                            <div className="related-products-grid-item">
                                <Image height="450px" width="100%"
                                    src={product.pictures[0].url} />
                                <h5 className="related-products-item-title">Shoes Collection</h5>
                                Starts from <span className="purple-text">${product.startPrice}</span>
                            </div>
                        </div>
                    </div>
                </>

            ) : null}

        </>
    );
}

export default withRouter(ProductPage);
