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
      var number = $('#num').val();
      console.log(this)
      console.log(this.number)
      var store = this.get('store');
      var team = store.createRecord('team',{
          name : name
      });
      team.save();
      this.transitionToRoute('teams');
    }
  }
});

