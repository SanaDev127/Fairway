import {UpcomingGame} from "@/hooks/Types/GameTypes";

export type Club = {
    id?: string,
    creator?: string,
    name?: string,
    dateCreated: string,
    members?: string[],
    //games?: string[],
    //upcomingGames?: string[]
}

export type ClubGameReceipt = {
    id?: string,
    clubId?: string,
    gameId?: string,
    date?: string
}

export type ClubInvite = {
    id: string,
    //dateCreated: string,
    club: string,
    identifier: string,
    url: string,
    //used: boolean,
    generatedBy: string,
}

export type MembershipRequest = {
    id: string,
    club: string,
    player: string,
    playerHandicap: number,
    date: string,
}

export type Transaction = {
    id: string,
    club: string,
    date: string,
    amount: number,
    member: string,
    operation: string,
    category: string 
}

export type TransactionReport = {
    transactionRecords: TransactionReportRecord[],
    debit: number,
    credit: number,
    balance: number,
    numTransactions: number
}

export type TransactionReportRecord = {
    memberName: string,
    debit: number,
    credit: number,
    balance: number,
    numTransactions: number
}

export type CreateClubInput = {clubName: string, creatorId: string}

export type GetClubsRecentGamesInput = {clubId: string}

export type GetAllClubsGamesInput = {id: string, sDate?: string, eDate?: string}

export type GetClubUpcomingGamesInput = {clubId: string}

export type GetUsersUpcomingGamesInput = {userId: string}

export type CreateUpcomingGameInput = {upcomingGame: UpcomingGame}

export type RsvpToGameInput = {userId: string, gameId: string}

export type GetAllClubMembersInput = {clubId: string}

export type GetAllUserClubsInput = {userId: string}

// These might not be necessary right now for the mobile app. But some could be later

export type GenerateClubInviteInput = {clubId: string, userId: string}

export type AcceptClubInviteInput = {userId: string, inviteId: string}

export type GetAllClubMembershipRequestsInput = {clubId: string}

export type AcceptMembershipRequestInput = {requestId: string}

export type GetAllClubTransactionsInput = {clubId: string}

export type GetAllUserTransactionsInput = {userId: string}

export type CreateTransactionInput = {transaction: Transaction}

export type GenerateClubFinancialReportInput = {clubId: string, startDate?: string, endDate?: string}

export type GenerateUserFinancialReportInput = {userId: string, startDate?: string, endDate?: string}