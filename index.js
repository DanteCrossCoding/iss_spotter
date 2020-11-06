// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTime } = require('./iss');

const { nextISSTimesForMyLocation } = require('./iss');



const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It did not work!", error);
    return;
  }
  printPassTimes(passTimes);
});


module.exports = { printPassTimes };
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It did not work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP:" , ip);

// });

// fetchCoordsByIP('173.183.10.149', (error, coords) => {
//   if (error) {
//     console.log("It did not work!", error);
//     return;
//   }
//   console.log('It worked! Return Coords:', coords);
// });

// fetchISSFlyOverTime({ lat: 49.0745, lon: -121.9826 }, (error, data) => {
//   if (error) {
//     console.log("It did not work!", error);
//     return;
//   }
//   console.log("It worked! Data:", data);
// });