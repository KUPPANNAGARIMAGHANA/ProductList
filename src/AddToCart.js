import React from "react";
import { CartProvider } from "react-use-cart";

class AddToCart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            l:[{name:"",price:"",type:""}]
        }
    }
    componentDidMount(){
        this.setState({l:this.props.arr})
    }
    render(){
        const arr=this.props.arr;
        return(
            <>
            <h3>Cart</h3>
            <table className="CartTable" border={1} cellPadding={15} cellSpacing={15}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map(i=>{
                        return(
                            <tr key={i.id}>
                                <td>{i.name}</td>
                                <td>{i.price}</td>
                                <td>{i.description}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            </>
        );
    }
}

export default AddToCart;