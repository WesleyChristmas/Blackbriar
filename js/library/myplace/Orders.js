function OrderManager() {
	this.All = {};
	this.NewOrder = [];
	this.Payed = {};
	this.filter = 'new';

	this.Helpers = {
		orderStatus: [
			{ type: 'NEW', statusText: 'Поздравляем у Вас новый заказ', statusEvent: 'Принять заказ' },
			{ type: 'SHOW', statusText: 'Назначен показ площадки', statusEvent: 'До показа площадки осталось:' },
			{ type: 'WAIT', statusText: 'Ожидаем решение клиента', statusEvent: 'До конца срока принятия решения осталось:' },
		]
	};

	/**
	 * Формирвоание статуса
	 *
	 * @param	{int} [index] - id статуса
	 * @returns	{object} - { type: 'NEW', statusText: 'Поздравляем у Вас новый заказ', statusEvent: 'Принять заказ' } 
	 */
	this.get_orderStatus = function(index) {
		return this.Helpers.orderStatus[index];
	};
	/**
	 * Обновление статуса заявки
	 *
	 * @param	{int} [index] - id статуса
	 * @example
	 *		{ type: 'NEW', statusText: 'Поздравляем у Вас новый заказ', statusEvent: 'Принять заказ' } 
	 */
	this.update_status = function(index) {
		this.NewOrder[0].statusOrder = this.get_orderStatus(index);
		/* TODO: AJAX status-update */
	};
	
	this.updateEventStatus = function() {
		this.NewOrder[0].statusOrder.statusEvent = '';
	};
	/**
	 * Получение данных о площадке по данному пользователю
	 *
	 */
	this.GetOrdersData = function() {
		/* TODO: AJAX status-update */
		var new_order_data = {
			date: '25.08.2017',
			placeName: 'Пати-кафе метро Черкизовская',
			statusOrder: this.get_orderStatus(0),
			time: -1,
			clientData: {
				name: 'Светлана',
				email: 'setlanka@mail.ru',
				phone: '+79168345476',
				peoples: '35',
				total_price: '30 000',
			},
			eventData: {
				name: 'День Рождения',
				time: 'с 14:00 до 00:00',
				price: '10 часов(3000р/ч)',
			}
		};
		this.NewOrder.push(new_order_data);
	};

	this.GetOrdersData();
}