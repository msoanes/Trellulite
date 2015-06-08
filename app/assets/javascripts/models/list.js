TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: '/api/lists',

  parse: function (payload) {
    var collection = this;
    if (payload.cards) {
      _.each(payload.cards, function (cardData) {
        var card = new TrelloClone.Models.Card(cardData, { parse: true });
        collection.cards().add(card);
        delete payload.cards;
      });
    }
    return payload
  },

  cards: function () {
    if (!this._cards) {
      this._cards = new TrelloClone.Collections.Cards();
    }
    return this._cards;
  }
});
