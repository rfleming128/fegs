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
        it('Should create player object', () => {
            player = playerFixture.simplePlayer().createObject();
            expect(player).excludingEvery(["functions", "transform", "id"]).to.deep.equal(playerFixture.simplePlayer().output);
        })
    })

    describe('Export', () => {
        it('Should export correctly', () => {
            player = playerFixture.playerExport().createObject();
            output = player.export();
            expect(output).to.deep.equal(playerFixture.playerExport().output);
        })
    })

    describe('Set Socket', () => {
        it('Should set the socket when constructed', () => {
            player = playerFixture.socket().createObject();
            expect(player).excludingEvery(["functions", "transform", "id", "on"]).to.deep.equal(playerFixture.socket().output);
        })

        it('Should set the socket when function called', () => {
            player = playerFixture.simplePlayer().createObject();
            player.setSocket({socketName: "test", on: function(){}});
            expect(player).excludingEvery(["functions", "transform", "id", "on"]).to.deep.equal(playerFixture.socket().output);
        })
    })

    describe('Send Data', () => {

    })

    describe('Set State', () => {

    })

    describe('Prepare for Send', () => {

    })

    describe('Prepare for Broadcast', () => {

    })
})