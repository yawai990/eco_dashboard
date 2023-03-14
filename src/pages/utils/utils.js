import axios from 'axios';
import * as api from '../../api';

export const uploadImageCloudinary = async(img) =>{
    const url = 'https://api.cloudinary.com/v1_1/dtcws1ecu/image/upload';

    const formData = new FormData();

    formData.append('file',img);
    formData.append('upload_preset',"ecommerceV2");

  return await axios.post(url,formData)
    .then((resp) =>resp)
    .catch(err =>err)
};

export const uploadImageCloudFromEmploye = async(img)=>{
  const url = 'https://api.cloudinary.com/v1_1/dtcws1ecu/image/upload';

  const formData = new FormData();

  formData.append('file',img);
  formData.append('upload_preset',"employee");

return await axios.post(url,formData)
  .then((resp) =>resp)
  .catch(err =>err)
}
