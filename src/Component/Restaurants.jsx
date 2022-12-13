import { useEffect, useState } from "react";
import LoadingIndicator from './LoadingIndicator'
import Pagination from "./Pagination";
import RestaurantCard from "./RestaurantCard";
import styled from "./Restaurants.module.css"
function Restaurants() {
  const [data, setData] = useState();
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState(null)
  const [pages, setpages] = useState(1)


  useEffect(() => {
    async function getData() {
      const actualData = await fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=1`
      ).then(response => response.json());
  
      setData(actualData.data) 
      setloading(false)
    }
    getData()
  }, [])

  const handlebtn=(type)=>{
    if(type === "1"){
       setpages(1)
    }
    if(type === "2"){
      setpages(2)
    }

  }

  console.log(data)
  
   if(loading) return <LoadingIndicator />;
  else return (
    <div>
      <h1 data-testid="restaurants-header" className={styled.heading}>Restaurants List</h1>
      <div data-testid="restaurants-container" className={styled.cardCon}>
       {/* Restaurant Card */}
       {data.map((res)=>(
        <RestaurantCard {...res}/>
       ))}

      </div>
      <div>
        {/* Pagination Component */}
       <Pagination/>
      </div>
    </div>
  );
}

export default Restaurants;
