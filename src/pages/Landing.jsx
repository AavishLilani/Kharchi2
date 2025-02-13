import { Link } from "react-router-dom";

export const Landing=()=>{
console.log("Landing");
return(
    <div>
        
        <Link className="text-white bg-black" to={"/signin"}/>
        <Link className="text-white bg-black" to={"/signup"}/>
    </div>
)
}