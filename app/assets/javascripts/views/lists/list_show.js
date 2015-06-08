TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST['lists/show'],

  render: function () {
    console.log('rendering');
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
