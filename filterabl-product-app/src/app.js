import { PureComponent } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './about';
import Home from './home';
import Products from './products';

class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Asosiy</Link>
                        </li>
                        <li>
                            <Link to="/products">Maxsulotlar</Link>
                        </li>
                        <li>
                            <Link to="/about">Biz haqimizda</Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/products" element={<Products />} />
                        <Route exact path="/about" element={<About />} />
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }

}

export default App;