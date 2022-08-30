import React, { PureComponent } from 'react';
class SearchBar extends PureComponent {

    handleFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInstockChange = (e) => {
        this.props.onInStockChange(e.target.value);
    }

    render() {
        return (

            <div>
                <input
                    type="text"
                    placeholder="Izlash.."
                    value={this.props.inputText}
                    onChange={this.handleFilterTextChange} />
                <p>
                    <input
                        type="checkbox"
                        id="onlyInStock"
                        name="onlyInStock"
                        checked={this.props.inStockOnly}
                        onChange={this.handleInstockChange} />
                    <label htmlFor="onlyInStock"> Faqat omborda mavjud bo'lgan maxsulotlar</label>
                </p>
            </div>
        );
    }
}

export default SearchBar;
