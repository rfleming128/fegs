const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const sinon = require('sinon');

const MetaDataPropertyObject = require('../../../server/MetaDataPropertyObject');
const metadataFixtures = require('../../fixtures/metadatapropertyobject/fixtures');

describe('MetaDataPropertyObject Class', () => {
    describe('Constructor', () => {
        it('Should create object', () => {
            metaDataPropertyObject = metadataFixtures.simpleMetadata().createObject()
    
            expect(metaDataPropertyObject).to.be.an('object');
        });
        it('Should set properties', () => {
            metaDataPropertyObject = metadataFixtures.simpleMetadata().createObject()

            expect(metaDataPropertyObject).to.be.an('object');
            expect(metaDataPropertyObject).to.deep.equal(metadataFixtures.simpleMetadata().output);
        })
        it('Should set MetaData', () => {
            metaDataPropertyObject = metadataFixtures.broadcastMetadata().createObject();

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
            metaDataPropertyObject = metadataFixtures.simpleMetadata().createObject();
            metaDataPropertyObject.removeProperty("test");
            expect(metaDataPropertyObject).to.deep.equal({propertyMetaData: {}})
        })
    })
    describe('Prepare for transfer', () => {
        it('Should be prepared for transfer correctly', () => {
            metaDataPropertyObject = metadataFixtures.broadcastMetadata().createObject();
            let output = metaDataPropertyObject.prepareObjectForTransfer("broadcast");
            expect(output).to.deep.equal(metadataFixtures.broadcastMetadata().broadcast);
        })

        it('Should call function when preparing', () => {
            metaDataPropertyObject = metadataFixtures.transformFunction().createObject();
            let output = metaDataPropertyObject.prepareObjectForTransfer("broadcast");
            expect(output).to.deep.equal(metadataFixtures.transformFunction().output)
        })

        it('Should call function with extra data when provided', () => {
            metaDataPropertyObject = metadataFixtures.transformFunctionExtraData().createObject();
            let output = metaDataPropertyObject.prepareObjectForTransfer("broadcast", metadataFixtures.transformFunctionExtraData().extraData);
            expect(output).to.deep.equal(metadataFixtures.transformFunctionExtraData().output)
        })
    })
})