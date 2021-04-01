import axios from "axios";

const getEmployee = () => {
    axios.get("https://randomuser.me/api/?results=10");
};

export default getEmployee;