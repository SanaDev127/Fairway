import {useGenerateLeagueTable, useGetAllClubLeagues, useGetAllLeagueGames} from "@/hooks/Requests/LeagueRequests";

export const useLeagueApi = () => {
    const{
        getAllClubLeagues,
        isLoading: getAllClubLeaguesLoading,
        data: getAllClubLeaguesData,
    } = useGetAllClubLeagues();

    const {
        getAllLeagueGames,
        isLoading: getAllLeagueGamesLoading,
        data: getAllLeagueGamesData,
    } = useGetAllLeagueGames();

    const {
        generateLeagueTable,
        isLoading: generateLeagueTableLoading,
        data: generateLeagueTableData,
    } = useGenerateLeagueTable();

    return {
        getAllClubLeagues: {
            query: getAllClubLeagues,
            isLoading: getAllClubLeaguesLoading,
            data: getAllClubLeaguesData,
        },
        getAllLeagueGames: {
            query: getAllLeagueGames,
            isLoading: getAllLeagueGamesLoading,
            data: getAllLeagueGamesData,
        },
        generateLeagueTable: {
            query: generateLeagueTable,
            isLoading: generateLeagueTableLoading,
            data: generateLeagueTableData,
        }

    };

}