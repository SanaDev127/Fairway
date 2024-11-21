import {
    useAcceptGameInvite,
    useGetAllUsersGames, useGetOngoingGame, useGetOngoingGameScorecard,
    useGetUserHandicapIndex, useGetUserOngoingGames,
    useGetUserRecentGames, useSaveGame,
    useStartGame, useUpdateOngoingGame
} from "@/hooks/Requests/GameRequests";

export const useGameApi = () => {
    const {
        getUserRecentGames,
        isLoading: getUserRecentGamesLoading,
        data: getUserRecentGamesData
    } = useGetUserRecentGames();

    const {
        getAllUsersGames,
        isLoading: getAllUsersGamesLoading,
        data: getAllUsersGamesData
    } = useGetAllUsersGames();

    const {
        getUserHandicapIndex,
        isLoading: getUserHandicapIndexLoading,
        data: getUserHandicapIndexData
    } = useGetUserHandicapIndex();

    const {
        startGame,
        isLoading: startGameLoading,
        data: startGameData
    } = useStartGame();

    const {
        acceptGameInvite,
        isLoading: acceptGameInviteLoading,
        data: acceptGameInviteData
    } = useAcceptGameInvite();

    const {
        getUserOngoingGames,
        isLoading: getUserOngoingGamesLoading,
        data: getUserOngoingGamesData
    } = useGetUserOngoingGames();

    const {
        getOngoingGame,
        isLoading: getOngoingGameLoading,
        data: getOngoingGameData
    } = useGetOngoingGame();

    const {
        getOngoingGameScorecard,
        isLoading: getOngoingGameScorecardLoading,
        data: getOngoingGameScorecardData
    } = useGetOngoingGameScorecard();

    const {
        updateOngoingGame,
        isLoading: updateOngoingGameLoading,
        data: updateOngoingGameData
    } = useUpdateOngoingGame();

    const {
        saveGame,
        isLoading: saveGameLoading,
        data: saveGameData
    } = useSaveGame();

    return {
        getUserRecentGames: {
            query: getUserRecentGames,
            isLoading: getUserRecentGamesLoading,
            data: getUserRecentGamesData
        },
        getAllUsersGames: {
            query: getAllUsersGames,
            isLoading: getAllUsersGamesLoading,
            data: getAllUsersGamesData
        },
        getUserHandicapIndex: {
            query: getUserHandicapIndex,
            isLoading: getUserHandicapIndexLoading,
            data: getUserHandicapIndexData
        },
        startGame: {
            mutation: startGame,
            isLoading: startGameLoading,
            data: startGameData
        },
        acceptGameInvite: {
            mutation: acceptGameInvite,
            isLoading: acceptGameInviteLoading,
            data: acceptGameInviteData
        },
        getUserOngoingGames: {
            query: getUserOngoingGames,
            isLoading: getUserOngoingGamesLoading,
            data: getUserOngoingGamesData
        },
        getOngoingGame: {
            query: getOngoingGame,
            isLoading: getOngoingGameLoading,
            data: getOngoingGameData
        },
        getOngoingGameScorecard: {
            query: getOngoingGameScorecard,
            isLoading: getOngoingGameScorecardLoading,
            data: getOngoingGameScorecardData
        },
        updateOngoingGame: {
            mutation: updateOngoingGame,
            isLoading: updateOngoingGameLoading,
            data: updateOngoingGameData
        },
        saveGame: {
            mutation: saveGame,
            isLoading: saveGameLoading,
            data: saveGameData
        }
    }
};