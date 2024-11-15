import {Course, GetCourseInput} from "@/hooks/Types/CourseTypes";
import { useFetch } from "../useFetch";

export const useGetAllCourses = () => {
    // Must change url when api is hosted
    const {commonFetch, isLoading, data } = useFetch<Course[]>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/Course/GetAllCourses",
        method: "GET",
    });

    const getAllCourses = () => commonFetch({})

    return { getAllCourses, isLoading, data}
};

export const useGetCourse = () => {
   
    const { commonFetch, isLoading, data } = useFetch<Course>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/Course/GetCourse",
        method: "GET",
    });

    const getCourse = (input: GetCourseInput) => commonFetch({ input })

    return { getCourse, isLoading, data };

}

// Don't have this endpoint yet
export const useCreateCourse =() => {
     const { commonFetch, isLoading, data } = useFetch<Course>({
        url: "https://localhost:7047/api/Course/CreateCourse",
        method: "POST",
     });

     const createCourse = (input: Course) => commonFetch({ input })

     return { createCourse, isLoading, data };
}

