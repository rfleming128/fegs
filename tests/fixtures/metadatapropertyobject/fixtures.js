const MetaDataPropertyObject = require("../../../server/MetaDataPropertyObject")

module.exports.simpleMetadata = () => {
    return {
        createObject: () => {
            return new MetaDataPropertyObject({test: {data: 0}});
        }, output: {
            test: 0,
            propertyMetaData: {test: {}}
        }
    }
}

module.exports.addData = () => {
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

module.exports.broadcastMetadata = () => {
    return {
        input: {
            test: {data: 0, broadcast: {include: true}},
            test2: {data: 4, broadcast: {include: false}}
        },
        output: {
            test: 0,
            test2: 4,
            propertyMetaData: {
                test: {
                    broadcast: {
                        include: true
                    }
                },
                test2: {
                    broadcast: {
                        include: false
                    }
                }
            }
        },
        broadcast: {
            test: 0
        }
    }
}

module.exports.transformFunction = () => {
    return {
        input: {
            test: {data: 0, broadcast: {include: true, transform: data => {
                return 1;
            }}}
        }, 
        output: {
            test: 1
        }
    }
}