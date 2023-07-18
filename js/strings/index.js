// 1

function titleCase (string)
{
let LowerString = string.toLowerCase();
let newArray = LowerString.split(' ');
let newString ='';
for (i=0; i<newArray.length; i++)
{
  newString  = newString + newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1)+ ' ' ;
}
return newString.trim();
}

console.log(titleCase("new york"));

//2

function flight (destinations,query)
{
  let results = [];
for ( i=0; i<destinations.length; i++)
{
  if (destinations[i].includes(query))
  {
    results.push(destinations[i]);
  }
}
return results;

}


console.log(flight(['New York', 'Tokyo', 'Paris', 'London','thong'], "on"));

//3

function CodeFormat (code)
{
const [fnumber,fcode] = code.split('-')
return `${fcode}-${fnumber}`
}

console.log(CodeFormat("JFK-123"));//"123-JFK"

//4

function  Flight_Duration (Input)
{
  let [hours,minutes] = Input.split(' ');
  hours = hours.slice(-Infinity,-1);
  minutes = minutes.slice(-Infinity,-3);

  return `{hours: ${hours}, minutes : ${minutes}}`;
}

console.log(Flight_Duration("3h 45min"));

// 5

function Acronym(input)
{
  first = '';
let newstring = input.split (' ')
for (i=0; i<newstring.length; i++)
{
 first = first + newstring[i].charAt(0);
}
return first;
}

console.log(Acronym("Global Travel Agency"));

// 6

function concatenateTravelDetails(travelObj) 
{
const {flight, destination  , date } = travelObj;
return `"Flight: ${flight} , Destination: ${destination} ,  Date: ${date}" `
}

const travelDetails = { flight: "JFK-123", destination: "London", date: "2023-07-16" };
const result = concatenateTravelDetails(travelDetails);
console.log(result); // Output: "Flight: JFK-123, Destination: London, Date: 2023-07-16"

// 7

function createSlug(locationName) {
  return locationName.toLowerCase().replace(/\s+/g, '-');
}

// Test the function
const locationName = "San Francisco";
const slug = createSlug(locationName);
console.log(slug); // Output: "san-francisco"


// 8

function Trimming (sen,num)
{
let neww = '';

if (sen.length <= num) {
  return itinerary;
}
for (i=0; i<num+1; i++)
{
  neww = neww + sen[i];
}
return `"${neww}..."`;
}

console.log(Trimming("Visit the Golden Gate Bridge, take a walk in Golden Gate Park, see Alcatraz Island", 50));


// 9

function Wishlist (input)
{
 let neww = input.split('   ')
  return neww.map(destination => destination.trim());;
}

console.log(Wishlist( "Paris, Tokyo, New York"))

// 10

function decodeSecretMessage(encodedMessage) {
  const vowelsToNumbers = {
    '0': 'o',
    '1': 'a',
    '2': 'e',
    '3': 'e',
    '4': 'a',
    '5': 'u',
    '6': 'i'
  };

  let decodedMessage = '';
  for (let i = 0; i < encodedMessage.length; i++) {
    const char = encodedMessage[i];
    if (vowelsToNumbers[char]) {
      decodedMessage += vowelsToNumbers[char];
    } else {
      decodedMessage += char;
    }
  }

  return decodedMessage;
}

// Example usage:
const encodedMessage = "2v2ry tr1v3l3r h1s 4 s3cr3t d3st6n6t10n";
const decodedMessage = decodeSecretMessage(encodedMessage);
console.log(decodedMessage); // Output: "Every traveler has a secret destination"
