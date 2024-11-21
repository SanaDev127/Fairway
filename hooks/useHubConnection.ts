import signalR from "@microsoft/signalr"
import {OngoingGame, UpdateInstruction} from "@/hooks/Types/GameTypes";
import {useGameApi} from "@/hooks/Api/GameApi";
import {Urls} from "@/constants/Urls"
import {Hole} from "@/hooks/Types/CourseTypes";

const connection = new signalR.HubConnectionBuilder()
    .withUrl(`${Urls.socketUrl}/GameHub`)
    .configureLogging(signalR.LogLevel.Information)
    .build()

const {
    getOngoingGame: {query: getOngoingGame, data, isLoading},
} = useGameApi();

getOngoingGame({id:""}).then();

let currentGame: OngoingGame = <OngoingGame>data;

// Start from 0 since need to go through arrays
let currentHoleNumber: number = 0;
let currentHole: Hole = currentGame.holes[currentHoleNumber];

let currentHoleName: string = currentHole.number.toString();
let currentHolePar: string = currentHole.par.toString();
let currentHoleHandicap: string = currentHole.handicap.toString();
let currentHoleDistance: string = currentHole.tees.teeBox1.yards.toString();

connection.on("ReceiveUpdate", async (update: UpdateInstruction) => {
    let index: number = <number>currentGame.scorecard.playerScorecards.findIndex(sc => sc.playerId == update.player);
    currentGame.scorecard.playerScorecards[index].strokes[update.hole] = update.score;
})

const handleJoinGame = async(gameId: string) => {
    await connection.invoke("AddPlayerToGame", gameId);
}

const handleLeaveGame = async(gameId: string) => {
    await connection.invoke("RemovePlayerFromGame", gameId);
}

const handleSwitchHoleUp = async() =>{
    if(currentHoleNumber < 17)
    {
        currentHoleNumber++;
    }

}

const handleSwithHoleDown = async() =>{
    if(currentHoleNumber > 0)
    {
        currentHoleNumber--;
    }
}

const handleIncrementScore = async (playerId: string, hole: number, score: number) => {
    const instruction: UpdateInstruction = {player: playerId, hole: hole, score: score};
    await connection.invoke("BroadcastUpdate", instruction).catch(console.error);
};

async function start() {
    try {
        await connection.start();
        console.log("Starting...");
    } catch (error) {
        console.log(error);
        setTimeout(() => start(), 5000);
    }
}

connection.onclose(async () => {
    await start();
})

start().then(() => {});
