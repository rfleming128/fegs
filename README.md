## Classes

<dl>
<dt><a href="#MetaDataPropertyObject">MetaDataPropertyObject</a></dt>
<dd><p>Extenible class for including metadata on how to handle the data on an object for transfer.</p>
</dd>
<dt><a href="#Player">Player</a> ⇐ <code><a href="#MetaDataPropertyObject">MetaDataPropertyObject</a></code></dt>
<dd></dd>
<dt><a href="#PlayerState">PlayerState</a> ⇐ <code><a href="#MetaDataPropertyObject">MetaDataPropertyObject</a></code></dt>
<dd><p>Class to contain details about player state. Used to route player logic properly.</p>
</dd>
<dt><a href="#Server">Server</a></dt>
<dd><p>Server class, manages the express server which uses the websockets to run the game.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#TransferMetaData">TransferMetaData</a> : <code>object</code></dt>
<dd><p>Metadata about how to process the data for transfer.</p>
</dd>
<dt><a href="#Data">Data</a> : <code>object</code></dt>
<dd><p>Data that includes metadata</p>
</dd>
</dl>

<a name="MetaDataPropertyObject"></a>

## MetaDataPropertyObject
Extenible class for including metadata on how to handle the data on an object for transfer.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| propertyMetaData | [<code>object.&lt;TransferMetaData&gt;</code>](#TransferMetaData) | Metadata for other properties |


* [MetaDataPropertyObject](#MetaDataPropertyObject)
    * [new MetaDataPropertyObject(properties)](#new_MetaDataPropertyObject_new)
    * [.addProperty(propertyName, data)](#MetaDataPropertyObject+addProperty)
    * [.removeProperty(propertyName)](#MetaDataPropertyObject+removeProperty)
    * [.prepareObjectForTransfer(transferType)](#MetaDataPropertyObject+prepareObjectForTransfer)
    * [.preparePropertyForTransfer(transferType, property)](#MetaDataPropertyObject+preparePropertyForTransfer)

<a name="new_MetaDataPropertyObject_new"></a>

### new MetaDataPropertyObject(properties)
Creates an object with properties tracked by metadata


| Param | Type | Description |
| --- | --- | --- |
| properties | [<code>object.&lt;Data&gt;</code>](#Data) | Intiial data properties to be added to the object. |

<a name="MetaDataPropertyObject+addProperty"></a>

### metaDataPropertyObject.addProperty(propertyName, data)
Adds a property and the correct metadata.

**Kind**: instance method of [<code>MetaDataPropertyObject</code>](#MetaDataPropertyObject)  

| Param | Type | Description |
| --- | --- | --- |
| propertyName | <code>string</code> | Name of the property to be set |
| data | [<code>Data</code>](#Data) | Object containing data and metadata for the property. |

<a name="MetaDataPropertyObject+removeProperty"></a>

### metaDataPropertyObject.removeProperty(propertyName)
Removes a property and the metadata.

**Kind**: instance method of [<code>MetaDataPropertyObject</code>](#MetaDataPropertyObject)  

| Param | Type | Description |
| --- | --- | --- |
| propertyName | <code>string</code> | Name of property to be removed. |

<a name="MetaDataPropertyObject+prepareObjectForTransfer"></a>

### metaDataPropertyObject.prepareObjectForTransfer(transferType)
Prepares the object for transfer according to the metadata instructions.

**Kind**: instance method of [<code>MetaDataPropertyObject</code>](#MetaDataPropertyObject)  

| Param | Type | Description |
| --- | --- | --- |
| transferType | <code>string</code> | Prepare it for which transfer type. |

<a name="MetaDataPropertyObject+preparePropertyForTransfer"></a>

### metaDataPropertyObject.preparePropertyForTransfer(transferType, property)
Prepares a parameter for transfer according to the metadata instructions.

**Kind**: instance method of [<code>MetaDataPropertyObject</code>](#MetaDataPropertyObject)  

| Param | Type | Description |
| --- | --- | --- |
| transferType | <code>string</code> | Prepare it for which transfer type. |
| property | <code>string</code> | Property name |

<a name="Player"></a>

## Player ⇐ [<code>MetaDataPropertyObject</code>](#MetaDataPropertyObject)
**Kind**: global class  
**Extends**: [<code>MetaDataPropertyObject</code>](#MetaDataPropertyObject)  

* [Player](#Player) ⇐ [<code>MetaDataPropertyObject</code>](#MetaDataPropertyObject)
    * [new Player(game, functions, defaultState, properties, name, socket)](#new_Player_new)
    * [.setSocket(socket)](#Player+setSocket)
    * [.onSocketData(data)](#Player+onSocketData)
    * [.startTurn()](#Player+startTurn)
    * [.endTurn()](#Player+endTurn)
    * [.sendData(data)](#Player+sendData)
    * [.setState(state, stack)](#Player+setState)
    * [.popState()](#Player+popState)
    * [.export()](#Player+export)
    * [.prepareForSend()](#Player+prepareForSend)
    * [.prepareForBroadcast()](#Player+prepareForBroadcast)
    * [.addProperty(propertyName, data)](#MetaDataPropertyObject+addProperty)
    * [.removeProperty(propertyName)](#MetaDataPropertyObject+removeProperty)
    * [.prepareObjectForTransfer(transferType)](#MetaDataPropertyObject+prepareObjectForTransfer)
    * [.preparePropertyForTransfer(transferType, property)](#MetaDataPropertyObject+preparePropertyForTransfer)

<a name="new_Player_new"></a>

### new Player(game, functions, defaultState, properties, name, socket)
Creates a player object


| Param | Type |
| --- | --- |
| game | <code>Game</code> | 
| functions | <code>object</code> | 
| defaultState | <code>function</code> | 
| properties | [<code>object.&lt;Data&gt;</code>](#Data) | 
| name | <code>string</code> | 
| socket | <code>WebSocket</code> | 

<a name="Player+setSocket"></a>

### player.setSocket(socket)
Sets the socket on the player

**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| socket | <code>WebSocket</code> | Socket to be set |

<a name="Player+onSocketData"></a>

### player.onSocketData(data)
Called when the socket recieves data

**Kind**: instance method of [<code>Player</code>](#Player)  
**Todo**

- [ ] implement


| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | Data recieved |

<a name="Player+startTurn"></a>

### player.startTurn()
Starts players turn. Will call any turn functions for the current player state.

**Kind**: instance method of [<code>Player</code>](#Player)  
**Todo**

- [ ] implement

<a name="Player+endTurn"></a>

### player.endTurn()
Ends players turn. Will call any end turn functions for the current player state.

**Kind**: instance method of [<code>Player</code>](#Player)  
**Todo**

- [ ] implement

<a name="Player+sendData"></a>

### player.sendData(data)
Sends data to the player

**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type |
| --- | --- |
| data | <code>any</code> | 

<a name="Player+setState"></a>

### player.setState(state, stack)
Sets the players player state.

**Kind**: instance method of [<code>Player</code>](#Player)  

| Param | Type | Description |
| --- | --- | --- |
| state | [<code>PlayerState</code>](#PlayerState) | Player State to set on the player. |
| stack | <code>boolean</code> | Whether to add existing state to the stack. |

<a name="Player+popState"></a>

### player.popState()
Pops the last state on the stack into the playerState

**Kind**: instance method of [<code>Player</code>](#Player)  
<a name="Player+export"></a>

### player.export()
Exports the player

**Kind**: instance method of [<code>Player</code>](#Player)  
<a name="Player+prepareForSend"></a>

### player.prepareForSend()
Returns an object of the player data that is ok to send to player

**Kind**: instance method of [<code>Player</code>](#Player)  
<a name="Player+prepareForBroadcast"></a>

### player.prepareForBroadcast()
Returns an object of the player data that is ok to send to everybody

**Kind**: instance method of [<code>Player</code>](#Player)  
<a name="MetaDataPropertyObject+addProperty"></a>

### player.addProperty(propertyName, data)
Adds a property and the correct metadata.

**Kind**: instance method of [<code>Player</code>](#Player)  
**Overrides**: [<code>addProperty</code>](#MetaDataPropertyObject+addProperty)  

| Param | Type | Description |
| --- | --- | --- |
| propertyName | <code>string</code> | Name of the property to be set |
| data | [<code>Data</code>](#Data) | Object containing data and metadata for the property. |

<a name="MetaDataPropertyObject+removeProperty"></a>

### player.removeProperty(propertyName)
Removes a property and the metadata.

**Kind**: instance method of [<code>Player</code>](#Player)  
**Overrides**: [<code>removeProperty</code>](#MetaDataPropertyObject+removeProperty)  

| Param | Type | Description |
| --- | --- | --- |
| propertyName | <code>string</code> | Name of property to be removed. |

<a name="MetaDataPropertyObject+prepareObjectForTransfer"></a>

### player.prepareObjectForTransfer(transferType)
Prepares the object for transfer according to the metadata instructions.

**Kind**: instance method of [<code>Player</code>](#Player)  
**Overrides**: [<code>prepareObjectForTransfer</code>](#MetaDataPropertyObject+prepareObjectForTransfer)  

| Param | Type | Description |
| --- | --- | --- |
| transferType | <code>string</code> | Prepare it for which transfer type. |

<a name="MetaDataPropertyObject+preparePropertyForTransfer"></a>

### player.preparePropertyForTransfer(transferType, property)
Prepares a parameter for transfer according to the metadata instructions.

**Kind**: instance method of [<code>Player</code>](#Player)  
**Overrides**: [<code>preparePropertyForTransfer</code>](#MetaDataPropertyObject+preparePropertyForTransfer)  

| Param | Type | Description |
| --- | --- | --- |
| transferType | <code>string</code> | Prepare it for which transfer type. |
| property | <code>string</code> | Property name |

<a name="PlayerState"></a>

## PlayerState ⇐ [<code>MetaDataPropertyObject</code>](#MetaDataPropertyObject)
Class to contain details about player state. Used to route player logic properly.

**Kind**: global class  
**Extends**: [<code>MetaDataPropertyObject</code>](#MetaDataPropertyObject)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of PlayerState |


* [PlayerState](#PlayerState) ⇐ [<code>MetaDataPropertyObject</code>](#MetaDataPropertyObject)
    * [new PlayerState(name, [properties])](#new_PlayerState_new)
    * [.addProperty(propertyName, data)](#MetaDataPropertyObject+addProperty)
    * [.removeProperty(propertyName)](#MetaDataPropertyObject+removeProperty)
    * [.prepareObjectForTransfer(transferType)](#MetaDataPropertyObject+prepareObjectForTransfer)
    * [.preparePropertyForTransfer(transferType, property)](#MetaDataPropertyObject+preparePropertyForTransfer)

<a name="new_PlayerState_new"></a>

### new PlayerState(name, [properties])
Creates a PlayerState with a name and properties


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of PlayerState |
| [properties] | [<code>object.&lt;Data&gt;</code>](#Data) | Data properties to add to PlayerState |

<a name="MetaDataPropertyObject+addProperty"></a>

### playerState.addProperty(propertyName, data)
Adds a property and the correct metadata.

**Kind**: instance method of [<code>PlayerState</code>](#PlayerState)  
**Overrides**: [<code>addProperty</code>](#MetaDataPropertyObject+addProperty)  

| Param | Type | Description |
| --- | --- | --- |
| propertyName | <code>string</code> | Name of the property to be set |
| data | [<code>Data</code>](#Data) | Object containing data and metadata for the property. |

<a name="MetaDataPropertyObject+removeProperty"></a>

### playerState.removeProperty(propertyName)
Removes a property and the metadata.

**Kind**: instance method of [<code>PlayerState</code>](#PlayerState)  
**Overrides**: [<code>removeProperty</code>](#MetaDataPropertyObject+removeProperty)  

| Param | Type | Description |
| --- | --- | --- |
| propertyName | <code>string</code> | Name of property to be removed. |

<a name="MetaDataPropertyObject+prepareObjectForTransfer"></a>

### playerState.prepareObjectForTransfer(transferType)
Prepares the object for transfer according to the metadata instructions.

**Kind**: instance method of [<code>PlayerState</code>](#PlayerState)  
**Overrides**: [<code>prepareObjectForTransfer</code>](#MetaDataPropertyObject+prepareObjectForTransfer)  

| Param | Type | Description |
| --- | --- | --- |
| transferType | <code>string</code> | Prepare it for which transfer type. |

<a name="MetaDataPropertyObject+preparePropertyForTransfer"></a>

### playerState.preparePropertyForTransfer(transferType, property)
Prepares a parameter for transfer according to the metadata instructions.

**Kind**: instance method of [<code>PlayerState</code>](#PlayerState)  
**Overrides**: [<code>preparePropertyForTransfer</code>](#MetaDataPropertyObject+preparePropertyForTransfer)  

| Param | Type | Description |
| --- | --- | --- |
| transferType | <code>string</code> | Prepare it for which transfer type. |
| property | <code>string</code> | Property name |

<a name="Server"></a>

## Server
Server class, manages the express server which uses the websockets to run the game.

**Kind**: global class  

* [Server](#Server)
    * [new Server(port)](#new_Server_new)
    * [.setGame(game)](#Server+setGame)
    * [.addSocketClient(client)](#Server+addSocketClient)
    * [.removeSocketClient(client)](#Server+removeSocketClient)

<a name="new_Server_new"></a>

### new Server(port)
Creates server and automatically starts server on this port.


| Param | Type | Description |
| --- | --- | --- |
| port | <code>number</code> | Port number to start the server on. |

<a name="Server+setGame"></a>

### server.setGame(game)
Sets the game to be used by the server.

**Kind**: instance method of [<code>Server</code>](#Server)  

| Param | Type | Description |
| --- | --- | --- |
| game | <code>\*</code> | Game to be used by the server. |

<a name="Server+addSocketClient"></a>

### server.addSocketClient(client)
Add websocket client to this server

**Kind**: instance method of [<code>Server</code>](#Server)  

| Param | Type |
| --- | --- |
| client | <code>WebSocket</code> | 

<a name="Server+removeSocketClient"></a>

### server.removeSocketClient(client)
Remove websocket client from this server

**Kind**: instance method of [<code>Server</code>](#Server)  

| Param | Type |
| --- | --- |
| client | <code>WebSocket</code> | 

<a name="TransferMetaData"></a>

## TransferMetaData : <code>object</code>
Metadata about how to process the data for transfer.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [include] | <code>boolean</code> | Whether to include this data |
| [transform] | <code>function</code> | How to transform the data before sending |

<a name="Data"></a>

## Data : <code>object</code>
Data that includes metadata

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>any</code> | The data to be added as a property |
| *<Data> | [<code>TransferMetaData</code>](#TransferMetaData) | How to handle the data during this type of data transfer |

