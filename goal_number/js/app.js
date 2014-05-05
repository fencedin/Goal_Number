App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {

  }
});




App.Game.FIXTURES = [
 {
   id: 1,
   number: '1',
   goal: '1000'
 }
];
