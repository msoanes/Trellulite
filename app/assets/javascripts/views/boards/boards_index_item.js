TrelloClone.Views.BoardsIndexItem = Backbone.View.extend({
  template: JST['boards/index_item'],

  render: function () {
    console.log('rendering');
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
