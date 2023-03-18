import axios from 'axios';

const API = axios.create({
    // baseURL: 'https://ecodashboard-backend.onrender.com/api'
    baseURL: 'http://localhost:5000/api'
});

API.interceptors.request.use(req => {

    if (localStorage.getItem('userInfo')) {

        const token = JSON.parse(localStorage.getItem('userInfo'));

        req.headers.Authorization = `Bearer ${token.token}`;
    }
    return req;
}, err => err);

export const loginUser = (loginData) => API.post('/user/login', loginData);
export const registerUser = (registerData) => API.post('/user/register', registerData);
export const getUser = (id) => API.get(`user/getuser/${id}`);
export const updateUser = (id, updatedata) => API.put(`user/update/${id}`, updatedata);

export const getYears = () => API.get('orders/years');
export const getProducts = (pageNum) => API.get(`/products/allproducts?pageNum=${pageNum || 1}`);
export const getSingleProduct = (id) => API.get(`/products/singleproduct/${id}`);
export const updateSingleProduct = (id, updateData) => API.put(`/products/updateproduct/${id}`, updateData);
export const createProduct = (newProduct) => API.post(`/products/createproduct`, newProduct);
export const fileUpload = (uploadData) => API.post(`/createproduct/fileupload`, uploadData);
export const deleteProduct = (productID) => API.delete(`/products/deleteproduct/${productID}`);

//category
export const getCategory = () => API.get('/category/getallcategory');
export const addCategory = (data) => API.post('/category/addcategory', data);
export const deleteCategory = (id) => API.delete(`/category/deletecategory/${id}`);

//order
export const totalOrder = () => API.get('orders/totalorders');
export const getOrders = (orderDate) => API.get(`orders/getallorders?orderdate=${orderDate}`);
export const getSingleOrder = (id) => API.get(`orders/getsingleorder/${id}`);
export const totalSalesRevenue = (year) => API.get(`orders/totalsales?year=${year}`);
export const bestSellers = () => API.get('products/bestsellers');
export const MakeDelivered = (id, data) => API.put(`orders/makedeliver/${id}`, data);

//employee
export const AllEmployee = () => API.get('employee/allemployees');
export const SingleEmployee = (id) => API.get(`employee/singleemployee/${id}`);
export const addNewEmployee = (data) => API.post('employee/addnewemployee', data);
export const updateEmployee = (id,data) => API.post(`employee/updateemployee/${id}`, data);

//notification 
export const Notification = () => API.get('notification/getnotification');
export const viewNotification = () => API.post('notification/updatenotification');