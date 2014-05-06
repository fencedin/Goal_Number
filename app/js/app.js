App = Ember.Application.create({
  LOG_TRANSITIONS: true
});
// App.ApplicationAdapter = DS.FixtureAdapter.extend();

// ------ROUTER-----------------------
App.Router.map(function() {
  this.resource('index', { path: '/' }, function(){
    this.resource('game', {path: '/game'});
  });
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
    start: function() {
      console.log("hello");
      var current = this.get('model');
      current.set('win', false);
      current.set('number', 1);
      current.save
      this.transitionToRoute('index.index');
    },
    add: function() {
      var num = this.get('number');
      var rand = this.get('randNum');
      num += Math.floor(rand);
      num = Math.floor(num);
      var current = this.get('model');
      current.set('number', num)
      current.set('rand', rand)
      current.save
      if (current.get('number') === 1000) { current.set('win', true) }
    },
    sub: function() {
      var num = this.get('number');
      var rand = this.get('randNum');
      num -= Math.floor(rand);
      num = Math.floor(num);
      var current = this.get('model');
      current.set('number', num)
      current.set('rand', rand)
      current.save
      if (current.get('number') === 1000) { current.set('win', true) }
    },
    tim: function() {
      var num = this.get('number');
      var rand = this.get('randNum');
      num *= Math.floor(rand);
      num = Math.floor(num);
      var current = this.get('model');
      current.set('number', num)
      current.set('rand', rand)
      current.save
      if (current.get('number') === 1000) { current.set('win', true) }
    },
    div: function() {
      var num = this.get('number');
      var rand = this.get('randNum');
      num /= Math.floor(rand);
      num = Math.floor(num);
      var current = this.get('model');
      current.set('number', num)
      current.set('rand', rand)
      current.save
      if (current.get('number') === 1000) { current.set('win', true) }
    }
  }
});

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


Ember.Handlebars.helper('floor', function(input) {
  return Math.floor(input);
});
