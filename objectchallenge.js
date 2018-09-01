

let elizabethSanger = {
    congressionalDistrict: 5,
    statements: [
      {statement: "pie for everyone", category: "Jobs"},
      {statement: "no taxes on pie", category: "Taxes"},
      {statement: "No working on friday", category: "Jobs"}
    ],
    donationFormUrl: 'www.google.com',
    events: [
      {date: '08/27/2018', title:"Zoe's birthday", description:"eat all the pie at the party"},
      {date: '08/28/2018', title:"Arrays", description:"all the looping"}
    ],
    volunteers: [
      {
        name: 'Callan',
        address: '500 interstate blvd S',
        email: 'callan@yomamma.com',
        phone: '1234567890',
        availability: '9-5',
        activities: 'phone calls only'
      },
      {
        name: 'Lauren',
        address: '1 main street',
        email: 'lauren@comcast.net',
        phone: '1134567890',
        availability: 'never',
        activities: 'collecting money'
      }
    ],
    biography: "I'm so cool!  please elect me",
    images: [
      {
        imageUrl: "https://imgix.bustle.com/uploads/image/2018/4/18/5f312113-eaa8-4e71-9360-871e51084f4f-fotolia_125402501_subscription_monthly_m.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
        description: "best constituent",
        type: "constituents"
      },
      {
        imageUrl: "https://imgix.bustle.com/uploads/image/2018/4/18/5f312113-eaa8-4e71-9360-871e51084f4f-fotolia_125402501_subscription_monthly_m.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
        description: "Elizabeth at the fair",
        type: "headshot"
      },
    ],
    missionStatement: "Do good stuff",
    voterRegistrationUrl: 'www.google.com'
  };

  const printToDom = (stringToPrint, divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += `<h6>${stringToPrint}</h6>`;
};

function missionStatement () {
const mission = elizabethSanger.missionStatement;
printToDom(mission,'missionStatement');
}

function statements () {
  let state = '';
  for (let i = 0; i < elizabethSanger.statements.length; i++){
    state += elizabethSanger.statements[i].statement;
  }
  printToDom(state, 'state');
}

const donationFormUrl = () => {
  const donation = `<a href="http://${elizabethSanger.donationFormUrl}">Donation address</a>`;
  printToDom(donation,"donation");

}
//events
const eventBuilder = () => {
let newString = '';
for (let i = 0; i < elizabethSanger.events.length; i++) {
  newString += `<div class="event">`;
  newString += `<h4>Title: ${elizabethSanger.events[i].title} ${','}` ;
  newString += `Date: ${elizabethSanger.events[i].date} ${','}` ;
  newString += `Description: ${ elizabethSanger.events[i].description}</h4>` ;
  newString += `</div>`;
};
printToDom(newString, 'events');
};


const volunteers = () => {
  let newString = '';
for (let i = 0; i < elizabethSanger.volunteers.length; i++) {
  newString += `<div class="volunteer">`;
  newString += `<h4>Name: ${elizabethSanger.volunteers[i].name} ${','} ` ;
  newString += `Address: ${elizabethSanger.volunteers[i].address} ${','} ` ;
  newString += `Email: ${elizabethSanger.volunteers[i].email} ${','}` ;
  newString += `Phone: ${elizabethSanger.volunteers[i].phone} ${','}` ;
  newString += `Availability: ${elizabethSanger.volunteers[i].availability} ${','}` ;
  newString += `Activities: ${ elizabethSanger.volunteers[i].activities}</h4>` ;
  newString += `</div>`;
};
printToDom(newString, 'events');
};

const biography = () => {
  let newString = elizabethSanger.biography;
  printToDom(newString,"biography");
}

const images = () => {
  let newString = '';
for (let i = 0; i < elizabethSanger.volunteers.length; i++) {
  newString += `<div class="images">`;
  newString += `<h4>Image: <img src = "${elizabethSanger.images[i].imageUrl} ${','}"height = 100px;>` ;
  newString += `Description: ${elizabethSanger.images[i].description} ${','}` ;
  newString += `type: ${elizabethSanger.images[i].type}</h4>` ;
  newString += `</div>`;
};
printToDom(newString, 'events');
}

function congressionalDistrict () {
  const congress = elizabethSanger.congressionalDistrict;
  printToDom(congress,'sonnet');
  }
const voterRegistrationStringBuilder = () => {
  const newString = `<a href="http://${elizabethSanger.voterRegistrationUrl}">Register to vote</a>`;
  printToDom(newString,'voterRegistration');
};


voterRegistrationStringBuilder();
congressionalDistrict ();
donationFormUrl();
statements();
volunteers();
biography();
images();
missionStatement();
eventBuilder();

