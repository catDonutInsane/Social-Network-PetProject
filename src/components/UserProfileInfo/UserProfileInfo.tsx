import styles from './UserProfileInfo.module.css'
import { Link } from 'react-router-dom'

type UPIType ={
    data:{
    id:number
    name:string
    photos:{
        small:string
    }
}
}

export const UserProfileInfo:React.FC<UPIType> = ({data}) =>{

    return(
        <div className={styles.wrapper}>
            <Link to={`/user/${data.id}`}><img style={{width:"50px"}} src={data.photos.small?data.photos.small:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'} alt="img" /></Link>
            <span>{data.name}</span>
        </div>
    )
}