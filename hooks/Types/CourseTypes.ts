import {UpcomingGame} from "@/hooks/Types/GameTypes";

export type Course ={
    id: string,
    likes?: [],
    courseName: string,
    phone?: string,
    website?: string,
    address?: string,
    city?: string,
    state?: string,
    zip?: string,
    country?: string,
    coordinates?: string,
    numHoles: number,
    lengthFormat?: string,
    greenGrass?: string,
    fairwayGrass?: string,
    scorecard: Hole[],
    teeBoxes: TeeBox[],
    createdAt?: string,
    updatedAt?: string,
    __v?: number,

}

export type Hole = {
    number: number,
    par: number,
    tees: Tees,
    handicap: number
}

export type TeeBox = {
    tee: string,
    slope: number,
    handicap: number
}

export type Tee = {
    color: string,
    yards: number,
}

export type TeeBox1 = {
    color: string,
    yards: number,
}

export type TeeBox2 = {
    color: string,
    yards: number
}

export type Tees = {
    teeBox1: TeeBox1,
    teeBox2: TeeBox2
}

export type GetCourseInput = {id: string}



