const PlayerState = require("../../../server/PlayerState")

module.exports.simplePlayerState = () => {
    return {
        createObject: () => {
            return new PlayerState("playing");
        },
        output: {
            name: "playing", 
            propertyMetaData: {
                name: {
                    broadcast: {include: true}, 
                    send: {include: true}, 
                    export: {include: true}
                }
            }
        }
    }
}

module.exports.complicatedPlayerState = () => {
    return {
        createObject: () => {
            return new PlayerState("playing", {test: {data: 0, export: {include: true}}});
        },
        output: {
            name: "playing", 
            test: 0,
            propertyMetaData: {
                test: {
                    export: {include: true}
                },
                name: {
                    broadcast: {include: true}, 
                    send: {include: true}, 
                    export: {include: true}
                }
            }
        },
        export: {
            name: "playing",
            test: 0
        }
    }
}