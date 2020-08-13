const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const sinon = require('sinon');

const { should } = require('chai');

const PlayerState = require('../../../server/PlayerState');
const playerStateFixtures = require('../../fixtures/playerState/fixtures');
let playerState;

describe('PlayerState Class', () => {
    describe('Constructor', () => {
        it('Should create object with name', () => {
            playerState = playerStateFixtures.simplePlayerState().createObject();
            expect(playerState).to.deep.equal(playerStateFixtures.simplePlayerState().output);
        });

        it('Should create object with metadata', () => {
            playerState = playerStateFixtures.complicatedPlayerState().createObject();
            expect(playerState).to.deep.equal(playerStateFixtures.complicatedPlayerState().output);
        })
    })

    describe('Export', () => {
        it('Should export properly', () => {
            playerState = playerStateFixtures.complicatedPlayerState().createObject();
            let output = playerState.export();
            expect(output).to.deep.equal(playerStateFixtures.complicatedPlayerState().export)
        })
    })
});