const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const MetaDataPropertyObject = require('../../../server/MetaDataPropertyObject');
const { should } = require('chai');

let metaDataPropertyObject;

describe('MetaDataPropertyObject Class', () => {
    describe('Constructor', () => {
        it('Should create object', () => {
            metaDataPropertyObject = new MetaDataPropertyObject();
    
            expect(metaDataPropertyObject).to.be.an('object');
        });
        it('Should set properties', () => {
            metaDataPropertyObject = new MetaDataPropertyObject({test: {data: 0}});

            expect(metaDataPropertyObject).to.be.an('object');
            expect(metaDataPropertyObject.test).to.equal(0);
            expect(metaDataPropertyObject.propertyMetaData.test).to.be.an('object');
        })
        it('Should set MetaData', () => {
            metaDataPropertyObject = new MetaDataPropertyObject({test: {data: 0, broadcast: {include: true}}});

            expect(metaDataPropertyObject).to.be.an('object');
            expect(metaDataPropertyObject.test).to.equal(0);
            expect(metaDataPropertyObject.propertyMetaData.test).to.be.an('object');
            expect(metaDataPropertyObject.propertyMetaData.test.broadcast).to.be.an('object');
            expect(metaDataPropertyObject.propertyMetaData.test.broadcast.include).to.be.true;
        })
    })
})