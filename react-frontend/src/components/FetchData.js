import axios from "axios";

export async function fetchData() {

    const id = sessionStorage.getItem('id');
    const url = `http://localhost:8080/api/v1/user/get-user/${id}`;

    try {
        return axios.get(url);
    } catch (error) {
        alert(error.message);
        return null;
    }
}