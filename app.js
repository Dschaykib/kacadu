//Select DOM
const patInput = document.querySelector('patinput');
const patBtn = document.querySelector('.patbutton');

var campaignID = document.querySelector('.campaignid');
var campaignIDelement = document.getElementById('campaignid');
var campaignList = [];

const api_url = 'https://kanka.io/api/1.0';

// just for testing
document.getElementById('patinput').value = 'api_token' in window ? api_token : 'Enter you PAT'

console.log(document.getElementById('patinput').value);



// TODO upload input
const startBtn = document.querySelector('.startbtn');



//Event Listeners
patBtn.addEventListener('click', getCampaign);
startBtn.addEventListener('click', doStuff);

// test Kanka API call
//getProfile();


//Functions -------------------------------------------------------------

// run start button ------------------------
function doStuff(e) {
  //Prevent natural behaviour
  e.preventDefault();
  //Create todo div
  console.log('campaign id:', campaignid.value);
  alert('Here come the magic!');
}


// get campaigns
// function to retrieve kanka campaign ids for the given api key
async function getCampaignList() {
  var bearer = 'Bearer'.concat(" ", api_token);
  var apicall = await fetch(api_url.concat('/campaigns'), {
    method: 'GET',
    headers: {
      'Authorization': bearer,
      'Content-type': 'application/json'
    }
  });
  var response = await apicall.json();
  var out = {
    'id' : response.data.map(({ id }) => id),
    'name' : response.data.map(({ name }) => name)
  }
  console.log(out);

  return out;
}


// set selection of ID ---------------------
async function getCampaign(e) {
  //Prevent natural behaviour
  e.preventDefault();
  //Create todo div
  console.log('PAT: ', patInput);
  console.log('campaignIDelement: ', campaignID);

  // get list of IDs
  var campaignList = await getCampaignList();

  // empty previous selection
  if (campaignid != null) {
    console.log('empty campaign choices');
    var length = campaignid.options.length;
    for (i = length-1; i >= 0; i--) {
      campaignid.options[i] = null;
    };
  };
  
  
  // update selection
  if (campaignList != null) {
    console.log('set new campaign choices');
    campaignList.id.forEach(element => {
      campaignid.add(new Option(
        campaignList.name[campaignList.id.indexOf(element)],
        element));
    });
    console.log(campaignList);
  } else {
    console.log('no campaign in list');
  };
  

}


// function to retrieve kanka api header data
async function getProfile() {
  var bearer = 'Bearer'.concat(" ", api_token);
  var apicall = await fetch(api_url.concat('/profile'), {
    method: 'GET',
    headers: {
      'Authorization': bearer,
      'Content-type': 'application/json'
    }
  });
  var response = await apicall.json();
  console.log(response.data)
  console.log("hey ", response.data.name);

}



