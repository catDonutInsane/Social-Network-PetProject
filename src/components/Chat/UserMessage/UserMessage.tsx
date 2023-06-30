import { memo } from "react"

type messageType ={
    userName:string
    message:string

    
}
 const UserMessage:React.FC<messageType> = memo(({userName,message}) =>{
    
    return(
        <div style={{borderBottom:"2px solid lightgrey"}}>
            
            {userName}
            {/* <img src={props.photo} alt="" /> */}
            <p>{message} </p>
        </div>
    )
})
export default UserMessage