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
      var randa = this.get('randNumA');
      var rands = this.get('randNumS');
      var randt = this.get('randNumT');
      var randd = this.get('randNumD');
      if      (op === '+')  { num += Math.floor(randa) }
      else if (op === '-')  { num -= Math.floor(rands) }
      else if (op === '*')  { num *= Math.floor(randt) }
      else  /*(op === '/')*/{ num /= Math.floor(randd) }
      num = Math.floor(num);
      var current = this.get('model');
      current.set('number', num)
      current.set('randa', randa)
      current.set('rands', rands)
      current.set('randt', randt)
      current.set('randd', randd)
      current.save
      if (current.get('number') === 1000) { current.set('win', true) }
    }
  }
});


// ------MODELS-----------------------
App.Game = Ember.Object.extend({
  number: null,
  goal: null,
  randa: null,
  rands: null,
  randt: null,
  randd: null,
  win: null,
  randNumA: function() {
    return ((Math.random() * 9) + 1);
  }.property('randa'),
  randNumS: function() {
    return ((Math.random() * 9) + 1);
  }.property('rands'),
  randNumT: function() {
    return ((Math.random() * 9) + 1);
  }.property('randt'),
  randNumD: function() {
    return ((Math.random() * 9) + 1);
  }.property('randd')
});

var newGame = App.Game.create({
  number: 1,
  goal:  1000,
  randa: 1,
  rands: 1,
  randt: 1,
  randd: 1,
  win: false
});


// ------HELPERS-----------------------
Ember.Handlebars.helper('floor', function(input) {
  return Math.floor(input);
});
