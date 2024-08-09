
import axios  from 'axios'
export async function registrationService(data)
{

 let p =  await axios.post("http://localhost:8081/api/auth/signup",data)

 return p;
}