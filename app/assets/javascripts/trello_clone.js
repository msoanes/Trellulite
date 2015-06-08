window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var boards = new this.Collections.Boards();
    var newRouter = new this.Routers.Router({
      collection: boards,
      $rootEl: $('#main')
    });
    Backbone.history.start();

  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
