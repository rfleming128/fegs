const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const sinon = require('sinon');
const chaiExclude = require('chai-exclude');
 
chai.use(chaiExclude);


const { should } = require('chai');

const Player = require('../../../server/Player');
let playerFixture = require('../../fixtures/player/fixtures');
let player;

describe('Player Class', () => {
    describe('Constructor', () => {
        it('Should generate player object', () => {
            player = playerFixture.simplePlayer().createObject();
            expect(player).excludingEvery(['id', 'functions', 'transform']).to.deep.equal(playerFixture.simplePlayer().output)
        })
    })

    describe('Export', () => {
        it('Should export correctly', () => {
            player = playerFixture.simplePlayer().createObject();
            let output = player.export();
            expect(output).to.deep.equal(playerFixture.simplePlayer().export)
        })
    })

    describe('Set Socket', () => {
    })

    describe('Send Data', () => {
    })

    describe('Set State', () => {
    })

    describe('Prepare for Send', () => {
        it('Should prepare for send correctly', () => {
            player = playerFixture.simplePlayer().createObject();
            let output = player.prepareForSend();
            expect(output).to.deep.equal(playerFixture.simplePlayer().send)
        })
    })

    describe('Prepare for Broadcast', () => {
        it('Should prepare for broadcast correctly', () => {
            player = playerFixture.simplePlayer().createObject();
            let output = player.prepareForBroadcast();
            expect(output).to.deep.equal(playerFixture.simplePlayer().broadcast)
        })
    })
})