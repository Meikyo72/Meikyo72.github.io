//window.onload = function () {
/*let objectPrensentation = document.getElementById('object-presentation');
let modalDiv = document.getElementById('modalDiv');
let db = firebase.database();
let bccRef = db.ref('bcc/');

bccRef.on("child_added", function(snap, prevChildKey) {
  //console.log(snap.val());
  makeDivFunc(snap.val());
  snap.forEach(function(childSnapshot) {
    let key = childSnapshot.key;
    let childData = childSnapshot.val();
    //console.log(key +' '+ childData);
  });
});*/
class RealObject extends Ract.Component {
  render() {
    return (
      <div>
        <p>Testar lite</p>
      </div>
    )
  }
}
ReactDOM.render ( <RealObject />,
  document.getElementById('objectprensentation')
);
//}
