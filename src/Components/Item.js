const Item = ({item, setModalOpen, setModalContent}) => {
    return (
        <div className="col-sm-6 col-md-5 col-lg-4 item">
            <div className="box">
                <img className="rounded img-fluid food-img" src={item.img} alt={item.name}/>
                <h3 className="name">{item.name}</h3>
                <div className="d-flex justify-content-around align-items-center">
                    <button onClick={() => {
                        setModalOpen(true);
                        setModalContent(item);
                    }} className="btn btn-success" type="button">
                        Add to cart
                    </button>
                    <span className="badge rounded-pill bg-danger price">${item.price}</span>
                </div>
            </div>
        </div>
    );
};

export default Item;
