import { PlayerScorecard } from "./GameTypes";

export type User = {
    id: string,
    userID: string,
    password?: string,
    clubs: string[],
    name: string,
    email: string,
    games: string[],
    homeClub: string,
    activeGames: string[],
    friends: string[]
}

export type BuddyInvite = {
    id?: string,
    sender?: string,
    //dateCreated: Date,
    identifier?: string,
    url?: string,
    used?: boolean
}

export type FriendshipRequest = {
    id?: string,
    requesterId?: string,
    recipientId?: string
    //date: Date
}

export type CreateUserInput = {username: string, userId: string, email: string}

export type GetUserInput = {userId: string}

export type GetAllGameInvitesInput = {playerId: string}

export type CreateBuddyInviteInput = {senderId: string}

export type AcceptBuddyInviteInput = {userId: string, inviteId: string}

export type AcceptFriendshipRequestInput = {requestId: string}

export type GetAllBuddiesInput = {userId: string}

export type GetUserByFirebaseIdInput = {firebaseId: string}

export type GetAllUserFriendshipRequestsInput = {userId: string}

export type GetAllUserClubsInput = {userId: string}