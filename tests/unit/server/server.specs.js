const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const sinon = require('sinon');

const Server = require('../../../server/Server');

let server;

describe('Server Class', () => {
    afterEach(() => {
        server.server.close();
    })
    describe('Constructor', () => {
        it('Should create Server object', () => {
            server = new Server(5000);

            expect(server).to.be.an('object');
            expect(server.clients).to.be.an('array');
            expect(server.app).to.be.a('function');
            expect(server.server).to.be.an('object');
        });
        it('Should add game if game not playing', () => {
            server = new Server(5000);

            server.setGame({playing: true, name: "test1"});
            expect(server.game).to.be.an('object');
            expect(server.game.playing).to.be.true;
            expect(server.game.name).to.equal("test1");
            server.setGame({playing: false, name: "test2"});
            expect(server.game.playing).to.be.true;
            expect(server.game.name).to.equal("test1");
            server.game.playing = false;
            server.setGame({playing: false, name: "test2"});
            expect(server.game.name).to.equal("test2");
            server.game.playing = false;
        })
    })
})