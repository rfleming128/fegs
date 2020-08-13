const Player = require("./Player")
const MetaDataPropertyObject = require("./MetaDataPropertyObject");
const PlayerState = require("./PlayerState");

//Might work?
const transformPlayers = (type) => {
    if(type == "send" || type=="broadcast"){
        return (players, currentPlayer) => {
            return players.map(loopPlayer => {
                if(currentPlayer === loopPlayer){
                    return loopPlayer.prepareForSend();
                } else {
                    return loopPlayer.prepareForBroadcast();
                }
            })
        }
    } else {
        return (players) => {
            return players.map(loopPlayer => {
                return loopPlayer.export();
            })
        }
    }
}

/**
 * @extends MetaDataPropertyObject
 */
class Game extends MetaDataPropertyObject {
    constructor(functions, defaultPlayerState, minPlayers, maxPlayers, properties){
        super(properties);
        this.addProperty("playing", {data: false, broadcast: {include: true}, send: {include: true}, export: {include: true}});
        this.addProperty("players", {data: [], broadcast: {include: true}, send: {include: true}, export: {include: true}});
        this.functions = functions;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
        this.defaultPlayerState = defaultPlayerState;
        this.addProperty("currentPlayer", {data: 0, broadcast: {include: true}, send: {include: true}, export: {include: true}});
        this.addProperty("playerDirection", {data: true, broadcast: {include: true}, send: {include: true}, export: {include: true}});
    }

    registerNewPlayer(playerName, ws){
        if(!this.playing){
            let newPlayer = new Player(this, this.functions.player, this.defaultPlayerState(), playerName, ws);
            this.players.push(newPlayer);
        }
    }
}

module.exports = Game;