'use strict';
const fs = require('fs');
//const ical = require('ical');
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
 
async function getData() {
  const url = "https://calendar.proton.me/api/calendar/v1/url/8Lzh34HOC6nQRK1pY4VRi2r6C4h9tZsgKOn9ZaKQ7VJWDgZOcecT8HFeyOOnbJOSTkyUIlf0H0LMeFwaPtZWyA==/calendar.ics?CacheKey=N_tUScdjs3E9d3oOy8iBfA%3D%3D&PassphraseKey=QaOgLkhQU1MTfM4b4IZ2SHXxloH4OU8nmR__wzB65yU%3D";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      /*const data = ical.parseICS(response);
 
        for (let k in data) {
            if (data.hasOwnProperty(k)) {
                var ev = data[k];
                if (data[k].type == 'VEVENT') {
                    console.log(`${ev.summary} is in ${ev.location} on the ${ev.start.getDate()} of ${months[ev.start.getMonth()]} at ${ev.start.toLocaleTimeString('en-GB')}`);
        
                }
            }
        }

        return true*/
    }

    const result = await response.json();
    fs.writeFile("./calendarData.ics", result, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File has been saved successfully!');
    });
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

getData();