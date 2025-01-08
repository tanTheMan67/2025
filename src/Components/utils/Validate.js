export const ValidateData=(Email,Password)=>{
const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(Email);
const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);
if(!isEmailValid)return "Please Enter a valid Email";
if(!isPasswordValid)return "Please Enter a valid Password";
return null;
}