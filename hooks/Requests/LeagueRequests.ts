import {useFetch} from "@/hooks/useFetch";
import {
    GenerateLeagueTableInput,
    GetAllClubLeaguesInput,
    GetAllLeagueGamesInput,
    League,
    LeagueTable
} from "@/hooks/Types/LeagueTypes";
import {Game} from "@/hooks/Types/GameTypes";

export const useGetAllClubLeagues = () => {
    const {commonFetch, isLoading, data} = useFetch<League[]>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/League/GetAllClubLeagues",
        method: "GET",
    });
    const getAllClubLeagues = (input: GetAllClubLeaguesInput) => commonFetch({input})
    return {getAllClubLeagues, isLoading, data}
}

export const useGetAllLeagueGames = () => {
    const {commonFetch, isLoading, data} = useFetch<Game[]>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/League/GetAllLeagueGames",
        method: "GET",
    });
    const getAllLeagueGames = (input: GetAllLeagueGamesInput) => commonFetch({input})
    return {getAllLeagueGames, isLoading, data}
}

export const useGenerateLeagueTable = () => {
    const {commonFetch, isLoading, data} = useFetch<LeagueTable>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/League/GenerateLeagueTable",
        method: "GET",
    });
    const generateLeagueTable = (input: GenerateLeagueTableInput) => commonFetch({input})
    return {generateLeagueTable, isLoading, data}
}