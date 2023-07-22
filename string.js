// // // 1

// // function toTitleCase (string)
// // {
// // let LowerString = string.toLowerCase();
// // let newArray = LowerString.split(' ');
// // let newString ='';
// // for (i=0; i<newArray.length; i++)
// // {
// //   newString  = newString + newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1)+ ' ' ;
// // }
// // return newString.trim();
// // }

// // console.log(toTitleCase("new york"));

// // //2

// // function searchInventory (destinations,query)
// // {
// //   let results = [];
// // for ( i=0; i<destinations.length; i++)
// // {
// //   if (destinations[i].includes(query))
// //   {
// //     results.push(destinations[i]);
// //   }
// // }
// // return results;

// // }


// // console.log(searchInventory(['New York', 'Tokyo', 'Paris', 'London','thong'], "on"));

// // //3

// // function formatNPCName (code)
// // {
// // const [fnumber,fcode] = code.split('-')
// // return `${fcode}-${fnumber}`
// // }

// // console.log(formatNPCName("JFK-123"));//"123-JFK"

// // //4

// // function  parseDuration (Input)
// // {
// //   let [hours,minutes] = Input.split(' ');
// //   hours = hours.slice(-Infinity,-1);
// //   minutes = minutes.slice(-Infinity,-3);

// //   return `{hours: ${hours}, minutes : ${minutes}}`;
// // }

// // console.log(parseDuration("3h 45min"));

// // // 5

// // function getGameAcronym(input)
// // {
// //   first = '';
// // let newstring = input.split (' ')
// // for (i=0; i<newstring.length; i++)
// // {
// //  first = first + newstring[i].charAt(0);
// // }
// // return first;
// // }

// // console.log(getGameAcronym("Global Travel Agency"));

// // // 6

// // function getCharacterDetails(travelObj) 
// // {
// // const {flight, destination  , date } = travelObj;
// // return `"Flight: ${flight} , Destination: ${destination} ,  Date: ${date}" `
// // }

// // const travelDetails = { flight: "JFK-123", destination: "London", date: "2023-07-16" };
// // const result = getCharacterDetails(travelDetails);
// // console.log(result); // Output: "Flight: JFK-123, Destination: London, Date: 2023-07-16"

// // // 7

// // function createSlug(locationName) {
// //   return locationName.toLowerCase().replace(/\s+/g, '-');
// // }

// // // Test the function
// // const locationName = "San Francisco";
// // const slug = createSlug(locationName);
// // console.log(slug); // Output: "san-francisco"


// // // 8

// // function trimDescription (sen,num)
// // {
// // let neww = '';

// // if (sen.length <= num) {
// //   return itinerary;
// // }
// // for (i=0; i<num+1; i++)
// // {
// //   neww = neww + sen[i];
// // }
// // return `"${neww}..."`;
// // }

// // console.log(trimDescription("Visit the Golden Gate Bridge, take a walk in Golden Gate Park, see Alcatraz Island", 50));


// // // 9

// // function splitMonsters (input)
// // {
// //  let neww = input.split('   ')
// //   return neww.map(destination => destination.trim());;
// // }

// // console.log(splitMonsters( "Paris, Tokyo, New York"))

// // 10

function decodeSecret(encodedMessage) {
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
const decodedMessage = decodeSecret(encodedMessage);
console.log(decodedMessage); // Output: "Every traveler has a secret destination"
