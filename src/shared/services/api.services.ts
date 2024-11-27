

import { Alert } from 'react-native';
import { store } from '../redux/store';
import { HTTP_CLIENT } from '../utils/config';
import { ENDPOINTS } from '../utils/endpoints';


export const getUsers = async (search: string ='', page :any = 1) => {
  try {
    let resp = await HTTP_CLIENT.get(
      `${ENDPOINTS.SEARCHUSER}?q=${search?search:''}&page=${page}&per_page=16`
    );
    return resp;
  } catch (error: any) {
    throw Error(error)
  }
};

export const getUser = async (uname:any) => {
  try {
    let resp = await HTTP_CLIENT.get(
      `${ENDPOINTS.USER}${uname}`
    );
    return resp;
  } catch (error: any) {
    console.error('error',error)
    throw Error(error)
  }
};
export const getFollower = async (uname:any,page:any = 1) => {

  try {
    console.log('uname --getFollower ---',uname)
    let resp = await HTTP_CLIENT.get(
      `${ENDPOINTS.USER}${uname}/followers?page=${page}&per_page=20`
    );
    return resp;
  } catch (error: any) {
    console.error('error',error)
    throw Error(error)
  }
};
export const getFollowings = async (uname:any,page:any = 1) => {

  try {
    console.log(' --getFollowings ---',uname)
    let resp = await HTTP_CLIENT.get(
      `${ENDPOINTS.USER}${uname}/following?page=${page}&per_page=20`
    );
    return resp;
  } catch (error: any) {
    console.error('error',error)
    throw Error(error)
  }
};

// export const getFollowing = async (uname:any) => {
//   try {
//     let resp = await HTTP_CLIENT.get(
//       `${ENDPOINTS.USER}${uname}/following`
//     );
//     return resp;
//   } catch (error: any) {
//     console.error('error',error)
//     throw Error(error)
//   }
// };

