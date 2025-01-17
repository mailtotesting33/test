


import { HTTP_CLIENT } from '../utils/config';
import { ENDPOINTS } from '../utils/endpoints';


export const loginApi = async (username: any , password :any ) => {
  try {
    let resp = await HTTP_CLIENT.post(
      `${ENDPOINTS.LOGIN}`,
      {
        "username": username,
        "password": password
      }
    );
    return resp;
  } catch (error: any) {
   console.log("errorerror",error)
  }
};

