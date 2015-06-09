TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST['cards/show'],

  className: 'draggable-card',

  events: {
    'click .glyphicon': 'removeCard'
  },

  attributes: function () {
    return { 'data-id': this.model.id };
  },

  render: function () {
    var renderedContent = this.template({ card: this.model });
    this.$el.html(renderedContent);
    return this;
  },

  removeCard: function (event) {
    console.log('propagation');
    event.stopPropagation();
    this.model.destroy({
      success: function () {
        console.log("destroyed")
      }
    });
    this.remove();
  }

});
