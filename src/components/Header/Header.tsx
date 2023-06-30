import React from "react";
import style from './Header.module.css'
import {Button} from 'antd'
import { Link } from "react-router-dom";


export const Header:React.FC = () =>{

    return(
        <div className={style.wrapper}>
            <span>Тестоый аккаунт: Email: free@samuraijs.com Password: free</span>
         <Link to={'/login'}> <Button  type="primary">Log in</Button></Link>  
        </div>
    )
}