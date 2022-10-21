import React  from 'react';

// MWH removed Link as we're using an a link instead of default router to get back to marketing main.html page
// import { Link } from 'react-router-dom';
import classNames from 'classnames';

export const AppTopbar = (props) => {

    return (
        <div className="layout-topbar">
            {/* MWH Original Link call using React Router, changed to direct href below */}
            {/*<Link to= "main" className="layout-topbar-logo">
                <img src={props.layoutColorMode === 'light' ? 'assets/layout/images/play-logo-light.png' : 'assets/layout/images/play-logo-dark.png'} alt="logo"/>
                <span>PLAY</span>
            </Link>*/}

            <a href="/main.html" className="layout-topbar-logo">
                <img src={props.layoutColorMode === 'light' ? 'assets/layout/images/play-logo-light.png' : 'assets/layout/images/play-logo-dark.png'} alt="logo"/>
                <span>PLAY</span>
            </a>

            <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={props.onToggleMenuClick}>
                <i className="pi pi-bars"/>
            </button>


            <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={props.onMobileTopbarMenuClick}>
                <i className="pi pi-ellipsis-v" />
            </button>

                <ul className={classNames("layout-topbar-menu lg:flex origin-top", {'layout-topbar-menu-mobile-active': props.mobileTopbarMenuActive })}>
                    <li>
                        <a href="/helpDocumentation">
                          <button className="p-link layout-topbar-button" >
                              <i className="pi pi-question"/>
                              <span>Help</span>
                          </button>
                        </a>
                    </li>
                    <li>
                        <button className="p-link layout-topbar-button" onClick={props.onMobileSubTopbarMenuClick}>
                            <i className="pi pi-user"/>
                            <span>Profile</span>
                        </button>
                    </li>
                </ul>
        </div>
    );
}
