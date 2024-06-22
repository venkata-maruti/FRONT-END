import { useContext } from "react"
import { Store } from "../App"
export const  Child = () => {
    const [data, setData, abc] = useContext(Store)
return(
    <>
    <h1> Child component {data} </h1>
    <button onClick={()=> setData(data+1)}> add Counter {abc}</button>
    </>
)
}