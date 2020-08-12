module.exports.simplePlayerState = () => {
    return {
        input: "playing",
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
        input: {
            name: "playing",
            data: {
                test: {data: 0}
            }
        },
        output: {
            name: "playing", 
            test: 0,
            propertyMetaData: {
                test: {},
                name: {
                    broadcast: {include: true}, 
                    send: {include: true}, 
                    export: {include: true}
                }
            }
        }
    }
}