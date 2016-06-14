// API URL - https://congress.api.sunlightfoundation.com/legislators?apikey=882fc0598470468f9deee748911fe412

// Initiate JSON API Input Request
// jQuery Library
console.log($)
// $.getJSON request to input API and Special Object Returned (Promise)
var Promise = $.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=882fc0598470468f9deee748911fe412')



// Define Key Elements
//var mainContainer = document.querySelector("#container")



// Define Functions and Other Tools
var inputData = function(apiResponse) {
    console.log(apiResponse)
  	var congressArray = apiResponse.results
  	var htmlString = ''
    for (var i = 0; i < congressArray.length; i++) {
     var congressObject = congressArray[i]

     		fullName = congressObject.first_name + ' ' + congressObject.last_name,
     		titlePartyState = congressObject.title + ' ' + '--' + congressObject.party + '-' + congressObject.state_name,
     		email = congressObject.oc_email,
     		website = congressObject.website,
     		facebook = congressObject.facebook_id,
     		twitter = congressObject.twitter_id,
     		termEnd = congressObject.term_end
     
     if(facebook === undefined || twitter === undefined){
     	facebook = "not listed"
     	twitter = "not listed"
     }
			
			// create html elements  
		htmlString += '<div class="cardContainer">'
        htmlString += '<h3 class="fullName">' + fullName + '</h3>' 
        htmlString += '<h4 class="titlePartyState">' + titlePartyState + '</h4>' 
        htmlString += '<li class="contact-deatils">email: ' + email + '</li>'
        htmlString += '<li class="contact-deatils">website: ' + website + '</li>'
        htmlString += '<li class="contact-deatils">facebook: ' + facebook + '</li>'
        htmlString += '<li class="contact-deatils">twitter: ' + twitter + '</li>'
        htmlString += '<p class="term-end">' + "Term End" + termEnd + '</p>' 
        htmlString += '</div>'

    }
	
	var mainContainer = document.querySelector("#container")
    mainContainer.innerHTML = htmlString
}



// Define Actions/Pending Actions
Promise.then(inputData) 











