import React from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css"

const Card = (props) =>{
    let courses = props.courses;

    let LikedCourses = props.LikedCourses;
    let SetLikedCourse = props.SetLikedCourse;

    function ClickHandler(){
        if(LikedCourses.includes(courses.id)){
            SetLikedCourse((prev) => prev.filter((cid) =>(cid !== courses.id)));
            toast.warning("Like Removed")
        }
        else{
            if(LikedCourses.length === 0){
                SetLikedCourse([courses.id]);
            }
            else{
                SetLikedCourse((prev) =>[...prev,courses.id]);
            }
            toast.success("Liked SuccessFully")
        }
    }
    return(
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className="relative">
                <img src = {courses.image.url} alt="img"/>

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
                grid place-items-center">
                <button onClick={ClickHandler}>
                    {
                        LikedCourses.includes(courses.id) ? (<FcLike fontSize= "1.75rem"/>) : (<FcLikePlaceholder fontSize= "1.75rem"/>)
                    }
                </button>
            </div>
            </div>
            <div className='p-4'>
                <p className="text-white font-semibold text-lg leading-6">{courses.title}</p>
                <p className="mt-2 text-white">
                    {
                        courses.description.length > 100 ? (courses.description.substring(0,100) + "...") :
                        (courses.description)
                    }
                </p>
            </div>
        </div>
    );
}

export default Card;