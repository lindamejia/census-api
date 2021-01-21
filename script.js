

fetch(
  "https://api.census.gov/data/2012/acs/acs5?get=NAME,B25003_003E,B25003_002E&for=county:037&in=state:06"
)
  .then(response => {
    return response.json();
  })
  .then(data => {
    // Work with JSON data here
    console.log(data);
  })
  .catch(err => {
    // Do something for an error here
  });
