import { Course, Hole } from "./CourseTypes"
import { User } from "./UserTypes"

export type Game = {
    id: string,
    organiser: string,
    course: string,
    date: string,
    scorecard: GameScorecard
    players: string[],
    active: boolean,
    result: GameResult

}

export type GameScorecard = {
    pars: number[],
    playerScorecards: PlayerScorecard[],
    players: User[],
    active: boolean,
}

export type GameResult = {
    results: {
        playerName: string,
        record: GameResultRecord
    },
    scorecard: DetailScorecard
}

export type PlayerScorecard = {
    playerId: string;
    playerName: string;
    strokes: number[];
    points: number[];
}

export type DetailScorecard = {
    holes: number[],
    distances: number[],
    pars: number[],
    scoreDetails: ScorecardRecord[]
}

export type ScorecardRecord = {
    playerName: string,
    strokes: number[],
    points: number[],
}

export type GameResultRecord = {
    playerId: string,
    playerName?: string,
    strokes: number,
    points: number,
    score: number,
    courseParTotal: number
}

export type OngoingGame = {
    id: string,
    organiser: string,
    startTime: string,
    invitees: string[],
    course: Course,
    holes: Hole[],
    players: User[],
    playerHandicaps: number[],
    scorecard: GameScorecard
}

export type UpcomingGame = {
    id: string,
    course: string,
    organiser: string,
    availableSlots: number,
    date: string,
    players: string[],
    hasSpace: boolean,
    club: string
}

export type GameInvite = {
    id: string,
    gameID: string,
    recipientID: string,
    accepted: boolean,
    //dateSent: Date
}

export type GetUserRecentGamesInput = {id: string}

export type GetAllUsersGamesInput = {id: string, sDate?: string, eDate?: string, participants?: string[]}

export type GetUserHandicapIndexInput = {userId: string}

export type StartGameInput = {organiserId: string, courseId: string, invitees?: string[], clubId?: string}

export type AcceptGameInviteInput = {inviteId: string}

export type GetUserOngoingGamesInput = {id: string}

export type GetOngoingGameInput = {id: string}

export type GetOngoingGameScorecardInput = {gameId: string}

export type UpdateOngoingGameInput = {game: OngoingGame}

export type SaveGameInput = {gameId: string}

export type UpdateInstruction = {player: string, hole: number, score: number}