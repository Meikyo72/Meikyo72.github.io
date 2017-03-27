window.onload = function () {
    let addName = document.getElementById('addName');
    let glMig = document.getElementById('glMig');
    let tableBody = document.getElementById('tableBody');
    let addText = document.getElementById('addText');
    addName.value = localStorage.petriBaseN;
    if (addName.value===undefined){
        addName.value='';
    };
    console.log('Namnet är:'addName);
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
			}
    
    glMig.addEventListener('click', function(event){
        localStorage.removeItem("petriBaseN");
        addName.value='';
    });
}