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
            playerState = new PlayerState(playerStateFixtures.simplePlayerState().input);
            expect(playerState).to.deep.equal(playerStateFixtures.simplePlayerState().output);
        });

        it('Should create object with metadata', () => {
            playerState = new PlayerState(playerStateFixtures.complicatedPlayerState().input.name, playerStateFixtures.complicatedPlayerState().input.data);
            expect(playerState).to.deep.equal(playerStateFixtures.complicatedPlayerState().output);
        })
    })
});