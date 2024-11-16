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

export const useCreateClub = () => {
    const {commonFetch, isLoading, data} = useFetch<Club>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/Club/CreateClub",
        method: "POST",
    });
    const createClub = (input: CreateClubInput) => commonFetch({input})
    return {createClub, isLoading, data}
}

export const useGetClubsRecentGames = () => {
    const {commonFetch, isLoading, data} = useFetch<Game[]>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/Club/GetClubsRecentGames",
        method: "GET",
    });
    const getClubsRecentGames = (input: GetClubsRecentGamesInput) => commonFetch({input})
    return {getClubsRecentGames, isLoading, data}
}

export const useGetAllClubGames = () => {
    const {commonFetch, isLoading, data} = useFetch<Game[]>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/Club/GetAllClubGames",
        method: "GET",
    });
    const getAllClubGames = (input: GetAllClubsGamesInput) => commonFetch({input})
    return {getAllClubGames, isLoading, data}
}

export const useGetClubUpcomingGames = () => {
    const {commonFetch, isLoading, data} = useFetch<UpcomingGame[]>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/Club/GetClubUpcomingGames",
        method: "GET",
    });
    const getClubUpcomingGames = (input: GetClubUpcomingGamesInput) => commonFetch({input})
    return {getClubUpcomingGames, isLoading, data}
}

export const useGetUsersUpcomingGames = () => {
    const {commonFetch, isLoading, data} = useFetch<UpcomingGame[]>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/Club/GetUsersUpcomingGames",
        method: "GET",
    });
    const getUsersUpcomingGames = (input: GetUsersUpcomingGamesInput) => commonFetch({input})
    return {getUsersUpcomingGames, isLoading, data}
}

export const useCreateUpcomingGame = () => {
    const {commonFetch, isLoading, data} = useFetch<UpcomingGame>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/Club/CreateUpcomingGame",
        method: "POST",
    });
    const createUpcomingGame = (input: CreateUpcomingGameInput) => commonFetch({input})
    return {createUpcomingGame, isLoading, data}
}

export const useRsvpToGame = () => {
    const {commonFetch, isLoading, data} = useFetch<UpcomingGame>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/Club/RsvpToGame",
        method: "PUT",
    });
    const rsvpToGame = (input: RsvpToGameInput) => commonFetch({input})
    return {rsvpToGame, isLoading, data}
}

export const useGetAllClubMembers = () => {
    const {commonFetch, isLoading, data} = useFetch<User[]>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/Club/GetAllClubMembers",
        method: "GET",
    });
    const getAllClubMembers = (input: GetAllClubMembersInput) => commonFetch({input})
    return {getAllClubMembers, isLoading, data}
}