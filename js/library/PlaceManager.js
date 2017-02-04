function PlaceManager() {
	this.eventPlace = {
		dateBegin: '',
		dateEnd: '',
		timeBegin: '',
		timeEnd: '',
		eventType: 0,
		peoples: 10,
		totalPrice: 500,
	};

	this.Update = function() {
		if (!parseInt(this.eventPlace.eventType)) {
			this.eventPlace.totalPrice = this.eventPlace.peoples * this.eventPlace.totalPrice;
		} else {
			this.eventPlace.totalPrice = this.eventPlace.totalPrice / this.eventPlace.peoples;
		}
	};
	this.UpdatePrice = function() {
		this.eventPlace.totalPrice = this.eventPlace.peoples * 500;
	};
}