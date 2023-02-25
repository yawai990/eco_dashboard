import axios from 'axios';

const API = axios.create({
    baseURL : 'http://localhost:5000/api'
});

API.interceptors.request.use(req =>{

    if(localStorage.getItem('userInfo')){

        const token = JSON.parse(localStorage.getItem('userInfo'));
   
        req.headers.Authorization = `Bearer ${token.token}`;
    }
    return req;
}, err => err);

export const loginUser = (loginData) => API.post('/user/login', loginData);
export const registerUser = (registerData ) => API.post('/user/register', registerData);


export const getProducts = (pageNum) => API.get(`/products/allproducts?pageNum=${pageNum || 1}`);
export const getSingleProduct = (id) => API.get(`/products/singleproduct/${id}`);
export const updateSingleProduct = ( id, updateData ) => API.put(`/products/updateproduct/${id}`, updateData);
export const createProduct = ( newProduct ) => API.post(`/products/createproduct`,newProduct);
export const fileUpload = ( uploadData ) => API.post(`/createproduct/fileupload`, uploadData) ;
export const deleteProduct = (productID) => API.delete(`/products/deleteproduct/${productID}`);

//order
export const totalOrder = () => API.get('orders/totalorders');
export const getOrders = (orderDate) => API.get(`orders/getallorders?orderdate=${orderDate}`);
export const getSingleOrder = (id) => API.get(`orders/getsingleorder/${id}`);
export const totalSalesRevenue = () => API.get('orders/totalsales');
export const bestSellers = () => API.get('products/bestsellers');
export const MakeDelivered = (id, data) => API.put(`orders/makedeliver/${id}`, data);
