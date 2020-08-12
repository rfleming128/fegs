const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const MetaDataPropertyObject = require('../../../server/MetaDataPropertyObject');
const metadataFixtures = require('../../fixtures/metadatapropertyobject/fixtures');
const { should } = require('chai');

describe('MetaDataPropertyObject Class', () => {
    describe('Constructor', () => {
        it('Should create object', () => {
            metaDataPropertyObject = new MetaDataPropertyObject();
    
            expect(metaDataPropertyObject).to.be.an('object');
        });
        it('Should set properties', () => {
            metaDataPropertyObject = new MetaDataPropertyObject(metadataFixtures.simpleMetadata().input);

            expect(metaDataPropertyObject).to.be.an('object');
            expect(metaDataPropertyObject).to.deep.equal(metadataFixtures.simpleMetadata().output);
        })
        it('Should set MetaData', () => {
            metaDataPropertyObject = new MetaDataPropertyObject(metadataFixtures.broadcastMetadata().input);

            expect(metaDataPropertyObject).to.be.an('object');
            expect(metaDataPropertyObject).to.deep.equal(metadataFixtures.broadcastMetadata().output);
        })
    });
    describe('AddProperty', () => {
        it('Should add property and metadata', () => {
            metaDataPropertyObject = new MetaDataPropertyObject();
            metaDataPropertyObject.addProperty("test", metadataFixtures.addData().input.test);
            expect(metaDataPropertyObject).to.deep.equal(metadataFixtures.addData().output);
        })
    });
    describe('RemoveProperty', () => {
        it('Should remove property and metadata', () => {
            metaDataPropertyObject = new MetaDataPropertyObject(metadataFixtures.simpleMetadata().input);
            metaDataPropertyObject.removeProperty("test");
            expect(metaDataPropertyObject).to.deep.equal({propertyMetaData: {}})
        })
    })
    describe('Prepare for transfer', () => {
        it('Should be prepared for transfer', () => {
            metaDataPropertyObject = new MetaDataPropertyObject(metadataFixtures.broadcastMetadata().input);
            let output = metaDataPropertyObject.prepareObjectForTransfer("broadcast");
            expect(output).to.deep.equal(metadataFixtures.broadcastMetadata().broadcast);
        })
    })
    
})