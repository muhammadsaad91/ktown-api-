const {google} = require('googleapis');
const { beyondcorp } = require('googleapis/build/src/apis/beyondcorp');
require('dotenv').config();
const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const { response } = require('express');
const { json } = require('body-parser');


// Provide the required configuration






    





// Your TIMEOFFSET Offset
// const TIMEOFFSET = for pakistan 
const TIMEOFFSET = '+05:00';

// Get date-time string for calender
const dateTimeForCalander = () => {

    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`;
    }
    let day = date.getDate();
    if (day < 10) {
        day = `0${day}`;
    }
    let hour = date.getHours();
    if (hour < 10) {
        hour = `0${hour}`;
    }
    let minute = date.getMinutes();
    if (minute < 10) {
        minute = `0${minute}`;
    }

    let newDateTime = `${year}-${month}-${day}T${hour}:${minute}:00.000${TIMEOFFSET}`;

    // let event = new Date(Date.parse(newDateTime));

    // start event is 31 march 2023 9am
    let event = new Date(Date.parse('2023-03-31T09:00:00.000+05:00'));

    let startDate = event;
    // Delay in end time is 1
    let endDate = new Date(new Date(startDate).setHours(startDate.getHours()+1));

    return {
        'start': startDate,
        'end': endDate
    }
};

console.log(dateTimeForCalander());

// Insert new event to Google Calendar


let dateTime = dateTimeForCalander();

// Event for Google Calendar this will add event in google calender

//  let name = "test Ad";
//     let email = "";
//     let created_at = `${orderData['created_at']}`;
//     let line_items = `${orderData['line_items']}`;

    // let event = {
    //     'summary': "test Ad",
    //     'description': `Order booked For next 1 hour`,
    //     'start': {
    //         'dateTime': dateTime['start'],
    //         'timeZone': 'Asia/Karachi'
    //     },
    //     'end': {
    //         'dateTime': dateTime['end'],
    //         'timeZone': 'Asia/Karachi'
    //     }
    // };

    // insertEvent(event)
    //     .then((res) => {
    //         console.log(res);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });






















// let name = 'test Ad';

// let event = {
//     'summary': `${name}`,
//     'description': `Order booked For next 1 hour`,
//     'start': {
//         'dateTime': dateTime['start'],
//         'timeZone': 'Asia/Karachi'
//     },
//     'end': {
//         'dateTime': dateTime['end'],
//         'timeZone': 'Asia/Karachi'
//     }
// };

// insertEvent(event)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });









// Get all the events between two dates
const getEvents = async (dateTimeStart, dateTimeEnd) => {

    try {
        let response = await calendar.events.list({
            auth: auth,
            calendarId: calendarId,
            timeMin: dateTimeStart,
            timeMax: dateTimeEnd,
            timeZone: 'Asia/Karachi'
        });
    
        let items = response['data']['items'];
        return items;
    } catch (error) {
        console.log(`Error at getEvents --> ${error}`);
        return 0;
    }
};


// unsomment this code and run it to get all the events in google calender between two dates in json form and get all the events id which is used to delete events from google calender


// let start = '2023-03-30T11:10:00.000Z';
// let end = '2023-03-31T12:10:00.000Z';

// getEvents(start, end)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });









// Delete an event from eventID
const deleteEvent = async (eventId) => {

    try {
        let response = await calendar.events.delete({
            auth: auth,
            calendarId: calendarId,
            eventId: eventId
        });

        if (response.data === '') {
            return 1;
        } else {
            return 0;
        }
    } catch (error) {
        console.log(`Error at deleteEvent --> ${error}`);
        return 0;
    }
};




// Delete events from Google Calendar just add event id in eventId variable and run this code to delete event from google calender event id is in get events commands output






// let eventId = 'gfha1c4o20h9j2jrb210d25270';

// deleteEvent(eventId)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


   






// below code for update the event in google calender just add event id in eventId variable and run this code to update event from google calender event id is in get events commands output


    // let eventId = 'n0f36guruabqdo1hv2v62ddrng';
     
    // let event = {
    //     'summary': `SaAd Updated one Friday Ktown Order`,
    //     'description': `Order booked For next 1 hour   updated`,
    //     'start': {
    //         'dateTime': dateTime['start'],
    //         'timeZone': 'Asia/Karachi'
    //     },
    //     'end': {
    //         'dateTime': dateTime['end'],    
    //         'timeZone': 'Asia/Karachi' 
    //     }
    // };

    // calendar.events.update({
    //     auth: auth,
    //     calendarId: calendarId,
    //     eventId: eventId,
    //     resource: event
    // }, function(err, event) {
    //     if (err) {
    //         console.log('There was an error contacting the Calendar service: ' + err);
    //         return;
    //     }
    //     console.log('Event updated: %s', event.htmlLink);
    // }
    // );

    app.get('/', (req, res) => {



            const fetch = require('node-fetch');
        
    const url = 'https://k-town-rentals.myshopify.com/admin/api/2021-04/orders.json';
    const token = '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'; 
    
    const getOrders = async () => {
        try {
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Shopify-Access-Token': token
                }
            });
            let data = await response.json();
            return data;
        } catch (error) {
            console.log(`Error at getOrders --> ${error}`);
            return 0;
        }
    }
    
    
    getOrders()
        .then((res) => {
            let orders = res['orders'];
            // console.log(orders);
            let orderData = [];
    
    
    
    
    
            for (let i = 0; i < orders.length; i++) {
                let order = orders[i];
                let name = `${order['name']}`;
                let email = `${order['email']}`;
                let created_at = `${order['created_at']}`;
                let title = `${order['line_items'][0]['title']}`;
                let variant = `${order['line_items'][0]['variant_title']}`;
                
    
                let line_items = [];
                let line_item = order['line_items'];
                for (let j = 0; j < line_item.length; j++) {
                    let properties = line_item[j]['properties'];
                    for (let k = 0; k < properties.length; k++) {
                        line_items.push(properties[k]['value']);
                    }
            
    
                    
                 const TIMEOFFSET = '+05:00';
                  let line_item_date_time = line_item[j]['properties'][0]['value'] + 'T' + line_item[j]['properties'][1]['value'] + `:00.000${TIMEOFFSET}`;
                
              
                    
                    line_item_date_time = line_item_date_time.replace(' AM', ':00');
    
                    //  if find Pm so 01 to 07 add 12 to it and than add 12 to it
                    // switch statement 
                    // 01 = 13 so on 
                    // 08 = 20 so on

                    line_item_date_time = line_item_date_time.replace(' PM', ':00');
                    switch (line_item_date_time.slice(11, 13)) {
                        case '01':
                            line_item_date_time = line_item_date_time.slice(0, 11) + '13' + line_item_date_time.slice(13, 19);
                            break;
                        case '02':
                            line_item_date_time = line_item_date_time.slice(0, 11) + '14' + line_item_date_time.slice(13, 19);
                            break;
                        case '03':
                            line_item_date_time = line_item_date_time.slice(0, 11) + '15' + line_item_date_time.slice(13, 19);
                            break;
                        case '04':
                            line_item_date_time = line_item_date_time.slice(0, 11) + '16' + line_item_date_time.slice(13, 19);
                            break;
                        case '05':
                            line_item_date_time = line_item_date_time.slice(0, 11) + '17' + line_item_date_time.slice(13, 19);
                            break;
                        case '06':
                            line_item_date_time = line_item_date_time.slice(0, 11) + '18' + line_item_date_time.slice(13, 19);
                            break;
                        case '07':
                            line_item_date_time = line_item_date_time.slice(0, 11) + '19' + line_item_date_time.slice(13, 19);
                            default:
                                break;
                    }
                    //

    // if include T18 or T19 than this not run otherwise run this
                      
                    if (line_item_date_time.includes('18:00') || line_item_date_time.includes('19:00')) {
                        
                        
                        line_item_date_time = line_item_date_time.replace(':00', ':00');
                        
                        
                    }
                    else {
                        line_item_date_time = line_item_date_time.replace(':00', '');
                    }
           
                //   console.log(line_item_date_time);
                  let end  = ''   ;
                  if (variant == '1')  {
                   //  line_item_date_time 11 12 index only increase by 1  this is double digit number so 09 becomes 10 11 becomes 12 if 02 becomes 03 must include 0 with single digit number if value become 01 to 07 to change it to 13 to 19 and than add according to situation to it
                   end = line_item_date_time.slice(0, 11) + (parseInt(line_item_date_time.slice(11, 13)) + 1) + line_item_date_time.slice(13, 19);
                   console.log(end);
                     } else if (variant == '2') {
                       end = line_item_date_time.slice(0, 11) + (parseInt(line_item_date_time.slice(11, 13)) + 2) + line_item_date_time.slice(13, 19);
                       console.log(end);
                       } else if (variant == '3') {
                           end = line_item_date_time.slice(0, 11) + (parseInt(line_item_date_time.slice(11, 13)) + 3) + line_item_date_time.slice(13, 19);
                           console.log(end);
                           } else if (variant == '4') {
                               end = line_item_date_time.slice(0, 11) + (parseInt(line_item_date_time.slice(11, 13)) + 4) + line_item_date_time.slice(13, 19);
                               console.log(end);
                               } else if (variant == '8') {
                                   end = line_item_date_time.slice(0, 11) + (parseInt(line_item_date_time.slice(11, 13)) + 8) + line_item_date_time.slice(13, 19);
                                   console.log(end);
                                   } 
                   
                  
    
                 orderData.push({
                    'name': name,
                    'email': email,
                    'created_at': created_at,
                    'line_items': line_items,
                    "title": title,
                    "variant": variant,
                    'line_item_date_time': line_item_date_time,
                    "end": end

                });
    
         
    
    
               
    
    
                // console.log(end);
    
                // let length = orderData.length;
                // console.log(length);
                // // set interval of every 10 seconds to get the data if there is any new order only send that order to google calendar
                // setInterval(() => {
                //      let newLength = orderData.length;
                //         if (newLength != length) {
                //             let newOrder = orderData[newLength - 1];
                //             console.log(newLength);
                //             console.log(newOrder);
                //         }
                //         else {
                //             console.log('No new order');
                //         }
                // }, 2000);
    
    
                    
                }
    
    
    
               
              
    
    
    
    
            }
            console.log(orderData);
            const getlastorder = orderData[0];
            console.log(getlastorder);
            const name = getlastorder.name;
            const email = getlastorder.email;
            const created_at = getlastorder.created_at;
            const line_items = getlastorder.line_items;
            const title = getlastorder.title;
            const variant = getlastorder.variant;
            const line_item_date_time = getlastorder.line_item_date_time;
            const end = getlastorder.end;

            
             



            
        const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
        const calendarId = process.env.CALENDAR_ID;
         
        // console.log(orderData)




        // Google calendar API settings
        const SCOPES = 'https://www.googleapis.com/auth/calendar';
        const calendar = google.calendar({version : "v3"});
        
        const auth = new google.auth.JWT(
            CREDENTIALS.client_email,
            null,
            CREDENTIALS.private_key,
            SCOPES
        );
                     
             const insertEvent = async (event) => {

                try {
                    let response = await calendar.events.insert({
                        auth: auth,
                        calendarId: calendarId,
                        resource: event
                    });
                
                    if (response['status'] == 200 && response['statusText'] === 'OK') {
                        return 1;
                    } else {
                        return 0;
                    }
                } catch (error) {
                    console.log(`Error at insertEvent --> ${error}`);
                    return 0;
                }
            };

             
          


            let dateTime = {
                'start': `${line_item_date_time}`,
                'end': `${end}`
                       };

             let event = {
                'summary': `${name}`,
                'description': `${title} <br> ${email} <br> ${line_items}`,
                'start': {
                    'dateTime': dateTime['start'],
                    'timeZone': 'Asia/Karachi'
                },
                'end': {
                    'dateTime': dateTime['end'],
                    'timeZone': 'Asia/Karachi'
                },

            };

            
              
            insertEvent(event)
                .then((res) => {
                    if (res == 1) {
                        console.log('Event added successfully');
                    } else {
                        console.log('Event not added');
                    }
                }
                )
                .catch((err) => {
                    console.log(err);
                });





        })
        .catch((err) => {
            console.log(err);
        });
  








        res.send('Hello World!');

    });



    // when new order is placed it should be added to google calendar i create webhook for that and when new order is placed it will send request to this webhook and this webhook will send request to this server and this server will add that order to google calendar



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));    

//     const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     const b = 11 ;
//     // push in array 
//     array.push(b);
// //    only get the last element of array
//     console.log(array[array.length - 1]);
