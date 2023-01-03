
import { Product } from './Products';
import {Navbar,Container,Nav} from 'react-bootstrap';
import AddToCart from './AddToCart';
import { useState } from 'react';


const ProductPage = () => {

    const[item,setItem] = useState([]);
    const handleClick=(props)=>{
        alert(`Name: ${props.name}`+"\n"+`Price: ${props.price}`+"\n"+`Description: ${props.description}`);
        console.log(props);
        
       

    }
    const handleSubmit=(props)=>{
        setItem(()=>{
            let addItem = [...item,props];
            return addItem;
        });
    }
    return(
        <>
        <AddToCart arr={item}/>
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
                                            <button onClick={()=>handleSubmit(prod)}>AddToCart</button>
                                           
                                        </div>
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