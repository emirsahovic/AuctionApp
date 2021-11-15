import { useEffect, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { getProduct } from '../../utilities/Request';
import { Button, Form, Image, Nav } from 'react-bootstrap';
import { IoIosArrowForward } from "react-icons/io";
import { getToken } from '../../utilities/Auth';
import moment from 'moment';

import './productPage.css';

const ProductPage = ({ match, loggedInState }) => {

    const [product, setProduct] = useState(null);
    const [loggedIn, setLoggedIn] = useState(getToken() !== null);

    useEffect(() => {
        if (loggedInState !== null)
            setLoggedIn(loggedIn);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loggedInState]);

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
                    <div className="bg-container">
                        <div className="breadcrumbs-container breadcrumb-single-product" style={{ paddingTop: '15px' }}>
                            <p>{product.name}</p>
                            <div>
                                <NavLink to="/shop">Shop </NavLink> <span style={{ fontSize: "20px", color: "#9b9b9b" }}> &#8594; </span>
                                <span>Single Product</span>
                            </div>
                        </div>
                    </div>

                    <div className="product-container">
                        <div className="images-container">
                            <Image className="big-img-container" key={product.pictures[0].id} height="450px" width="100%"
                                src={product.pictures[0].url} />
                            <div className="small-img-container">
                                {product.pictures.map((picture, i) => (
                                    <div className="flex-images" key={i}>
                                        <Image
                                            width="100px"
                                            height="97px"
                                            src={picture.url}
                                        />
                                        <Image
                                            width="100px"
                                            height="97px"
                                            src={picture.url}
                                        />
                                        <Image
                                            width="100px"
                                            height="97px"
                                            src={picture.url}
                                        />
                                        <Image
                                            width="100px"
                                            height="97px"
                                            src={picture.url}
                                        />
                                        <Image
                                            width="100px"
                                            height="97px"
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
                                    Time left: <span className="purple-text">{moment(product.endDate).diff(moment(), 'weeks')} weeks</span>
                                </div>
                            </div>
                            <div className="bid-input-button">
                                <Form.Control className="form-control-gray" type="text" placeholder="Enter $57.00 or higher" />
                                {loggedIn ? <Button>
                                    Place bid
                                    <IoIosArrowForward style={{ fontSize: 22, marginLeft: '10px', marginBottom: '3px' }} />
                                </Button> : null}
                            </div>
                            <div>
                                <div className="info-container" style={{ marginTop: '15px' }}>
                                    <div className="info-title">
                                        <p className="purple-text detail-title">Details</p>
                                    </div>
                                    <div className="lines">
                                        <div className="purple-line" />
                                    </div>
                                    <div style={{ color: '#9b9b9b', fontStyle: 'italic' }}>
                                        {product.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </>

            ) : null}

        </>
    );
}

export default withRouter(ProductPage);
