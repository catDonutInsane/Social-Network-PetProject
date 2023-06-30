type contactsType = {
    facebook: string;
    website: string;
    vk: string;
    twitter: string;
    instagram: string;
    mainLink: string;
    youtube: string;
  };
  type photosType = { small: string; large: string }
 export  interface singleUserType{
    aboutMe?: string
    contacts?: contactsType
    fullName?: string;
    lookingForAJob?: boolean;
    lookingForAJobDescription?: string;
    photos?: photosType;
    userId?: number;
  };
  
 export  type initialStateType = {
    email: string|null ;
    id: number |null;
    login: string |null;
    isAuth: boolean;
    userData: any;
    messages: any;
    singleUserData: singleUserType;
  };
  export type authResponseType = {
    id: number;
    email: string;
    login: string;
  };