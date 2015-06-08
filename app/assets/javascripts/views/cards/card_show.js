TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST['cards/show'],

  className: 'draggable-card',

  render: function () {
    var renderedContent = this.template({ card: this.model });
    this.$el.html(renderedContent);
    return this;
  },

});
