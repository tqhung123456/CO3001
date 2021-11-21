import items from "../Items";
import Item from "./Item";
import Modal from "./Modal";

const Menu = ({menu, addItem, modalOpen, setModalOpen, modalContent, setModalContent}) => {
    return (
        <section className="features-boxed">
            {modalOpen && <Modal addItem={addItem} modalContent={modalContent} setModalOpen={setModalOpen}/>}
            <div className="container">
                <div className="row justify-content-center features">
                    {menu.map((food) => (
                        <Item modalContent={modalContent} key={food.id} item={food} addItem={addItem} setModalOpen={setModalOpen} setModalContent={setModalContent} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
