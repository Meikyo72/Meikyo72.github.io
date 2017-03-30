window.onload = function () {
    let addName = document.getElementById('addName');
    let glMig = document.getElementById('glMig');
    let tableBody = document.getElementById('tableBody');
    let addText = document.getElementById('addText');
    let scrollRow = document.getElementById('scrollRow');
    let hideUser = document.getElementById('logout');
    let loggaUt = document.getElementById('loggaUt');
    let loggaIn = document.getElementById('loggaIn');
    let theUser = document.getElementById('theUser');
    var provider = new firebase.auth.GithubAuthProvider();
    
    loggaIn.addEventListener('click', function(event){
    firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
        console.log('inloggad');
        console.log(user.displayName);
        //window.location.reload();
        theUser.innerHTML = 'Inloggad som:'+user.displayName;
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
    });
    if (localStorage.petriBaseN==undefined){
        addName.value='';
    }else{
    addName.value = localStorage.petriBaseN;
    }
    
    addText.addEventListener('keypress', function(event) {
        if (event.keyCode==13){
            let datum = new Date();
				firebase.database().ref('mess/').push({
					tid: datum.toUTCString(),
					id: datum.getTime(),
					namn: addName.value,
					med: addText.value
				});
            localStorage.petriBaseN = addName.value;
            }
			});
    firebase.database().ref('mess/').on('child_added', function(snapshot, prevChildKey) {
				let data = snapshot.val();
				addMessToTable(data);
			});
    function addMessToTable(data) {
				let tr = document.createElement('tr');
				tr.innerHTML = `<td>${data.tid}</td> <td>${data.id}</td> <td>${data.namn}</td> <td>${data.med}</td>`;
				tableBody.appendChild(tr);
                addText.value='';
                scrollRow.scrollTop = scrollRow.scrollHeight;
			}
    
    glMig.addEventListener('click', function(event){
        localStorage.removeItem("petriBaseN");
        addName.value='';        
    });
        loggaUt.addEventListener('click', function(event){
        firebase.auth().signOut().then(function() {
        // Sign-out successful.
            console.log('utloggad');
            theUser.innerHTML = 'Du är utloggad';
        }).catch(function(error) {
        // An error happened.
        });
        
    });
  
}