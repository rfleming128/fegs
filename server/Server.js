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

        expressWs(this.app);

        this.app.ws('/clients', (ws, req) => {
            this.addSocketClient(ws);

            ws.on('close', () => {
                this.removeSocketClient(ws);
            })
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

    /**
     * Add websocket client to this server
     * 
     * @param {WebSocket} client 
     */
    addSocketClient(client){
        this.clients.push(client);
    }

    /**
     * Remove websocket client from this server
     * 
     * @param {WebSocket} client 
     */
    removeSocketClient(client){
        let index = this.clients.findIndex(socket => socket === ws);
        if(index !== -1){
            this.clients.splice(index, 1);
        }
    }
}

module.exports = Server;