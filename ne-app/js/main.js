window.onload = function () {
let db = firebase.database();
let bccRef = db.ref('bcc/');
let oDataList =[];

bccRef.on("child_added", function(snap, prevChildKey) {
  let theList = snap.val();
  oDataList.push(theList);
  snap.forEach(function(childSnapshot) {
    let key = childSnapshot.key;
    let childData = childSnapshot.val();
    //console.log(key +' '+ childData);
  });
  class RealObject extends React.Component {
    render() {
      console.log(oDataList);
        let newodatalist = oDataList.map(
          item => <a key={this.props.item.objectKey} href="{item.picUrl}" class="swipebox" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."><img class="img-responsive " src="{item.picUrl}" alt=""  /><div class="wthree-pcatn"><h4>Nielsen Estate</h4></div></a>
        );
      return (
        <div class="col-md-4 col-sm-4 col-xs-6 filtr-item" data-category="1" data-sort="Busy streets">
          <div class="agileits-img">
            {newodatalist}
          </div>
          <button><a href="#myModal" data-toggle="modal">Detaljerad Information</a></button>
        </div>
      )
    }
  }
  ReactDOM.render ( <RealObject />,
    document.getElementById('Petri')
  );
});
}
