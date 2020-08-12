const MetaDataPropertyObject = require('./MetaDataPropertyObject');

/**
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
        this.name = name;
    }
}

module.exports = PlayerState;