const Player = require("../../../server/Player")
const Game = require("../../../server/Game")
const PlayerState = require("../../../server/PlayerState")

module.exports.simplePlayer = () => {
    let socket = createFakeWebsocket();
    let game = new Game({}, () => {}, 1, 1, {});
    let playerState = new PlayerState("playing");
    return {
        createObject: () => {
            let player = new Player(game, {}, playerState, "player", socket);
            player.addProperty("test", {data: 0, export: {include: true}, send: {include: true}, broadcast: {include: false}})
            return player;
        }, output: {
            game,
            socket,
            name: "player",
            playerState,
            stateStack: [],
            functions: {},
            test: 0,
            propertyMetaData: {
                name: {
                    broadcast: {
                        include: true
                    },
                    send: {
                        include: true
                    },
                    export: {
                        include: true
                    }
                },
                playerState: {
                    broadcast: {
                        include: true
                    },
                    send: {
                        include: true
                    },
                    export: {
                        include: true
                    }
                },
                test: {
                    broadcast: {
                        include: false
                    },
                    send: {
                        include: true
                    },
                    export: {
                        include: true
                    }
                },
                stateStack: {
                    broadcast: {
                        include: false
                    },
                    send: {
                        include: false
                    },
                    export: {
                        include: true
                    }
                }
            }
        }, export: {
            name: "player",
            playerState: playerState.export(),
            stateStack: [],
            test: 0
        }, send: {
            name: "player",
            playerState: playerState.export(),
            test: 0
        }, broadcast: {
            name: "player",
            playerState: playerState.export()
        }
    }
}

const createFakeWebsocket = () => {
    return {
        on: () => {

        },
        send: (message) => {

        }
    }
}