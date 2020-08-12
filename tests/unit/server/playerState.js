const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const sinon = require('sinon');

const { should } = require('chai');

const PlayerState = require('../../../server/PlayerState');
let playerState;

describe('PlayerState Class', () => {
    describe('Constructor', () => {
        it('Should create object with name', () => {
            playerState = new PlayerState("playing");
            expect(playerState).to.deep.equal({name: "playing", propertyMetaData: {name: {broadcast: {include: true}, send: {include: true}, export: {include: true}}}});
        });

        it('Should create object with metadata', () => {
            playerState = new PlayerState("playing", {test: {data: 0}});
            expect(playerState).to.deep.equal({name: "playing", test: 0, propertyMetaData: {test: {}, name: {broadcast: {include: true}, send: {include: true}, export: {include: true}}}});
        })
    })
});