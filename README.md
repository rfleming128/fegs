## Classes

<dl>
<dt><a href="#MetaDataPropertyObject">MetaDataPropertyObject</a></dt>
<dd><p>Extenible class for including metadata on how to handle the data on an object for transfer.</p>
</dd>
<dt><a href="#Server">Server</a></dt>
<dd><p>Server class, manages the express server which uses the websockets to run the game.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#TransferMetaData">TransferMetaData</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Data">Data</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="MetaDataPropertyObject"></a>

## MetaDataPropertyObject
Extenible class for including metadata on how to handle the data on an object for transfer.

**Kind**: global class  

* [MetaDataPropertyObject](#MetaDataPropertyObject)
    * [new MetaDataPropertyObject(properties)](#new_MetaDataPropertyObject_new)
    * [.addProperty(propertyName, data)](#MetaDataPropertyObject+addProperty)

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
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [include] | <code>boolean</code> | Whether to include this data |
| [dataTransform] | <code>function</code> | How to transform the data before sending |

<a name="Data"></a>

## Data : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>any</code> | The data to be added as a property |
| *<Data> | [<code>TransferMetaData</code>](#TransferMetaData) | How to handle the data during this type of data transfer |

