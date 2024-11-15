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
    scorecard: [
        {
            number: number,
            par: number,
            tees?: {
                teeBox1?:{
                    color?: string,
                    yards?: number,
                },
                teeBox2?:{
                    color?: string,
                    yards?: number,
                }
            },
            handicap: number,
      }],
    teeBoxes?: [
        {
            tee?: string,
            slope?: string,
            handicap?: number
        }
    ],
    createdAt?: string,
    updatedAt?: string,
    __v?: number,

}