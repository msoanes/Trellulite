TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    console.log('rendering');
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
