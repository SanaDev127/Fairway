export type LeagueGameReceipt = {
    id?: string,
    clubId?: string,
    gameId?: string,
    leagueId?: string,
    date?: string
}

export type LeagueTable = {
    leagueName: string;
    leagueStartDate: Date;
    numParticipants: number;
    table: LeagueTableRecord[]
}

export type LeagueTableRecord = {
    playerName: string,
    numGamesPlayed: number,
    points: number,
    handicap: number
}

export type League = {
    id?: string,
    club?: string,
    name?: string,
    startDate: Date,
    active?: boolean
}

export type GetAllClubLeaguesInput = {clubId: string}

export type GetAllLeagueGamesInput = {leagueId: string}

export type GenerateLeagueTableInput = {leagueId: string, startDate?: string, endDate?: string, gameThreshold?: number}

// Maybe not necessary for mobile app

export type StartLeagueInput = {clubId: string, name: string, startDate: string}

export type EndLeagueInput = {leagueId: string}
