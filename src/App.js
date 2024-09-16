import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards"
import { apiUrl, filterData } from "./data";
import { useState } from "react";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";

const App = () => {
const[courses, SetCourses] = useState([]);
const [loading,setLoading] = useState(true);
const[category,SetCategory] = useState(filterData[0].title)

  async function FetchData(){
    setLoading(true);
    try{  
      let Data = await fetch(apiUrl);
      let response = await Data.json();
      SetCourses(response.data);
    }
    catch(error){
      toast.error("Connection Problem");
    }
    setLoading(false);
  }

  useEffect(() =>{
    FetchData();
  },[]);

  return(
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div className="bg-bgDark2">

      <div>
        <Filter  filterData = {filterData}
        category= {category}
        SetCategory = {SetCategory}/>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center min-h-[50vh]">{
        loading ? (<Spinner/>) : (<Cards courses = {courses} category = {category}/>)
        }
      </div>

      </div>
    </div> 
  );
};

export default App;
