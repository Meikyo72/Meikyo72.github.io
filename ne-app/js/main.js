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
  });
  class RealObject extends React.Component {
    render() {
        let newodatalist = oDataList.map(
          item => <div key={item.objectKey} className="col-md-4 col-sm-4 col-xs-6 filtr-item" data-category="1" data-sort="Busy streets"><div className="agileits-img"><a href={item.picUrl} className="swipebox" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."><img className="img-responsive " src={item.picUrl} alt="" /><div className="wthree-pcatn">
            <h4>Nielsen Estate</h4></div></a></div><button><a href={'#' + item.objectKey} data-toggle="modal">Detaljerad Information</a></button></div>
        );
      return (
        <div>
        {newodatalist}
      </div>
      )
    }
  }
  class ModalObject extends React.Component {
    render() {
      console.log(oDataList);
        let newmodallist = oDataList.map(
          items => <div  key={items.objectKey} className="modal bnr-modal fade" id={items.objectKey} tabindex="-1" role="dialog">
        		<div className="modal-dialog" role="document">
        			<div className="modal-content">
        				<div className="modal-header">
        					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        				</div>
        				<div className="modal-body modal-spa">
        					<img src={items.picUrl} className="img-responsive" alt=""/>
        					<h4>Pris: {items.price} €</h4>
                  <h5>{items.city}</h5>
                  <p>{items.description}</p>
        					<ul>
                    <li>Zon: {items.zone}</li>
                    <li>Storlek: {items.size} m&sup2;</li>
                    <li>Tomtstorlek: {items.propertySize} m&sup2;</li>
                    <li>Rum: {items.rooms}</li>
                    <li>Sovrum: {items.bedroom}</li>
                    <li>Badrum: {items.wc}</li>
                    <li>AC: {items.ac ? 'ja' : 'nej'}</li>
                    <li>Parkering: {items.parking ? 'ja' : 'nej'}</li>
                    <li>Pool: {items.pool ? 'ja' : 'nej'}</li>
                    <li>Terass: {items.padio ? 'ja' : 'nej'}</li>
                    <li>Hiss: {items.elevator ? 'ja' : 'nej'}</li>
                  </ul>
        				</div>
        			</div>
        		</div>
        	</div>
        );
      return (
        <div>
        {newmodallist}
      </div>
      )
    }
  }
  ReactDOM.render ( <RealObject />,
    document.getElementById('estatelist')
  );
  ReactDOM.render ( <ModalObject />,
    document.getElementById('modalDiv')
  );
});
}
