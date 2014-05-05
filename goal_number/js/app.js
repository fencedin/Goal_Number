App = Ember.Application.create({
  LOG_TRANSITIONS: true
});
App.ApplicationAdapter = DS.FixtureAdapter.extend();

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
    return this.store.find('game');
  }
});


// --------CONTROLLERS---------------------
App.GameController = Ember.ArrayController.extend({
  actions: {
    add1: function(){
      var store = this.get('store');
      var num = 1

      var game = this.get('model');
      console.log(game)
      debugger;
      var currentnum =  game['number']


      console.log(currentnum);


    }
  }
});

