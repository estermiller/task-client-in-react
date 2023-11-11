import axios from "axios";

export default function getGeographybyAdress(user) {
    console.log("servise");
    return axios.get(`https://jsonplaceholder.typicode.com/users?username=${user.userName}&email=${user.EmailAddress}`)
}