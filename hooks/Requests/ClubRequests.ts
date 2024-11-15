import {Club, CreateClubInput} from "@/hooks/Types/ClubTypes";
import { useFetch } from "@/hooks/useFetch";

export const useCreateClub = () => {
    const {commonFetch, isLoading, data} = useFetch<Club>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/Club/CreateClub",
        method: "POST",
    });
    const createClub = (input: CreateClubInput) => commonFetch({input})
    return {createClub, isLoading, data}
}