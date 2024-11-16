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

export const useCreateUser = () => {
    const {commonFetch, isLoading, data} = useFetch<User>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/User/CreateUser",
        method: "POST",
    });
    const createUser = (input: CreateUserInput) => commonFetch({input})
    return {createUser, isLoading, data}
}

export const useGetUser = () => {
    const {commonFetch, isLoading, data} = useFetch<User>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/User/GetUser",
        method: "GET",
    });
    const getUser = (input: GetUserInput) => commonFetch({input})
    return {getUser, isLoading, data}
}

export const useGetAllGameInvites = () => {
    const {commonFetch, isLoading, data} = useFetch<GameInvite[]>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/User/GetAllGameInvites",
        method: "GET",
    });
    const getAllGameInvites = (input: GetAllGameInvitesInput) => commonFetch({input})
    return {getAllGameInvites, isLoading, data}
}

export const useCreateBuddyInvite = () => {
    const {commonFetch, isLoading, data} = useFetch<BuddyInvite>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/User/CreateBuddyInvite",
        method: "POST",
    });
    const createBuddyInvite = (input: CreateBuddyInviteInput) => commonFetch({input})
    return {createBuddyInvite, isLoading, data}
}

export const useAcceptBuddyInvite = () => {
    const {commonFetch, isLoading, data} = useFetch<BuddyInvite>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/User/AcceptBuddyInvite",
        method: "POST",
    });
    const acceptBuddyInvite = (input: AcceptBuddyInviteInput) => commonFetch({input})
    return {acceptBuddyInvite, isLoading, data}
}

export const useAcceptFriendshipRequest = () => {
    const {commonFetch, isLoading, data} = useFetch<FriendshipRequest>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/User/AcceptFriendshipRequest",
        method: "POST",
    });
    const acceptFriendshipRequest = (input: AcceptFriendshipRequestInput) => commonFetch({input})
    return {acceptFriendshipRequest, isLoading, data}
}

export const useGetAllBuddies = () => {
    const {commonFetch, isLoading, data} = useFetch<User[]>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/User/GetAllBuddies",
        method: "GET",
    });
    const getAllBuddies = (input: GetAllBuddiesInput) => commonFetch({input})
    return {getAllBuddies, isLoading, data}
}

export const useGetUserByFirebaseId = () => {
    const {commonFetch, isLoading, data} = useFetch<User>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/User/GetUserByFirebaseId",
        method: "GET",
    });
    const getUserByFirebaseId = (input: GetUserByFirebaseIdInput) => commonFetch({input})
    return {getUserByFirebaseId, isLoading, data}
}

export const useGetAllUserFriendshipRequests = () => {
    const {commonFetch, isLoading, data} = useFetch<FriendshipRequest[]>({
        url: "https://af20-105-184-166-184.ngrok-free.app/api/User/GetAllUserFriendshipRequests",
        method: "GET",
    });
    const getAllUserFriendshipRequests = (input: GetAllUserFriendshipRequestsInput) => commonFetch({input})
    return {getAllUserFriendshipRequests, isLoading, data}
}