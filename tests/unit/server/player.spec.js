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
            player = playerFixture.simplePlayer().createInput();
            expect(player).excludingEvery(["functions", "transform", "id"]).to.deep.equal(playerFixture.simplePlayer().output);
        })
    })

    describe('Export', () => {
        it('Should export correctly', () => {
            player = playerFixture.playerExport().createInput();
            output = player.export();
            expect(output).to.deep.equal(playerFixture.playerExport().output);
        })
    })
})