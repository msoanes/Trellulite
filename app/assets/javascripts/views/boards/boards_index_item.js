TrelloClone.Views.BoardsIndexItem = Backbone.View.extend({
  template: JST['boards/index_item'],

  className: 'col-md-3 my-panel board-panel',

  events: {
    'click': 'visitBoard'
  },

  render: function () {
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);
    return this;
  },

  visitBoard: function () {
    Backbone.history.navigate('/boards/' + this.model.get('id'), {
      trigger: true
    })
  }
});
