module.exports = (function (){
    window.jQuery = $ = require('jquery');

    var Server = function(uri) {
        this._websocket = new WebSocket(uri, 'echo-protocol');

        this._websocket.onopen = function(evt) {
            console.log("Connecting to " + uri);
        };

        this._websocket.onclose = function(evt) {
            console.log("Disconnecting");
        };

        this._websocket.onmessage = function(evt) {
            console.log(evt);
        };

        this._websocket.onerror = function(evt) {
            console.log(evt);
        };
    };

    Server.prototype.send = function() {

    };

    Server.prototype.update = function() {

    };

    Server.prototype.render = function() {

    };

    return Server;
})();
