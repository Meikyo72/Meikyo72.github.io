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
            <h4>Nielsen Estate</h4></div></a></div><button><a href=`#${item.objectKey}` data-toggle="modal">Detaljerad Information</a></button></div>
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
          items => <div  key={items.objectKey} className="modal bnr-modal fade" id={item.objectKey} tabindex="-1" role="dialog">
        		<div className="modal-dialog" role="document">
        			<div className="modal-content">
        				<div className="modal-header">
        					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        				</div>
        				<div className="modal-body modal-spa">
        					<img src={item.picUrl} className="img-responsive" alt=""/>
        					<h4>Blanditiis deleniti</h4>
        					<p>Test info </p>
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
