import React from "react";
import Card from "./Card";
import { useState } from "react";
function Cards(props){
    let courses = props.courses;
    let category = props.category;
    const[LikedCourses,SetLikedCourse] = useState([]);

    function GetCourses(){
        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach(array =>{
                array.forEach(CoursesData =>{
                    allCourses.push(CoursesData);
                });
            });
            return allCourses;   
        }
        else{
            return courses[category];
        }
    }
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            GetCourses().map( (courses) => (
                <Card key = {courses.id} courses = {courses}
                LikedCourses = {LikedCourses}
                SetLikedCourse = {SetLikedCourse}/>
            ))
        }
        </div>
    );
}

export default Cards;
