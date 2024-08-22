import { protectedInstance } from "./instance";

const productServices = {
    addProduct: async (product, image) => {

        const formData = new FormData();
        formData.append('image', image);

        return await protectedInstance.post('/products', product, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    viewProducts: async () => {
        return await protectedInstance.get('http://localhost:3001/api/v1/products');
    }
}

export default productServices;