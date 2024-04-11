import { redirect } from "react-router-dom";

const getAuthToken = () => {
 const token = localStorage.getItem('token');
 return token;
}

export default getAuthToken

export function tokenLoader(){
    return getAuthToken();
}

export function checkAuthLoader(){
    const token = getAuthToken();

    if(!token){
      return redirect('/auth');
    }

    return <>
    </>
}