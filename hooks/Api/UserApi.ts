import {
    useAcceptBuddyInvite,
    useAcceptFriendshipRequest,
    useCreateBuddyInvite,
    useCreateUser, useGetAllBuddies,
    useGetAllGameInvites, useGetAllUserClubs, useGetAllUserFriendshipRequests,
    useGetUser, useGetUserByFirebaseId
} from "@/hooks/Requests/UserRequests";

export const useUserApi = () => {
    const {
        createUser,
        isLoading: createUserLoading,
        data: createUserData,
    } = useCreateUser();

    const {
        getUser,
        isLoading: getUserLoading,
        data: getUserData,
    } = useGetUser();

    const {
        getAllGameInvites,
        isLoading: getAllGameInvitesLoading,
        data: getAllGameInvitesData,
    } = useGetAllGameInvites();

    const {
        createBuddyInvite,
        isLoading: createBuddyInviteLoading,
        data: createBuddyInviteData,
    } = useCreateBuddyInvite();

    const {
        acceptBuddyInvite,
        isLoading: acceptBuddyInviteLoading,
        data: acceptBuddyInviteData,
    } = useAcceptBuddyInvite();

    const {
        acceptFriendshipRequest,
        isLoading: acceptFriendshipRequestLoading,
        data: acceptFriendshipRequestData,
    } = useAcceptFriendshipRequest();

    const {
        getAllBuddies,
        isLoading: getAllBuddiesLoading,
        data: getAllBuddiesData,
    } = useGetAllBuddies();

    const {
        getUserByFirebaseId,
        isLoading: getUserByFirebaseIdLoading,
        data: getUserByFirebaseIdData,
    } = useGetUserByFirebaseId();

    const {
        getAllUserFriendshipRequests,
        isLoading: getAllUserFriendshipRequestsLoading,
        data: getAllUserFriendshipRequestsData,
    } = useGetAllUserFriendshipRequests();

    const {
        getAllUserClubs,
        isLoading: getAllUserClubsLoading,
        data: getAllUserClubsData,
    } = useGetAllUserClubs()

    return {
        createUser: {
            mutation: createUser,
            isLoading: createUserLoading,
            data: createUserData,
        },
        getUser: {
            query: getUser,
            isLoading: getUserLoading,
            data: getUserData,
        },
        getAllGameInvites: {
            query: getAllGameInvites,
            isLoading: getAllGameInvitesLoading,
            data: getAllGameInvitesData,
        },
        createBuddyInvite: {
            mutation: createBuddyInvite,
            isLoading: createBuddyInviteLoading,
            data: createBuddyInviteData,
        },
        acceptBuddyInvite: {
            mutation: acceptBuddyInvite,
            isLoading: acceptBuddyInviteLoading,
            data: acceptBuddyInviteData,
        },
        acceptFriendshipRequest: {
            mutation: acceptFriendshipRequest,
            isLoading: acceptFriendshipRequestLoading,
            data: acceptFriendshipRequestData,
        },
        getAllBuddies: {
            query: getAllBuddies,
            isLoading: getAllBuddiesLoading,
            data: getAllBuddiesData,
        },
        getUserByFirebaseId: {
            query: getUserByFirebaseId,
            isLoading: getUserByFirebaseIdLoading,
            data: getUserByFirebaseIdData,
        },
        getAllUserFriendshipRequests: {
            query: getAllUserFriendshipRequests,
            isLoading: getAllUserFriendshipRequestsLoading,
            data: getAllUserFriendshipRequestsData,
        },
        getAllUserClubs: {
            query: getAllUserClubs,
            isLoading: getAllUserClubsLoading,
            data: getAllUserClubsData,
        }
    }
};