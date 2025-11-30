/*/ import ical
const ical = require('node-ical');

// do stuff in an async function
;(async () => {
    // load and parse this file without blocking the event loop
    const events = await ical.async.parseFile('example-calendar.ics');

    // you can also use the async lib to download and parse iCal from the web
    const webEvents = await ical.async.fromURL('http://lanyrd.com/topics/nodejs/nodejs.ics');
    // you can pass standard fetch() options (e.g. headers, signal for timeout)
    // Example: 5s timeout
    const ac = new AbortController();
    setTimeout(() => ac.abort(), 5000);
    const headerWebEvents = await ical.async.fromURL(
        'http://lanyrd.com/topics/nodejs/nodejs.ics',
        { headers: { 'User-Agent': 'API-Example/1.0' }, signal: ac.signal }
    );

    // parse iCal data without blocking the main loop for extra-large events
    const directEvents = await ical.async.parseICS(`
BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:Hey look! An example event!
DTSTART;TZID=America/New_York:20130802T103400
DTEND;TZID=America/New_York:20130802T110400
DESCRIPTION: Do something in NY.
UID:7014-1567468800-1567555199@peterbraden@peterbraden.co.uk
END:VEVENT
END:VCALENDAR
    `);
})()
    .catch(console.error.bind());

// old fashioned callbacks cause why not

// parse a file with a callback
ical.async.parseFile('example-calendar.ics', function(err, data) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(data);
});*/

// or a URL
ical.async.fromURL('https://calendar.proton.me/api/calendar/v1/url/8Lzh34HOC6nQRK1pY4VRi2r6C4h9tZsgKOn9ZaKQ7VJWDgZOcecT8HFeyOOnbJOSTkyUIlf0H0LMeFwaPtZWyA==/calendar.ics?CacheKey=N_tUScdjs3E9d3oOy8iBfA%3D%3D&PassphraseKey=QaOgLkhQU1MTfM4b4IZ2SHXxloH4OU8nmR__wzB65yU%3D', function(err, data) { console.log(data); });

// or directly
/*ical.async.parseICS(`
BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:Hey look! An example event!
DTSTART;TZID=America/New_York:20130802T103400
DTEND;TZID=America/New_York:20130802T110400
DESCRIPTION: Do something in NY.
UID:7014-1567468800-1567555199@peterbraden@peterbraden.co.uk
END:VEVENT
END:VCALENDAR
`, function(err, data) { console.log(data); });*/