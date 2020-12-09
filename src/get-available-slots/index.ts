import Axios, { AxiosResponse } from 'axios';
import url from 'url';
import moment from 'moment';
const JSSoup = require('jssoup').default;

export interface ICalendarRequest {
  cal: string;
  ini: string;
  service: string;
  jumpDate?: string;
}

export interface ICalendars {
  swpsystemb: ICalendarRequest;
  swpsystemc: ICalendarRequest;
}

export interface ISlotResponse {
  startTime: string;
  system: string;
  bookingLink: string;
}

const calendars = {
  swpsystemb: {
    cal: '21617379-33ba-41d3-b341-50b7fac01693',
    ini: '1596626159288',
    service: 'jsid21231',
  },
  swpsystemc: {
    cal: '693eae8c-0144-407d-92f2-725867e5be04',
    ini: '1602684055670',
    service: 'jsid8744009',
  },
};

const fetchAvailableSlots = async (calendarName: keyof ICalendars, dayInc: number | null = null) => {
  const calendar = calendars[calendarName];
  let axios = Axios.create({
    baseURL: getBaseUrl(calendarName),
  });
  const params: ICalendarRequest = calendar;

  if (dayInc) {
    const jumpDate = moment().add(dayInc, 'days').format('YYYY-MM-DD');

    console.log('jumpDate', jumpDate);
    params.jumpDate = jumpDate;
  }

  const res = await axios.get('/service/jsps/cal.jsp', { params });

  // console.log();

  return mapToAvailableSlots(res, calendarName);
};

const getBaseUrl = (calendarName: string) => {
  return `https://${calendarName}.youcanbook.me`;
};

const mapToAvailableSlots = (response: AxiosResponse, calendarName: keyof ICalendars): { availableSlots: ISlotResponse[]; logText: string } => {
  const availableSlots = [] as ISlotResponse[];
  var soup = new JSSoup(response.data);
  const body = soup.find('body');
  const dayElements = body.findAll('div', 'gridDay') as any[];

  dayElements.forEach((day, i) => {
    // const freeSlots = day.findAll('div', 'gridFree') as any[];
    const freeSlots = day.findAll('div', { class: ['gridFree', 'gridSlot'] }) as any[];

    freeSlots.forEach((freeSlot) => {
      const linkElem = freeSlot.find('a');

      // ToDo find proper way to this s
      const bookingLink = getBaseUrl(calendarName) + linkElem.attrs.href.replace(/&amp;/g, '&');
      const bookingUrl = url.parse(bookingLink, true);

      const bookingSlot = bookingUrl?.query?.slot;

      const startTime = moment.unix(+bookingSlot / 1000).toString();
      availableSlots.push({ startTime, bookingLink, system: calendarName });
      //
    });
  });

  const logText = `Checked ${dayElements.length} days on ${calendarName} found ${availableSlots.length} available slots
  ${response.request.res.responseUrl}`;
  return { availableSlots, logText };
};

const getAvailableSlots = async () => {
  let availableSlots = [] as ISlotResponse[];

  let dayElements = [] as any[];

  const fetchFnCalls = [];
  fetchFnCalls.push(fetchAvailableSlots('swpsystemb'));
  fetchFnCalls.push(fetchAvailableSlots('swpsystemb', 7));
  fetchFnCalls.push(fetchAvailableSlots('swpsystemc'));
  fetchFnCalls.push(fetchAvailableSlots('swpsystemc', 7));

  const responses = await Promise.all(fetchFnCalls);

  responses.forEach((res) => {
    var soup = new JSSoup(res);
    console.log(res.logText);
    availableSlots = availableSlots.concat(res.availableSlots);
  });

  return availableSlots;
};

export default getAvailableSlots;
