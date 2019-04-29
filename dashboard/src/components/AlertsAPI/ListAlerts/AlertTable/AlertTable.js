import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import AlertDetail from './AlertDetail/AlertDetail';
// import { modifyEvents } from "../../../../actions/eventActions";



class AlertTable extends React.Component {


 
  render() {
    const { title, data } = this.props;    

    return   (      


          <MaterialTable
            columns={[
              
              { title: "Event Type", field: 'event', },
              { title: "Effective", field: 'effective', defaultSort:"asc"},
              { title: "Expires", field: 'expires', },
              { title: "Severity", field: 'severity', },
              { title: "Area", field: 'areaDesc', render:(rowData)=> rowData.areaDesc.substring(0,24)+"..."},
            ]}
            options={{ search: false, showTitle:false, toolbar:false, detailPanelType:"single", paging: true, filtering:true, actionsColumnIndex: -1, pageSize: 20, pageSizeOptions: [10, 20, 30] }}
            data={data}
            title={title}
            detailPanel={[
                {
                  tooltip: 'Show more',
                  render: rowData => {
                    return <AlertDetail data={rowData}/>
                  },
                },
            ]}
            actions={[ 
            //   {
            //     icon:"search",
            //     tooltip:"Explore in BigQuery",
            //     onClick: (event, rowData) => {
            //       window.open(rowData.big_query_table_url, "_blank");
            //     },
            //   },
            //   {
            //     icon:"list",
            //     tooltip:"Event details",
            //     onClick: (event, rowData) => {
            //       history.push(`/events/${rowData.normalized_name}/`)
            //     },
            //   }
            ]
            }
          />
       
    );
  }
}

AlertTable.propTypes = {
  title:  PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};




export default connect(null, null)(withRouter(AlertTable));