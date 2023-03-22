// function to find matching drivers based on the given name
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // function to find drivers whose names start with the provided letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  // function to match drivers based on their name property
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
// Code your solution here
