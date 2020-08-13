const Player = require("../../../server/Player");
const PlayerState = require('../../../server/PlayerState');

module.exports.createTestSocket = () => {
    
}

module.exports.simplePlayer = () => {
    return {
        createObject: () => {
            return new Player({}, {}, () => new PlayerState("test"), {}, "player", {on: function(){}});
        },
        output: {
            name: "player",
            socket: {on: {}},
            game: {},
            playerState: new PlayerState("test"),
            stateStack: [],
            propertyMetaData: {
                playerState: {
                    broadcast: {include: true}, 
                    send: {include: true}, 
                    export: {include: true}
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
        createObject: () => {
            return new Player({}, {}, () => new PlayerState("test"), {}, "player", {on: function(){}})
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
module.exports.socket = () => {
    return {
        createObject: () => {
            return new Player({}, {}, () => new PlayerState("test"), {}, "player", {on: function(){}, socketName: "test"})
        },
        output: {
            name: "player",
            socket: {socketName: "test"},
            game: {},
            playerState: new PlayerState("test"),
            stateStack: [],
            propertyMetaData: {
                playerState: {
                    broadcast: {include: true}, 
                    send: {include: true}, 
                    export: {include: true}
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