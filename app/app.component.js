(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'root',
      template: '<h1>App up and running, first try with angular 2</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));