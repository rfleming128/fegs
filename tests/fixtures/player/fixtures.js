const Player = require("../../../server/Player");
const PlayerState = require('../../../server/PlayerState');

module.exports.simplePlayer = () => {
    let functions = {
        start: {
            test: (game, player) => {

            }
        }, 
        input: {
            test: (game, player, input) => {

            }
        },
        end: {
            test: (game, player) => {

            }
        }
    }
    return {
        createInput: () => {
            return new Player({}, functions, () => new PlayerState("test"), {}, "Player", {});
        },
        output: {
            name: "Player",
            socket: {},
            game: {},
            playerState: new PlayerState("test"),
            stateStack: [],
            propertyMetaData: {
                playerState: {
                    broadcast: {include: true, transform: state => state.export()}, 
                    send: {include: true, transform: state => state.export()}, 
                    export: {include: true, transform: state => state.export()}
                },
                name: {
                    broadcast: {include: true}, 
                    send: {include: true}, 
                    export: {include: true}
                }, 
                stateStack: {
                    broadcast: {include: false}, 
                    send: {include: false}, 
                    export: {include: true}
                }
            }
        }
    }
}
module.exports.playerExport = () => {
    return {
        createInput: () => {
            return new Player({}, {}, () => new PlayerState("test"), {}, "player", {})
        },
        output: {
            name: "player",
            stateStack: [],
            playerState: {
                name: "test"
            }
        }
    }
}