import { fetchFood, fetchUser } from "../utils/fetchLocalStorageData";

const userInfo=fetchUser();
//const foodInfo=fetchFood();

export const initialState={
    user:userInfo,
    foodItems:null,

};