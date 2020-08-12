module.exports.simpleMetadata = () => {
    return {
        input: {
            test: {data: 0}
        }, output: {
            test: 0,
            propertyMetaData: {test: {}}
        }
    }
}

module.exports.broadcastMetadata = () => {
    return {
        input: {
            test: {data: 0, broadcast: {include: true}}
        },
        output: {
            test: 0,
            propertyMetaData: {
                test: {
                    broadcast: {
                        include: true
                    }
                }
            }
        }
    }
}