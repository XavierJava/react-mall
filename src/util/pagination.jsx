import React, { Component } from 'react';
import  RcPagination  from 'rc-pagination';
import 'pagination_css/rc-pagination.min.css';

class Pagination extends Component {

    render(){
        return (
          <div className='row'>
          <div className='col-md-12'>
            <RcPagination {...this.props} 
            hideOnSinglePage
            showQuickJumper
            />
          </div>
          </div>
        );
    }
}

export default Pagination;