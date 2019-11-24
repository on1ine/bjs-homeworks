'use strict';

const dataTime = () => new Date().toLocaleTimeString('ru-RU', {
  hour: 'numeric',
  hour12: false,
  minute: 'numeric'
});

const setDailyRhythm = (wakeUpTime, bedTime) => {
  const wakeUp = () => console.log('Доброе утро, Вася.');
  const goToSleep = () => console.log('Спокойной ночи, Вася!');

  const morningAlarm = setAlarm(wakeUpTime, wakeUp);
  const nightAlarm = setAlarm(bedTime, goToSleep);

  setInterval(morningAlarm, 1000);
	setInterval(nightAlarm, 1000);
};

const setAlarm = (time, callback) => () => {
  let currentTime = dataTime();
  return time === currentTime ? callback() : undefined;
}

setDailyRhythm("18:20", "18:21");


// const goodMorning = () => alert('Доброе утро!'),
// 	checkTime = setAlarm('07:00', goodMorning);

// /*
// 	передаём в checkTime информацию о 
// 	текущем времени системы. Так как 07:00 и 07:30,
// 	goodMorning не вызывается
// */
// checkTime('07:30');

// checkTime('07:00'); // Доброе утро