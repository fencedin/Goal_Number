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
    //console.log(newGame.get('fullName'));
    return newGame;
  }
});


// --------CONTROLLERS---------------------
App.GameController = Ember.ObjectController.extend({
  actions: {
    add: function(){
      var num = this.get('number');
      num += Math.floor((Math.random() * 9) + 1);
      var current = this.get('model');
      current.set('number', num)
      current.save
      console.log(this.get('number'));
    },
    sub: function(){
      var num = this.get('number');
      num -= Math.floor((Math.random() * 9) + 1);
      var current = this.get('model');
      current.set('number', num)
      current.save
      console.log(this.get('number'));
    },
    tim: function(){
      var num = this.get('number');
      num *= Math.floor((Math.random() * 9) + 1);
      var current = this.get('model');
      current.set('number', num)
      current.save
      console.log(this.get('number'));
    },
    div: function(){
      var num = this.get('number');
      num /= Math.floor((Math.random() * 9) + 1);
      num = Math.floor(num);
      var current = this.get('model');
      current.set('number', num)
      current.save
      console.log(this.get('number'));
    }
  }
});

App.Game = Ember.Object.extend({
  number: null,
  goal: null,
  rand: null,
  fullName: function() {
    return this.get('number') + ' ' + this.get('goal');
  }.property('number', 'goal'),
  randNum: function() {
    return Math.floor((Math.random() * 9) + 1);
  }.property('rand')
});

var newGame = App.Game.create({
  number: 1,
  goal:  1000
});
