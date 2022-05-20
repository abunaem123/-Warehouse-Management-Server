import { useEffect, useState } from "react";


const UseInventory = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-coast-85356.herokuapp.com/inventories')
            .then(res => res.json())
            .then(data => setInventory(data));
    }, []);
    return [inventory, setInventory]
};

export default UseInventory;