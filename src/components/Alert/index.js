import React from 'react';
import {connect} from 'react-redux';

function Alert(props) {
    return ( props.alert 
             ? <div className="alert alert-danger m-2 p-2" role="alert">
                   {props.alert}
               </div>
             : null
    )
}

const mapStateToProps = store => {
    return (
        {alert: store.app.alert}
    )
}
const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert)