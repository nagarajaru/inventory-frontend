import { instance, protectedInstance } from "./instance";

// define the user services
const userServices = {
    // register a user
    register: async (name, email, password) => {
        // make a POST request to the server
        return await instance.post('https://management-1-8wua.onrender.com/api/v1/users/register', {
            name,
            email,
            password
        });
    },
    // login a user
    login: async (email, password) => {
        // make a POST request to the server
        return await instance.post('https://management-1-8wua.onrender.com/api/v1/users/login', {
            email,
            password
        }, {
            withCredentials: true
        });
    },
    // get the user
    getUser: async () => {
        // make a GET request to the server
        return await protectedInstance.get('https://management-1-8wua.onrender.com/api/v1/users/profile');
    },
    checkAuth: async () => {
        return await protectedInstance.get('https://management-1-8wua.onrender.com/api/v1/users/checkAuth');
    },
    logout: async () => {
        return await protectedInstance.get('https://management-1-8wua.onrender.com/api/v1/users/logout');
    }
}

export default userServices;