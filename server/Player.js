const { v4: uuidv4 } = require('uuid');
const MetaDataPropertyObject = require('./MetaDataPropertyObject');
const PlayerState = require('./PlayerState');

/**
 * @extends MetaDataPropertyObject
 */
class Player extends MetaDataPropertyObject {
    /**
     * Creates a player object
     * 
     * @param {Game} game 
     * @param {object} functions 
     * @param {function} defaultState 
     * @param {object.<Data>} properties 
     * @param {string} name 
     * @param {WebSocket} socket 
     */
    constructor(game, functions, defaultState, properties, name, socket){
        super(properties);
        this.addProperty("playerState", {
            data: defaultState(), 
            broadcast: {include: true, transform: state => state.export()}, 
            send: {include: true, transform: state => state.export()}, 
            export: {include: true, transform: state => state.export()}
        });
        this.addProperty("stateStack", {data: [], broadcast: {include: false}, send: {include: false}, export: {include: true}})
        this.addProperty("name", {data: name, broadcast: {include: true}, send: {include: true}, export: {include: true}});
        this.game = game;
        this.functions = functions;
        if(socket){
            this.socket = socket;
        }
        this.id = uuidv4();
    }

    /**
     * Sets the socket on the player
     * 
     * @param {WebSocket} socket Socket to be set
     */
    setSocket(socket){
        this.socket = socket;
        socket.on('message', message => {
            this.onSocketData(message);
        })
    }

    /**
     * Called when the socket recieves data
     * 
     * @param {string} data Data recieved
     * @todo implement
     */
    onSocketData(data){

    }

    /**
     * Starts players turn. Will call any turn functions for the current player state.
     * @todo implement
     */
    startTurn(){

    }

    /**
     * Ends players turn. Will call any end turn functions for the current player state. 
     * @todo implement
     */
    endTurn(){

    }

    /**
     * Sends data to the player
     * 
     * @param {any} data 
     */
    sendData(data){
        if(this.socket){
            this.socket.send(JSON.stringify(data));
        }
    }

    /**
     * Sets the players player state.
     * 
     * @param {PlayerState} state Player State to set on the player.
     * @param {boolean} stack Whether to add existing state to the stack.
     */
    setState(state, stack){
        if(stack){
            this.stateStack.push(this.playerState);
        }
        this.playerState = state;
    }

    /**
     * Pops the last state on the stack into the playerState
     */
    popState(){
        this.playerState = this.stateStack.pop();
    }

    /**
     * Exports the player
     */
    export(){
        return this.prepareObjectForTransfer("export");
    }

    /**
     * Returns an object of the player data that is ok to send to player
     */
    prepareForSend(){
        return this.prepareObjectForTransfer("send");
    }

    /**
     * Returns an object of the player data that is ok to send to everybody
     */
    prepareForBroadcast(){
        return this.prepareObjectForTransfer("broadcast");
    }
}

module.exports = Player;