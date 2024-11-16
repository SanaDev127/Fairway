import {useFetch} from "@/hooks/useFetch";
import {
    GenerateLeagueTableInput,
    GetAllClubLeaguesInput,
    GetAllLeagueGamesInput,
    League,
    LeagueTable
} from "@/hooks/Types/LeagueTypes";
import {Game} from "@/hooks/Types/GameTypes";
import {Urls} from "@/constants/Urls";

export const useGetAllClubLeagues = () => {
    const {commonFetch, isLoading, data} = useFetch<League[]>({
        url: `${Urls.apiUrl}/api/League/GetAllClubLeagues`,
        method: "GET",
    });
    const getAllClubLeagues = (input: GetAllClubLeaguesInput) => commonFetch({input})
    return {getAllClubLeagues, isLoading, data}
}

export const useGetAllLeagueGames = () => {
    const {commonFetch, isLoading, data} = useFetch<Game[]>({
        url: `${Urls.apiUrl}/api/League/GetAllLeagueGames`,
        method: "GET",
    });
    const getAllLeagueGames = (input: GetAllLeagueGamesInput) => commonFetch({input})
    return {getAllLeagueGames, isLoading, data}
}

export const useGenerateLeagueTable = () => {
    const {commonFetch, isLoading, data} = useFetch<LeagueTable>({
        url: `${Urls.apiUrl}/api/League/GenerateLeagueTable`,
        method: "GET",
    });
    const generateLeagueTable = (input: GenerateLeagueTableInput) => commonFetch({input})
    return {generateLeagueTable, isLoading, data}
}