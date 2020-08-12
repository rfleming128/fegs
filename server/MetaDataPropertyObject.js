/**
 * @typedef {object} TransferMetaData
 * @property {boolean} [include] Whether to include this data
 * @property {function} [dataTransform] How to transform the data before sending
 */

/**
 * @typedef {object} Data
 * @property {any} data The data to be added as a property
 * @property {TransferMetaData} *<Data> How to handle the data during this type of data transfer
 */

/**
 * Extenible class for including metadata on how to handle the data on an object for transfer.
 * 
 * @property {object.<TransferMetaData>} propertyMetaData Metadata for other properties
 */
class MetaDataPropertyObject {
    /**
     * Creates an object with properties tracked by metadata
     * 
     * @param {object.<Data>} properties Intiial data properties to be added to the object.
     */
    constructor(properties){
        this.propertyMetaData = {};
        for(const property in properties){
            this.addProperty(property, properties[property]);
        }
    }

    /**
     * Adds a property and the correct metadata.
     * 
     * @param {string} propertyName Name of the property to be set
     * @param {Data} data Object containing data and metadata for the property. 
     */
    addProperty(propertyName, data){
        this[propertyName] = data.data;
        this.propertyMetaData[propertyName] = data;
        delete this.propertyMetaData[propertyName].data;
    }

    /**
     * Removes a property and the metadata.
     * 
     * @param {string} propertyName Name of property to be removed. 
     */
    removeProperty(propertyName){
        delete this.propertyMetaData[propertyName];
        delete this[propertyName];
    }
}

module.exports = MetaDataPropertyObject;