import React ,{Component} from 'react';
import NavTop from 'component/nav-top/NavTop'
import NavSide from 'component/nav-side/NavSide'
import './layout.css';
class Layout extends Component {
    render(){
        return (
        <div id="wrapper">
            <NavTop />
            <NavSide/>
            {this.props.children}
        </div>
        );
    }
}

export default Layout;