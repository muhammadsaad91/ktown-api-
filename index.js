const express = require('express');
const bodyParser = require('body-parser');



const {google} = require('googleapis');
const { beyondcorp } = require('googleapis/build/src/apis/beyondcorp');
require('dotenv').config();
const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const { response } = require('express');
const { json } = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhooks/orders/create', (req, res) => {
  console.log('Received webhook:', req.body);

  // add this in Array
  const order = [req.body];
  console.log(order);

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
// console.log(orderData);
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















 

































  res.status(200).send('Webhook received successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
