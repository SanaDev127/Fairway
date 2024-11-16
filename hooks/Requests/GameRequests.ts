import {useFetch} from "@/hooks/useFetch";
import {
    AcceptGameInviteInput, DetailScorecard,
    Game, GameInvite,
    GetAllUsersGamesInput, GetOngoingGameInput, GetOngoingGameScorecardInput,
    GetUserHandicapIndexInput, GetUserOngoingGamesInput,
    GetUserRecentGamesInput,
    OngoingGame, SaveGameInput, StartGameInput, UpdateOngoingGameInput
} from "@/hooks/Types/GameTypes";
import {Urls} from "@/constants/Urls"

export const useGetUserRecentGames = () => {
    const {commonFetch, isLoading, data} = useFetch<Game[]>({
        url: `${Urls.apiUrl}/api/Game/GetUserRecentGames`,
        method: "GET",
    });
    const getUserRecentGames = (input: GetUserRecentGamesInput) => commonFetch({input})
    return {getUserRecentGames, isLoading, data}
}

export const useGetAllUsersGames = () => {
    const {commonFetch, isLoading, data} = useFetch<Game[]>({
        url: `${Urls.apiUrl}/api/Game/GetAllUsersGames`,
        method: "GET",
    });
    const getAllUsersGames = (input: GetAllUsersGamesInput) => commonFetch({input})
    return {getAllUsersGames, isLoading, data}
}

export const useGetUserHandicapIndex = () => {
    const {commonFetch, isLoading, data} = useFetch<Number>({
        url: `${Urls.apiUrl}/api/Game/GetUserHandicapIndex`,
        method: "GET",
    });
    const getUserHandicapIndex = (input: GetUserHandicapIndexInput) => commonFetch({input})
    return {getUserHandicapIndex, isLoading, data}
}

export const useStartGame = () => {
    const {commonFetch, isLoading, data} = useFetch<OngoingGame>({
        url: `${Urls.apiUrl}/api/OngoingGame/StartGame`,
        method: "POST",
    });
    const startGame = (input: StartGameInput) => commonFetch({input})
    return {startGame, isLoading, data}
}

export const useAcceptGameInvite = () => {
    const {commonFetch, isLoading, data} = useFetch<GameInvite>({
        url: `${Urls.apiUrl}api/OngoingGame/AcceptGameInvite`,
        method: "POST",
    });
    const acceptGameInvite = (input: AcceptGameInviteInput) => commonFetch({input})
    return {acceptGameInvite, isLoading, data}
}

export const useGetUserOngoingGames = () => {
    const {commonFetch, isLoading, data} = useFetch<OngoingGame[]>({
        url: `${Urls.apiUrl}api/OngoingGame/GetUserOngoingGames`,
        method: "GET",
    });
    const getUserOngoingGames = (input: GetUserOngoingGamesInput) => commonFetch({input})
    return {getUserOngoingGames, isLoading, data}
}

export const useGetOngoingGame = () => {
    const {commonFetch, isLoading, data} = useFetch<OngoingGame>({
        url: `${Urls.apiUrl}/api/OngoingGame/GetOngoingGame`,
        method: "GET",
    });
    const getOngoingGame = (input: GetOngoingGameInput) => commonFetch({input})
    return {getOngoingGame, isLoading, data}
}

export const useGetOngoingGameScorecard = () => {
    const {commonFetch, isLoading, data} = useFetch<DetailScorecard>({
        url: `${Urls.apiUrl}/api/OngoingGame/GetOngoingGameScorecard`,
        method: "GET",
    });
    const getOngoingGameScorecard = (input: GetOngoingGameScorecardInput) => commonFetch({input})
    return {getOngoingGameScorecard, isLoading, data}
}

export const useUpdateOngoingGame = () => {
    const {commonFetch, isLoading, data} = useFetch<OngoingGame>({
        url: `${Urls.apiUrl}/api/OngoingGame/UpdateOngoingGame`,
        method: "PUT",
    });
    const updateOngoingGame = (input: UpdateOngoingGameInput) => commonFetch({input})
    return {updateOngoingGame, isLoading, data}
}

export const useSaveGame = () => {
    const {commonFetch, isLoading, data} = useFetch<OngoingGame>({
        url: `${Urls.apiUrl}/api/OngoingGame/SaveGame`,
        method: "POST",
    });
    const saveGame = (input: SaveGameInput) => commonFetch({input})
    return {saveGame, isLoading, data}
}