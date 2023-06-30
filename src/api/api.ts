import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials:true,
    headers: {"API-KEY": "b27fb751-498e-44a4-8886-19d91dedf081"}
  });

  export const userAPI = {
    authMe(){
        return instance.get('/auth/me')
    },
    
    getUserByID(id:number|null){
        return instance.get(`/profile/${id}`)
    },
    logOut(){
      return instance.delete(`/auth/login`)
  },
  logIn(email:string, password:string, rememberMe:boolean){
    return instance.post(`/auth/login`,{email, password, rememberMe})
},

   getUsers(current:number,pageSize:number){
    return instance.get(`/users?page=${current}&count=${pageSize}`)
}

  }