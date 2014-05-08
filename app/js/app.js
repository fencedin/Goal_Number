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
      game.set("win",    false);
      game.set("clicks", 0);

      game.save
    },
    doWork: function(boxNumber) {
      var num = this.get('number');
      var clicks = this.get('clicks');
      clicks += 1;
      var score = this.get('score');

      var rand1 = this.get('randNum1');
      var rand2 = this.get('randNum2');
      var rand3 = this.get('randNum3');
      var rand4 = this.get('randNum4');

      var box1 = this.get('randBox1');
      var truebox1 = this.get('box1');
      var box2 = this.get('randBox2');
      var truebox2 = this.get('box2');
      var box3 = this.get('randBox3');
      var truebox3 = this.get('box3');
      var box4 = this.get('randBox4');
      var truebox4 = this.get('box4');

      if (boxNumber === "1") {
        if      (Math.floor(truebox1) === 1)  { num += Math.floor(rand1) }
        else if (Math.floor(truebox1) === 2)  { num -= Math.floor(rand1) }
        else if (Math.floor(truebox1) === 3)  { num *= Math.floor(rand1) }
        else  /*(Math.floor(truebox1) === 4)*/{ num /= Math.floor(rand1) }
      }
      else if (boxNumber === "2") {
        if      (Math.floor(truebox2) === 1)  { num += Math.floor(rand2) }
        else if (Math.floor(truebox2) === 2)  { num -= Math.floor(rand2) }
        else if (Math.floor(truebox2) === 3)  { num *= Math.floor(rand2) }
        else  /*(Math.floor(truebox2) === 4)*/{ num /= Math.floor(rand2) }
      }
      else if (boxNumber === "3") {
        if      (Math.floor(truebox3) === 1)  { num += Math.floor(rand3) }
        else if (Math.floor(truebox3) === 2)  { num -= Math.floor(rand3) }
        else if (Math.floor(truebox3) === 3)  { num *= Math.floor(rand3) }
        else  /*(Math.floor(truebox3) === 4)*/{ num /= Math.floor(rand3) }
      }
      num = Math.floor(num);
      var current = this.get('model');

      current.set('number', num)
      current.set('clicks', clicks)

      current.set('rand1',  rand1)
      current.set('rand2',  rand2)
      current.set('rand3',  rand3)
      current.set('rand4',  rand4)

      current.set('box1',  box1)
      current.set('box2',  box2)
      current.set('box3',  box3)
      current.set('box4',  box4)

      current.save
      if (current.get('number') === 1000) {
        score = Math.floor((Math.pow(((1004 - clicks)/(clicks/100)), 3))/1000000);
        current.set('score', score);
        current.set('win',   true);
      }
    }
  }
});


// ------MODELS-----------------------
App.Game = Ember.Object.extend({
  number: null,
  goal:   null,
  rand1:  null,
  rand2:  null,
  rand3:  null,
  clicks: null,
  score:  null,
  win:    null,
  box1:   null,
  box2:   null,
  box3:   null,

  randNum1: function() {
    return ((Math.random() * 9) + 1);
  }.property('rand1'),
  randNum2: function() {
    return ((Math.random() * 9) + 1);
  }.property('rand2'),
  randNum3: function() {
    return ((Math.random() * 9) + 1);
  }.property('rand3'),
  randNum4: function() {
    return ((Math.random() * 9) + 1);
  }.property('rand4'),

  randBox1: function() {
    return ((Math.random() * 4) + 1);
  }.property('box1'),
  setBox1: function() {
    if      (Math.floor(this.box1) === 1) { return "+" }
    else if (Math.floor(this.box1) === 2) { return "-" }
    else if (Math.floor(this.box1) === 3) { return "x" }
    else    { return "/" }
  }.property('box1'),

  randBox2: function() {
    return ((Math.random() * 4) + 1);
  }.property('box2'),
  setBox2: function() {
    if      (Math.floor(this.box2) === 1) { return "+" }
    else if (Math.floor(this.box2) === 2) { return "-" }
    else if (Math.floor(this.box2) === 3) { return "x" }
    else    { return "/" }
  }.property('box2'),

  randBox3: function() {
    return ((Math.random() * 4) + 1);
  }.property('box3'),
  setBox3: function() {
    if      (Math.floor(this.box3) === 1) { return "+" }
    else if (Math.floor(this.box3) === 2) { return "-" }
    else if (Math.floor(this.box3) === 3) { return "x" }
    else    { return "/" }
  }.property('box3')
});

var newGame = App.Game.create({
  number: 1,
  goal:   1000,
  rand1:  1,
  rand2:  1,
  rand3:  1,
  clicks: 0,
  score:  0,
  win:    false,
  box1:   1,
  box2:   2,
  box3:   3,
});


// ------HELPERS-----------------------
Ember.Handlebars.helper('floor', function(input) {
  return Math.floor(input);
});
