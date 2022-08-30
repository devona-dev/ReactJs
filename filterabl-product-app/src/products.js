import React, { PureComponent } from 'react';
import FilterableProductsTable from './FilterableProductsTable'
const API_URL = 'http://www.amock.io/api/vd/products';

class Products extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            isLoading: true
        };
    }
    
    render() { 
        if(this.state.isLoading) {
            return <p>Iltimos, sabr qiling. Ma'lumot yuklanyapti...</p>
        }
        else {
            return (<FilterableProductsTable products={this.state.products}/>)
        }
    }

    componentDidMount() {  // bu component render qilib bolingandan keyin ishga tushadi
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                let jsonData = eval('(' + data + ')'); // eslint-disable-line 
                this.setState({ products: jsonData, isLoading: false })
            })
            .catch(error =>  {
                this.setState({error, isLoading: false})
            });
    }

}
 
export default Products;