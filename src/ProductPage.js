
import { Product } from './Products';
import {Navbar,Container,Nav} from 'react-bootstrap';
import { useCart } from 'react-use-cart';


const ProductPage = () => {
    const handleClick=(props)=>{
        alert(`Name: ${props.name}`+"\n"+`Price: ${props.price}`+"\n"+`Description: ${props.description}`);
        console.log(props);
    }
    
    // const {add} = useCart();

    
    return(
        <>
            <Container>
                    <Navbar.Collapse>
                        <Nav>
                        <div className='linktopage'>
                            <Nav.Link href="/" >FrontPage</Nav.Link>
                        </div>
                        <h3 className='welcome'>Products List</h3>
                        <div>
                            {Product.map(prod=> {
                                return(
                                    <div className='card' >
                                        <img className="imgurl" src={prod.imageUrl}/>
                                        <div key={prod.name}>
                                            <h4>{prod.name}</h4>
                                            <h4>${prod.price}</h4>
                                            <p>{prod.description}</p>
                                            <button onClick={()=>handleClick(prod)}>Check Details</button>
                                            {/* <div className='newbutton'><button class="add" onClick={()=>add(prod.prod)}>Add To Cart</button></div> */}
                                           
                                        </div>
                                        {/* <CartProvider>
                                        <AddToCart/>
                                        </CartProvider> */}
                                        </div>
                                        
                                    )   
                                })
                            }
                        </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

        </>
    )
}

export default ProductPage;