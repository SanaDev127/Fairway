import signalR from "@microsoft/signalr"
import {OngoingGame, UpdateInstruction} from "@/hooks/Types/GameTypes";
import {useGameApi} from "@/hooks/Api/GameApi";

const connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:8080/GameHub")
    .configureLogging(signalR.LogLevel.Information)
    .build()

const {
    getOngoingGame: {query: getOngoingGame, data, isLoading},
} = useGameApi();
getOngoingGame({id:""});
let currentGame: OngoingGame = <OngoingGame>data;

connection.on("ReceiveUpdate", async (update: UpdateInstruction) => {
    let index: number = <number>currentGame.scorecard.playerScorecards.findIndex(sc => sc.playerId == update.player);
    currentGame.scorecard.playerScorecards[index].strokes[update.hole] = update.score;
})

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

start();
