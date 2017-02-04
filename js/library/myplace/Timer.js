function Timer() {
	this.resutl = '';
	this.interval = {};

	this.Helpers = {
		day1: 1,
		day2: [2, 3, 4],
		day3: 5,
		hour1: [1, 21],
		hour2: [2, 3, 4, 22, 23, 24],
		hour3: [0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		minsec1: [0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39, 40, 45, 46, 47, 48, 49, 50, 55, 56, 57, 58, 59],
		minsec2: [1, 21, 31, 41, 51],
		minsec3: [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54],
	};

	/**
	 * Оставшееся время заявки/показа
	 *
	 * @param	{int} [endtime] - конечное время в микросекундах
	 * @return	{int} [t] - оставшееся время в микросекундах
	 */
	this.getTimeRemaining = function (endtime){
		var t = endtime - new Date();

		var seconds = this.getTimerSeconds( Math.floor( (t/1000) % 60 ) );
		var minutes = this.getTimerMinuts( Math.floor( (t/1000/60) % 60 ) );
		var hours = this.getTimerHours( Math.floor( (t/(1000*60*60)) % 24 ) );
		var days = this.getTimerDays( Math.floor( t/(1000*60*60*24) ) );

		this.resutl = days + ' ' + hours + ' ' + minutes + ' ' + seconds;
		if (this.resutl.trim() === '') { this.resutl = 'Идет какая-то хрень'; }

		return t;
	};
	/**
	* Задать текст результата таймера
	*
	*@param	{string} [newresult] - текст
	*/
	this.set_result = function (newresult) { this.resutl = newresult; }
	/**
	 * Количество оставшихся дней
	 *
	 * @param	{int} [d] - оставшиеся дни
	 * @return	{string} - 17 дней
	 * @return	{string} - '' если дней 0
	 */
	this.getTimerDays = function(d) {
		var day = '';
    
		if (d < 0) { return ''; }
		if (this.Helpers.day1 === d) { day = ' день'; }
		if (this.Helpers.day2.indexOf(d) >= 0) { day = ' дня'; }
		if (this.Helpers.day3 === d) { day = ' дней'; }
    
		return day;
	};
	/**
	 * Количество оставшихся часов
	 *
	 * @param	{int} [h] - оставшиеся часы
	 * @return	{string} - 17 часов
	 * @return	{string} - '' если часов 0
	 */
	this.getTimerHours = function(h) {
		var hours = '';

		if (h < 0) { return ''; }
		if (this.Helpers.hour1.indexOf(h) >= 0) { hours = ' час'; }
		if (this.Helpers.hour2.indexOf(h) >= 0) { hours = ' часа'; }
		if (this.Helpers.hour3.indexOf(h) >= 0) { hours = ' часов'; }

		return ('0' + h).slice(-2) + hours;
	};
	/**
	 * Количество оставшихся минут
	 *
	 * @param	{int} [m] - оставшиеся минуты
	 * @return	{string} - 17 минут
	 * @return	{string} - '' если минут 0
	 */
	this.getTimerMinuts = function(m) {
		var minuts = '';
    
		if (m < 0) { return ''; }
		if (this.Helpers.minsec1.indexOf(m) >= 0) { minuts = ' минут'; }
		if (this.Helpers.minsec2.indexOf(m) >= 0) { minuts = ' минута'; }
		if (this.Helpers.minsec3.indexOf(m) >= 0) { minuts = ' минуты'; }
    
		return ('0' + m).slice(-2) + minuts;
	};
	/**
	 * Тестовый метод количество оставшихся секунд
	 *
	 * @param	{int} [s] - оставшиеся секунды
	 * @return	{string} - 17 секунд
	 * @return	{string} - '' если секунд 0
	 */
	this.getTimerSeconds = function(s) {
		var seconds = '';
    
		if (s < 0) { return ''; }
		if (this.Helpers.minsec1.indexOf(s) >= 0) { seconds = ' секунд'; }
		if (this.Helpers.minsec2.indexOf(s) >= 0) { seconds = ' секунда'; }
		if (this.Helpers.minsec3.indexOf(s) >= 0) { seconds = ' секунды'; }
    
		return ('0' + s).slice(-2) + seconds;
	};
	/**
	 * инициализация таймера
	 *
	 */
	this.init = function () {
		var temp = new Date();
		temp.setSeconds(temp.getSeconds() + 10);

		var interval = this.interval(function(obj){
			var t = this.getTimeRemaining(temp.getTime());
			if (t <= 0){
				this.interval.cancel(interval);
			}
			$scope.$apply();
		}, 1000);
	};
}