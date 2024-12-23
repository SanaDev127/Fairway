
import {useFetch} from "@/hooks/useFetch";
import {
    AcceptBuddyInviteInput, AcceptFriendshipRequestInput,
    BuddyInvite,
    CreateBuddyInviteInput,
    CreateUserInput, FriendshipRequest, GetAllBuddiesInput,
    GetAllGameInvitesInput, GetAllUserFriendshipRequestsInput, GetUserByFirebaseIdInput,
    GetUserInput,
    User
} from "@/hooks/Types/UserTypes";
import {GameInvite} from "@/hooks/Types/GameTypes";
import {Urls} from "@/constants/Urls"
import {Club, GetAllUserClubsInput} from "@/hooks/Types/ClubTypes";

export const useCreateUser = () => {
    const {commonFetch, isLoading, data} = useFetch<User>({
        url: `${Urls.apiUrl}/api/User/CreateUser`,
        method: "POST",
    });
    const createUser = (input: CreateUserInput) => commonFetch({input})
    return {createUser, isLoading, data}
}

export const useGetUser = () => {
    const {commonFetch, isLoading, data} = useFetch<User>({
        url: `${Urls.apiUrl}/api/User/GetUser`,
        method: "POST",
    });
    const getUser = (input: GetUserInput) => commonFetch({input})
    return {getUser, isLoading, data}
}

export const useGetAllGameInvites = () => {
    const {commonFetch, isLoading, data} = useFetch<GameInvite[]>({
        url: `${Urls.apiUrl}/api/User/GetAllGameInvites`,
        method: "POST",
    });
    const getAllGameInvites = (input: GetAllGameInvitesInput) => commonFetch({input})
    return {getAllGameInvites, isLoading, data}
}

export const useCreateBuddyInvite = () => {
    const {commonFetch, isLoading, data} = useFetch<BuddyInvite>({
        url: `${Urls.apiUrl}/api/User/CreateBuddyInvite`,
        method: "POST",
    });
    const createBuddyInvite = (input: CreateBuddyInviteInput) => commonFetch({input})
    return {createBuddyInvite, isLoading, data}
}

export const useAcceptBuddyInvite = () => {
    const {commonFetch, isLoading, data} = useFetch<BuddyInvite>({
        url: `${Urls.apiUrl}/api/User/AcceptBuddyInvite`,
        method: "POST",
    });
    const acceptBuddyInvite = (input: AcceptBuddyInviteInput) => commonFetch({input})
    return {acceptBuddyInvite, isLoading, data}
}

export const useAcceptFriendshipRequest = () => {
    const {commonFetch, isLoading, data} = useFetch<FriendshipRequest>({
        url: `${Urls.apiUrl}/api/User/AcceptFriendshipRequest`,
        method: "POST",
    });
    const acceptFriendshipRequest = (input: AcceptFriendshipRequestInput) => commonFetch({input})
    return {acceptFriendshipRequest, isLoading, data}
}

export const useGetAllBuddies = () => {
    const {commonFetch, isLoading, data} = useFetch<User[]>({
        url: `${Urls.apiUrl}/api/User/GetAllBuddies`,
        method: "POST",
    });
    const getAllBuddies = (input: GetAllBuddiesInput) => commonFetch({input})
    return {getAllBuddies, isLoading, data}
}

export const useGetUserByFirebaseId = () => {
    const {commonFetch, isLoading, data} = useFetch<User>({
        url: `${Urls.apiUrl}/api/User/GetUserByFirebaseId`,
        method: "POST",
    });
    const getUserByFirebaseId = (input: GetUserByFirebaseIdInput) => commonFetch({input})
    return {getUserByFirebaseId, isLoading, data}
}

export const useGetAllUserFriendshipRequests = () => {
    const {commonFetch, isLoading, data} = useFetch<FriendshipRequest[]>({
        url: `${Urls.apiUrl}/User/GetAllUserFriendshipRequests`,
        method: "POST",
    });
    const getAllUserFriendshipRequests = (input: GetAllUserFriendshipRequestsInput) => commonFetch({input})
    return {getAllUserFriendshipRequests, isLoading, data}
}

export const useGetAllUserClubs = () => {
    const {commonFetch, isLoading, data} = useFetch<Club[]>({
        url: `${Urls.apiUrl}/api/User/GetAllUserClubs`,
        method: "POST",
    });
    const getAllUserClubs = (input: GetAllUserClubsInput) => commonFetch({input})
    return {getAllUserClubs, isLoading, data}
}