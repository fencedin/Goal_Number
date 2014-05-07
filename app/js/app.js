App = Ember.Application.create({
  LOG_TRANSITIONS: true
});


// ------ROUTER-----------------------
App.Router.map(function() {
  this.resource('game', {path: '/'});
});


// --------ROUTES---------------------
App.GameRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: 'main' });
  },
  model: function() {
    return newGame;
  }
});


// --------CONTROLLERS---------------------
App.GameController = Ember.ObjectController.extend({
  actions: {
    startNew: function() {
      var game = this.get('model');
      game.set("number", 1);
      game.set("win", false);
      game.save
    },
    doWork: function(op) {
      var num = this.get('number');
      var rand = this.get('randNum');
      if      (op === '+') { num = num + Math.floor(rand) }
      else if (op === '-') { num = num - Math.floor(rand) }
      else if (op === '*') { num = num * Math.floor(rand) }
      else if (op === '/') { num = num / Math.floor(rand) }
      num = Math.floor(num);
      var current = this.get('model');
      current.set('number', num)
      current.set('rand', rand)
      current.save
      if (current.get('number') === 1000) { current.set('win', true) }
    },
    add: function() {
      App.GameController.doWork("+");
    },
    sub: function() {
      App.GameController.doWork("-");
    },
    tim: function() {
      App.GameController.doWork("*");
    },
    div: function() {
      App.GameController.doWork("/");
    }
  }
});


// ------MODELS-----------------------
App.Game = Ember.Object.extend({
  number: null,
  goal: null,
  rand: null,
  win: null,
  randNum: function() {
    return ((Math.random() * 9) + 1);
  }.property('rand')
});

var newGame = App.Game.create({
  number: 1,
  goal:  1000,
  rand: 1,
  win: false
});


// ------HELPERS-----------------------
Ember.Handlebars.helper('floor', function(input) {
  return Math.floor(input);
});
