const MetaDataPropertyObject = require('./MetaDataPropertyObject');

/**
 * Class to contain details about player state. Used to route player logic properly. 
 * 
 * @property {string} name Name of PlayerState
 * @extends MetaDataPropertyObject
 */
class PlayerState extends MetaDataPropertyObject{
    /**
     * Creates a PlayerState with a name and properties
     * 
     * @param {string} name Name of PlayerState
     * @param {object.<Data>} [properties] Data properties to add to PlayerState
     */
    constructor(name, properties){
        super(properties);
        this.addProperty("name", {data: name, broadcast: {include: true}, send: {include: true}, export: {include: true}});
    }
}

module.exports = PlayerState;