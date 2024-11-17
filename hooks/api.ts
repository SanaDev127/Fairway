
import { useGetCourse, useGetAllCourses, useCreateCourse } from "./Requests/CourseRequests"





// For ongoing games. Ongoing game doesn't sound as good as active game
export const useActiveGameApi = () => {};

export const useCourseApi = () => {
    const {
        getCourse,
        isLoading: getCourseLoading,
        data: getCourseData,
    } = useGetCourse();

    const {
        getAllCourses,
        isLoading: getAllCoursesLoading,
        data: getAllCoursesData,
    } = useGetAllCourses();

    const {
        createCourse,
        isLoading: createCourseLoading,
        data: createCourseData,
    } = useCreateCourse();

    return {
        getCourse: {
            query: getCourse,
            isLoading: getCourseLoading,
            data: getCourseData,
        },
        getCourses: {
            query: getAllCourses,
            isLoading: getAllCoursesLoading,
            data: getAllCoursesData,
        },
        createCourse: {
            mutation: createCourse,
            isLoading: createCourseLoading,
            data: createCourseData,
        },
    };
};


