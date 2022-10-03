import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Steps } from 'primereact/steps';
import { TabMenu } from 'primereact/tabmenu';
import { TieredMenu } from 'primereact/tieredmenu';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { ContextMenu } from 'primereact/contextmenu';
import { MegaMenu } from 'primereact/megamenu';
import { PanelMenu } from 'primereact/panelmenu';
import { Route, useHistory, useLocation } from 'react-router-dom';
import { PersonalDemo } from '../components/menu/PersonalDemo';
import { ConfirmationDemo } from '../components/menu/ConfirmationDemo';
import { PaymentDemo } from '../components/menu/PaymentDemo';
import { SeatDemo } from '../components/menu/SeatDemo';

const MenuDemo = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const menu = useRef(null);
    const contextMenu = useRef(null);
    const history = useHistory();
    const location = useLocation();

    const checkActiveIndex = useCallback(() => {
        const paths = location.pathname.split('/');
        const currentPath = paths[paths.length - 1];

        switch (currentPath) {
            case 'seat':
                setActiveIndex(1);
                break;
            case 'payment':
                setActiveIndex(2);
                break;
            case 'confirmation':
                setActiveIndex(3);
                break;
            default:
                break;
        }
    },[location])

    useEffect(() => {
        checkActiveIndex();
    }, [checkActiveIndex])

    const wizardItems = [
        { label: 'Click "Product Management"', command: () => history.push('/menu') },
        { label: 'Click "New"', command: () => history.push('/menu/seat') },
        { label: 'Enter Product Details', command: () => history.push('/menu/payment') },
        { label: 'Click "Save"', command: () => history.push('/menu/confirmation') }
    ];

    return (
        <div className="grid p-fluid">
            <div className="col-fixed">
                <div className="card card-w-title">
                    <h5>How to Use Play Product Management</h5>
                    <Steps model={wizardItems} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
                    <Route exact path={'/menu'} component={PersonalDemo} />
                    <Route path={'/menu/confirmation'} component={ConfirmationDemo} />
                    <Route path={'/menu/payment'} component={PaymentDemo} />
                    <Route path={'/menu/seat'} component={SeatDemo} />
                </div>
            </div>
        </div>
    )
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(MenuDemo, comparisonFn);
