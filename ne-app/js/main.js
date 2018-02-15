window.onload = function () {
let db = firebase.database();
let bccRef = db.ref('bcc/');

bccRef.on("child_added", function(snap, prevChildKey) {
  console.log(snap.val());
  snap.forEach(function(childSnapshot) {
    let key = childSnapshot.key;
    let childData = childSnapshot.val();
    //console.log(key +' '+ childData);
  });
});
class RealObject extends React.Component {
  render() {
    return (
      <div class="col-md-4 col-sm-4 col-xs-6 filtr-item" data-category="1" data-sort="Busy streets">
        <div class="agileits-img">
          <a href="images/g1.jpg" class="swipebox" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <img class="img-responsive " src="images/g1.jpg" alt=""  />
            <div class="wthree-pcatn">
              <h4>Nielsen Estate</h4>
            </div>
          </a>
        </div>
        <button><a href="#myModal" data-toggle="modal">Detaljerad Information</a></button>
      </div>
    )
  }
}
ReactDOM.render ( <RealObject />,
  document.getElementById('Petri')
);
}
