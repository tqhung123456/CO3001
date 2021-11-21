import "./css/styles.css";
import "./css/box.css";
import './css/button.css'
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Button from './Components/Button';
import Items from "./Items";
import Cart from "./Components/Cart";
import {useState} from "react";

const allCategories = ['All', ...new Set(Items.map(item => item.category))];

function App() {
    //modal
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(Items);

    //category button
    const [menuItem, setMenuItem] = useState(Items);
    const buttons = allCategories;

    // cart
    const [cart, setCart] = useState([]);

    // Add to cart
    const addItem = (pizza) => {
        // Check if the item exist or not
        const exist = cart.find((item) => item.id === pizza.id);
        if (exist) {
            setCart(cart.map(item => item.id === pizza.id ? {...exist, qty: exist.qty + 1} : item));
        } else {
            setCart([...cart, {...pizza, qty: 1}]);
        }
    };

    // Remove from cart
    const removeItem = (pizza) => {
        // Check if the item exist or not
        const exist = cart.find((item) => item.id === pizza.id);
        if (exist.qty === 1) {
            setCart(cart.filter((item) => item.id !== pizza.id));
        } else {
            setCart(cart.map(item => item.id === pizza.id ? {...exist, qty: exist.qty - 1} : item));
        }
    };

    //Filter Function
    const filter = (button) =>{

        if(button === 'All'){
        setMenuItem(Items);
        return;
        }

        const filteredData = Items.filter(item => item.category ===  button);
        setMenuItem(filteredData)
    }

    return (
        <div className="App">
            <div>
                <Header name="Fast Food" cart={cart.length}/>
                <Button button={buttons} filter={filter}/>
                <Menu menu={menuItem} addItem={addItem} modalOpen={modalOpen} setModalOpen={setModalOpen} modalContent={modalContent} setModalContent={setModalContent}/>
                <Cart items={cart} remove={removeItem}/>
            </div>
        </div>
    );
}

export default App;
