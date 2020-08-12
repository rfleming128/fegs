const express = require('express');
const expressWs = require('express-ws');

/**
 * Server class, manages the express server which uses the websockets to run the game. 
 */
class Server {
    /**
     * Creates server and automatically starts server on this port.
     * @constructor
     * @param {number} port Port number to start the server on. 
     */
    constructor(port){
        this.app = express();
        this.clients = [];

        expressWs(app);

        this.app.ws('/clients', (ws, req) => {
        })

        this.server = this.app.listen(port);
    }

    /**
     * Sets the game to be used by the server.
     * @param {*} game Game to be used by the server.
     */
    setGame(game){
        if(!this.game || !this.game.playing){
            this.game = game;
        }
    }
}

module.exports = Server;