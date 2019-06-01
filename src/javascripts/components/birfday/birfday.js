import birthdayData from '../../helpers/data/birfdayData';
import util from '../../helpers/util';

const birthdayStringBuilder = (uid) => {
  console.error(uid);
  birthdayData.getBirthdayByUid(uid)
    .then((birthday) => {
      let domString = `<h1>${birthday.date}</h1>`;
      domString += `<img src=${birthday.imageUrl} alt="birthday location">`;
      domString += `<h2>${birthday.location} @ ${birthday.time}</h2>`;
      util.printToDom('event', domString);
    })
    .catch(err => console.error('could not get birthday', err));
};

export default { birthdayStringBuilder };
