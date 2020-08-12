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

    /**
     * Prepares the object for transfer according to the metadata instructions.
     * 
     * @param {string} transferType Prepare it for which transfer type.
     */
    prepareObjectForTransfer(transferType){
        let data = {};

        for(const property in this){
            let metdataForPropety = this.propertyMetaData[property];
            if(metdataForPropety){
                let metadataForTransfer = metdataForPropety[transferType];
                if(metadataForTransfer){
                    let propertyPrepared = this.preparePropertyForTransfer(transferType, property);
                    if(propertyPrepared !== undefined){
                        data[property] = propertyPrepared;
                    }
                }
            }
        };

        return data;
    }

    /**
     * Prepares a parameter for transfer according to the metadata instructions.
     * 
     * @param {string} transferType Prepare it for which transfer type.
     * @param {string} property Property name
     */
    preparePropertyForTransfer(transferType, property){
        let metdataForPropety = this.propertyMetaData[property];
        let metadataForTransfer = metdataForPropety[transferType];
        if(metadataForTransfer.include){
            if(metadataForTransfer.dataTransform){
                return metadataForTransfer.transform(this[property]);
            } else {
                return this[property];
            }
        }
    }
}

module.exports = MetaDataPropertyObject;