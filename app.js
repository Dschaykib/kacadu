//Select DOM
const patInput = document.querySelector(".patinput");
const patBtn = document.querySelector(".patbutton");

var campaignID = document.querySelector(".campaignid");
var campaignIDelement = document.getElementById("campaignid");
var campaignList = [];

// TODO upload input
const startBtn = document.querySelector(".startbtn");

//var posCampaignID = document.createElement('posCampaignID');


//Event Listeners
patBtn.addEventListener("click", getCampaign);
startBtn.addEventListener("click", doStuff);


//Functions -------------------------------------------------------------

// run start button ------------------------
function doStuff(e) {
  //Prevent natural behaviour
  e.preventDefault();
  //Create todo div
  console.log('campaign id:', campaignid.value);
  alert('Here come the magic!');
}



// set selection of ID ---------------------
function getCampaign(e) {
  //Prevent natural behaviour
  e.preventDefault();
  //Create todo div
  console.log('PAT: ', patInput.value)
  console.log('campaignIDelement: ', campaignID)

  // get list of IDs
  // list of possible campaig id, will be later received by the api
  var campaignList = (patInput.value == 'PAT') ? ['123','456','312']:['abc','qwe','asd'];
  
  console.log('campaignList: ', campaignList);

  // empty previous selection
  if (campaignid != null) {
    console.log('empty campaign choices')
    var length = campaignid.options.length;
    for (i = length-1; i >= 0; i--) {
      campaignid.options[i] = null;
    };
  }
  
  
  // update selection
  if (campaignList != null) {
    console.log('set new campaign choices')
    campaignList.forEach(element => {
      campaignid.add(new Option(element, campaignList.indexOf(element)));
    });  
  } else {
    consol.log('no campaign in list')
  }
  

}



