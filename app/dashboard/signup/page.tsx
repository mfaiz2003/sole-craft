import userData from "../signup.json";


export default function Signup(){ 
    return( 
        <>
            <h1>welocme to the real world</h1> 
            <h1>{userData.users.name}</h1>
            <h5>{userData.users.age}</h5>
            <p>{userData.users.address}</p>   
        </>
    ); 
}