window.jQuery = $ = require('jquery');
var Game = require("./Game.js");
var Settings = require("./Settings.js");
var Server = require("./Server.js");

window.onload = function() {
    var previousTimeStamp = null;

    var game = new Game($("body"));
    var server = new Server("ws://localhost/");

    var loop = function(timeStamp) {
        if(!previousTimeStamp) previousTimeStamp = timeStamp;
        var elapsedTimeSeconds = (timeStamp - previousTimeStamp) / 1000.0;

        game.update(elapsedTimeSeconds);
        game.render();

        previousTimeStamp = timeStamp;
        window.requestAnimationFrame(loop);
    };
    window.requestAnimationFrame(loop);
};
