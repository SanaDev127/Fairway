import {
    Club,
    CreateClubInput, CreateUpcomingGameInput, GetAllClubMembersInput,
    GetAllClubsGamesInput,
    GetClubsRecentGamesInput,
    GetClubUpcomingGamesInput, GetUsersUpcomingGamesInput, RsvpToGameInput
} from "@/hooks/Types/ClubTypes";
import { useFetch } from "@/hooks/useFetch";
import {Game, UpcomingGame} from "@/hooks/Types/GameTypes";
import {User} from "@/hooks/Types/UserTypes";
import {Urls} from "@/constants/Urls";

export const useCreateClub = () => {
    const {commonFetch, isLoading, data} = useFetch<Club>({
        url: `${Urls.apiUrl}/api/Club/CreateClub`,
        method: "POST",
    });
    const createClub = (input: CreateClubInput) => commonFetch({input})
    return {createClub, isLoading, data}
}

export const useGetClubsRecentGames = () => {
    const {commonFetch, isLoading, data} = useFetch<Game[]>({
        url: `${Urls.apiUrl}/api/Club/GetClubsRecentGames`,
        method: "POST",
    });
    const getClubsRecentGames = (input: GetClubsRecentGamesInput) => commonFetch({input})
    return {getClubsRecentGames, isLoading, data}
}

export const useGetAllClubGames = () => {
    const {commonFetch, isLoading, data} = useFetch<Game[]>({
        url: `${Urls.apiUrl}/api/Club/GetAllClubGames`,
        method: "POST",
    });
    const getAllClubGames = (input: GetAllClubsGamesInput) => commonFetch({input})
    return {getAllClubGames, isLoading, data}
}

export const useGetClubUpcomingGames = () => {
    const {commonFetch, isLoading, data} = useFetch<UpcomingGame[]>({
        url: `${Urls.apiUrl}/api/Club/GetClubUpcomingGames`,
        method: "POST",
    });
    const getClubUpcomingGames = (input: GetClubUpcomingGamesInput) => commonFetch({input})
    return {getClubUpcomingGames, isLoading, data}
}

export const useGetUsersUpcomingGames = () => {
    const {commonFetch, isLoading, data} = useFetch<UpcomingGame[]>({
        url: `${Urls.apiUrl}/api/Club/GetUsersUpcomingGames`,
        method: "POST",
    });
    const getUsersUpcomingGames = (input: GetUsersUpcomingGamesInput) => commonFetch({input})
    return {getUsersUpcomingGames, isLoading, data}
}

export const useCreateUpcomingGame = () => {
    const {commonFetch, isLoading, data} = useFetch<UpcomingGame>({
        url: `${Urls.apiUrl}/api/Club/CreateUpcomingGame`,
        method: "POST",
    });
    const createUpcomingGame = (input: CreateUpcomingGameInput) => commonFetch({input})
    return {createUpcomingGame, isLoading, data}
}

export const useRsvpToGame = () => {
    const {commonFetch, isLoading, data} = useFetch<UpcomingGame>({
        url: `${Urls.apiUrl}/api/Club/RsvpToGame`,
        method: "PUT",
    });
    const rsvpToGame = (input: RsvpToGameInput) => commonFetch({input})
    return {rsvpToGame, isLoading, data}
}

export const useGetAllClubMembers = () => {
    const {commonFetch, isLoading, data} = useFetch<User[]>({
        url: `${Urls.apiUrl}/api/Club/GetAllClubMembers`,
        method: "POST",
    });
    const getAllClubMembers = (input: GetAllClubMembersInput) => commonFetch({input})
    return {getAllClubMembers, isLoading, data}
}

