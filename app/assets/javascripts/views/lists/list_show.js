TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],

  className: 'col-md-3 my-panel',

  attributes: function () {
    return { 'data-id': this.model.get('id') }
  },

  events: {
    'sortdeactivate .cards': 'updateOrder'
  },

  initialize: function () {
    this.addCards();

    var cardForm = new TrelloClone.Views.CardForm({
      list: this.model,
      model: new TrelloClone.Models.Card(),
      collection: this.model.cards()
    });
    this.addSubview('.new-card', cardForm);

    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.cards(), 'add', this.addCard);
  },

  render: function () {
    var renderedContent = this.template({ list: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    this.$('.cards').sortable({connectWith: '.cards'});
    return this;
  },

  addCards: function () {
    var view = this;
    this.model.cards().each(function (model) {
      view.addCard(model);
    });
  },

  addCard: function (model) {
    var cardView = new TrelloClone.Views.CardShow({
      model: model
    });
    this.addSubview('.cards', cardView);
  },

  updateOrder: function (event) {
    event.stopPropagation();
    var list_id = this.model.get('id');
    var sortedIDs = this.$('.cards').sortable('toArray', { attribute: 'data-id'});
    _(sortedIDs).each(function(el, idx) {
      var card = new TrelloClone.Models.Card({
        id: el,
        ord: idx,
        list_id: list_id
      });
      card.save();
    });
  }
});
