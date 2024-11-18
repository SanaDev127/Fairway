import {Course, GetCourseInput} from "@/hooks/Types/CourseTypes";
import { useFetch } from "../useFetch";
import {Urls} from "@/constants/Urls"

export const useGetAllCourses = () => {
    // Must change url when api is hosted
    const {commonFetch, isLoading, data } = useFetch<Course[]>({
        url: `${Urls.apiUrl}/api/Course/GetAllCourses`,
        method: "POST",
    });

    const getAllCourses = () => commonFetch({})

    return { getAllCourses, isLoading, data}
};

export const useGetCourse = () => {
   
    const { commonFetch, isLoading, data } = useFetch<Course>({
        url: `${Urls.apiUrl}/api/Course/GetCourse`,
        method: "POST",
    });

    const getCourse = (input: GetCourseInput) => commonFetch({ input })

    return { getCourse, isLoading, data };

}

// Don't have this endpoint yet
export const useCreateCourse =() => {
     const { commonFetch, isLoading, data } = useFetch<Course>({
        url: `${Urls.apiUrl}/Course/CreateCourse`,
        method: "POST",
     });

     const createCourse = (input: Course) => commonFetch({ input })

     return { createCourse, isLoading, data };
}

