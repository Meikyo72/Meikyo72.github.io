window.onload = function () {
    let loggaUt = document.getElementById('loggaUt');
    let loggaIn = document.getElementById('loggaIn');
    let theUser = document.getElementById('theUser');
    var provider = new firebase.auth.GithubAuthProvider();
    /*let hits = document.getElementById('hits');
    let subb = document.getElementById('subb');
    let addName = document.getElementById('addName');
    let addRank = document.getElementById('addRank');
    let addStatus = document.getElementById('addStatus');
    let addSpecies = document.getElementById('addSpecies');
    let tableBody = document.getElementById('tableBody');
    let scrollRow = document.getElementById('scrollRow');
    let sortbutt = document.getElementsByClassName('sortbutt');
    let btnSortName = document.getElementById('btnSortName');
    let btnSortRank = document.getElementById('btnSortRank');
    let btnSortStatus = document.getElementById('btnSortStatus');
    let btnSortSpecies = document.getElementById('btnSortSpecies');
    let nHits = document.getElementsByName('nHits');
    let first = document.getElementById('first');
    let last = document.getElementById('last');
*/
  let addInternalID = document.getElementById('addInternalID');
  let addAdress = document.getElementById('addAdress');
  let addOwner = document.getElementById('addOwner');
  let addOwnerAdress = document.getElementById('addOwnerAdress');
  let addEmail = document.getElementById('addEmail');
  let addTelephone = document.getElementById('addTelephone');
  let addIDnr = document.getElementById('addIDnr');
  let addPic = document.getElementById('addPic');
  let addDescription = document.getElementById('addDescription');
  let addZip = document.getElementById('addZip');
  let addCity = document.getElementById('addCity');
  let addZone = document.getElementById('addZone');
  let addPrice = document.getElementById('addPrice');
  let addRooms = document.getElementById('addRooms');
  let addKitchen = document.getElementById('addKitchen');
  let addBedroom = document.getElementById('addBedroom');
  let addWC = document.getElementById('addWC');
  let addSize = document.getElementById('addSize');
  let addPropertySize = document.getElementById('addPropertySize');
  let submit = document.getElementById('submit');
  let addBeach = document.getElementById('addBeach');
  let addMarina = document.getElementById('addMarina');
  let addTransportation = document.getElementById('addTransportation');
  let addShopping = document.getElementById('addShopping');
  let addMedic = document.getElementById('addMedic');
  let addGolf = document.getElementById('addGolf');
  let addTennis = document.getElementById('addTennis');
  let addParks = document.getElementById('addParks');
  let addTraining = document.getElementById('addTraining');
  let addSchool = document.getElementById('addSchool');
  let addSell = document.getElementById('addSell');
  let addRent = document.getElementById('addRent');
  let addFlat = document.getElementById('addFlat');
  let addHouse = document.getElementById('addHouse');
  let addLocale = document.getElementById('addLocale');
  let addBuilding = document.getElementById('addBuilding');
  let addAc = document.getElementById('addAc');
  let addElevator = document.getElementById('addElevator');
  let addPadio = document.getElementById('addPadio');
  let addStorage = document.getElementById('addStorage');
  let addParking = document.getElementById('addParking');
  let addPool = document.getElementById('addPool');


    loggaIn.addEventListener('click', function(event){
    firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
        console.log('inloggad');
        console.log(user.displayName);
        theUser.innerHTML = 'Inloggad som: '+user.displayName+' <img src="'+user.photoURL+'" height="42" width="42">';


    submit.addEventListener('click', function(event) {
				firebase.database().ref('bcc/').push({
					description: addDescription.value,
					price: addPrice.value,
					sell: addSell.value,
					rent: addRent.value
				});
			});
    firebase.database().ref('bcc/').on('child_added', function(snapshot, prevChildKey) {
				let data = snapshot.val();
				addMessToTable(data);
			});

      }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
        function addMessToTable(data) {
				let tr = document.createElement('tr');
				tr.innerHTML = `<td>${data.description}</td> <td>${data.price}</td> <td>${data.sell}</td> <td>${data.rent}</td>`;
				tableBody.appendChild(tr);
                addDescription.value='';
                addPrice.value='';
                addSell.value='';
                addRent.value='';
			}
        function sortFunc(sortbutt, sortKey) {
				sortbutt.addEventListener('click', function(event) {
					tableBody.innerHTML = '';
					firebase.database().ref('bcc/').orderByChild(sortKey)
					.once('value', function(snapshot) {
						snapshot.forEach( crewRef => {
							addMessToTable(crewRef.val());
						})
					});
				})
			}
			sortFunc(btnSortName, 'name');
			sortFunc(btnSortRank, 'rank');
			sortFunc(btnSortStatus, 'status');
			sortFunc(btnSortSpecies, 'species');

			hits.addEventListener('keypress', function(event) {
				if( event.keyCode == 13 ) {
					let antal = Number(hits.value);
					tableBody.innerHTML = '';
					if( isNaN(antal) ) {
						hits.value = 'Input a number';
					} else  if(first.checked == true){
						firebase.database().ref('bcc/').limitToFirst(antal)
						.once('value', function(snapshot) {
								snapshot.forEach( crewRef => {
									addMessToTable(crewRef.val());
								})
						});
					} else {
                        firebase.database().ref('bcc/').limitToLast(antal)
						.once('value', function(snapshot) {
								snapshot.forEach( crewRef => {
									addMessToTable(crewRef.val());
								})
						});
                    }
				}
			});
    });


        loggaUt.addEventListener('click', function(event){
        firebase.auth().signOut().then(function() {
        // Sign-out successful.
            console.log('utloggad');
            window.location.reload();
        }).catch(function(error) {
        // An error happened.
        });

    });
}
