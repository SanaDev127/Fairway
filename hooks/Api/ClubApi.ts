import {
    useCreateClub, useCreateUpcomingGame,
    useGetAllClubGames, useGetAllClubMembers,
    useGetClubsRecentGames,
    useGetClubUpcomingGames, useGetUsersUpcomingGames, useRsvpToGame
} from "@/hooks/Requests/ClubRequests";

export const useClubApi = () => {
    const {
        createClub,
        isLoading: createClubLoading,
        data: createClubData,
    } = useCreateClub();

    const {
        getClubsRecentGames,
        isLoading: getClubsRecentGamesLoading,
        data: getClubsRecentGamesData,
    } = useGetClubsRecentGames();

    const {
        getAllClubGames,
        isLoading: getAllClubGamesLoading,
        data: getAllClubGamesData,
    } = useGetAllClubGames();

    const {
        getClubUpcomingGames,
        isLoading: getClubUpcomingGamesLoading,
        data: getClubUpcomingGamesData,
    } = useGetClubUpcomingGames();

    const {
        getUsersUpcomingGames,
        isLoading: getUsersUpcomingGamesLoading,
        data: getUsersUpcomingGamesData,
    } = useGetUsersUpcomingGames();

    const {
        createUpcomingGame,
        isLoading: upcomingGameLoading,
        data: upcomingGamesData,
    } = useCreateUpcomingGame();

    const {
        rsvpToGame,
        isLoading: rsvpLoading,
        data: rsvpData,
    } = useRsvpToGame();

    const {
        getAllClubMembers,
        isLoading: getAllClubMembersLoading,
        data: getAllClubMembersData,
    } = useGetAllClubMembers();

    return {
        createClub: {
            mutation: createClub,
            isLoading: createClubLoading,
            data: createClubData,
        },
        getClubsRecentGames: {
            query: getClubsRecentGames,
            isLoading: getClubsRecentGamesLoading,
            data: getClubsRecentGamesData,
        },
        getAllClubGames: {
            query: getAllClubGames,
            isLoading: getAllClubGamesLoading,
            data: getAllClubGamesData,
        },
        getClubUpcomingGames: {
            query: getClubUpcomingGames,
            isLoading: getClubUpcomingGamesLoading,
            data: getClubUpcomingGamesData,
        },
        getUsersUpcomingGames: {
            query: getUsersUpcomingGames,
            isLoading: getUsersUpcomingGamesLoading,
            data: getUsersUpcomingGamesData,
        },
        createUpcomingGame: {
            mutation: createUpcomingGame,
            isLoading: upcomingGameLoading,
            data: upcomingGamesData,
        },
        rsvpToGame: {
            mutation: rsvpToGame,
            isLoading: rsvpLoading,
            data: rsvpData,
        },
        getAllClubMembers: {
            query: getAllClubMembers,
            isLoading: getAllClubMembersLoading,
            data: getAllClubMembersData,
        }
    };
};
