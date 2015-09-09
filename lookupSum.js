var sumName = $('#summonerName').val();
var APIKEY = $('#APIKey').val();

//function summonerLookUp() {  
//   var sumName = $('#summonerName').val();
//   var APIKEY = $('#APIKey').val(); 
//   console.log('hello');
//   if (sumName !== "") {
//
//      $.ajax({
//	 url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + sumName + '?api_key=' + APIKEY,
//	    type: 'GET',
//	 dataType: 'json',
//	 data: {
//
//	 },
//	 success: function (json) {
//	    var sumNamenospace = sumName.replace(" ", "");
//
//	    sumNamenospace = sumNamenospace.toLowerCase().trim();
//
//	    summonerLevel = json[sumNamenospace].summonerLevel;
//	    summonerID = json[sumNamenospace].id;
//
//	    document.getElementById("sLevel").innerHTML = summonerLevel;
//	    document.getElementById("sID").innerHTML = summonerID;
//
//	    // NEW FUNCTION!
//	    letsGetMasteries(summonerID);
//
//	 },
//	 error: function (XMLHttpRequest, textStatus, errorThrown) {
//	    alert("error getting Summoner data 1!");
//	 }
//      });
//   } else {}
//}
//
//function letsGetMasteries(summonerID) {
//   var sumName = $('#summonerName').val();
//   var APIKEY = $('#APIKey').val();
//   $.ajax({
//      url: "https://na.api.pvp.net/api/lol/na/v1.4/summoner/" + summonerID + "/masteries?api_key=" + APIKEY,
//	 type: 'GET',
//      dataType: 'json',
//      data: {
//
//      },
//      success: function (resp) {
//	 numberOfPages = resp[summonerID].pages.length;
//	 numberOfPage1 = resp[summonerID].pages[0].name;
//
//	 document.getElementById("masteryPageCount").innerHTML = numberOfPages;
//	 document.getElementById("masteryPages1st").innerHTML = numberOfPage1;
//	 testJSON();
//      },
//
//      error: function (XMLHttpRequest, textStatus, errorThrown) {
//	 alert("error getting Summoner data 2!");
//      }
//   });
//}
function testJSON() {
   var sumName = $('#summonerName').val();
   var APIKEY = $('#APIKey').val();
   console.log('made it');
   $.getJSON( "testMatch.json", function( match ) {
      parseJSON(match);
      return;
      console.log('hi');
      for(var i in json) {
	 if(1>0) {
	    console.log('   ' + i);
	    $.ajax({
	       url: "https://na.api.pvp.net/api/lol/na/v2.2/match/" + json[i] + "?includeTimeline=false&api_key=" + APIKEY,
		  type: 'GET',
	       datatype: 'json',
	       data: {
	       },
	       success: function(json) {
		  console.log(json);
		  console.log(JSON.stringify(json));
		  for(i = 0; i < 10; i++) { //MAKE 10
		     for(var j in json.participants[i].stats) {
			console.log(json.participants[i].stats.$('j'));
			if(j.indexOf("item") > -1) {
			   $.ajax({
			      url: "https://global.api.pvp.net/api/lol/static-data/na/v1.2/item/" +  + "?locale=en_US&itemData=all&api_key=" + APIKEY,
				 type: 'GET',
			      datatype: 'json',
			      data: {
			      },
			      success: function(jsonI) {
				 console.log(jsonI.name);

			      },
			   });
			}
		     }
		  }	
	       },
	       error: function(XMLHttpRequest, textStatus,errorThrown) {
		  alert("error getting Match data!");
	       }

	    });
	 }
      }
   }).error(function(jqXHR, textStatus, errorThrown) { console.log(textStatus); });
}
function parseJSON(match) {
	var APIKEY = $('#APIKey').val();
	var participants = match.participants;
	for(i = 0; i < 10; i++) {
		var p = participants[i];
		var s = p.stats;
		console.log("team " + p.teamId + ", champ " + p.championId+ ", item1 " + s.item0);
		var winner = match.teams[0].winner ? "team 1" : "team 2";
		var firstItem = participants[0].stats.item0;
		document.getElementById("winner").innerHTML = winner;
		$.ajax({
			url:  "https://global.api.pvp.net/api/lol/static-data/na/v1.2/item/" + s.item0 + "?locale=en_US&itemData=all&api_key=" + APIKEY,
			type: 'GET',
			datatype: 'json',
			data: {
			},
			success: function(jsonI) {
				console.log(jsonI.name);
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				alert("error getting item name");
			}
		});
			
		
	}
}
				