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
import { TutorialStep1 } from '../components/menu/TutorialStep1';
import { TutorialStep4 } from '../components/menu/TutorialStep4';
import { TutorialStep3 } from '../components/menu/TutorialStep3';
import { TutorialStep2 } from '../components/menu/TutorialStep2';

const Tutorial = () => {
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
        { label: 'Click "Product Management"', command: () => history.push('/tutorial') },
        { label: 'Click "New"', command: () => history.push('/tutorial/tutorialStep2') },
        { label: 'Enter Product Details', command: () => history.push('/tutorial/tutorialStep3') },
        { label: 'Click "Save"', command: () => history.push('/tutorial/tutorialStep4') }
    ];

    return (
        <div className="grid p-fluid">
            <div className="col-fixed">
                <div className="card card-w-title">
                    <h5>Tutorial</h5>
                    <Steps model={wizardItems} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
                    <Route exact path={'/tutorial'} component={TutorialStep1} />
                    <Route path={'/tutorial/tutorialStep2'} component={TutorialStep2} />
                    <Route path={'/tutorial/tutorialStep3'} component={TutorialStep3} />
                    <Route path={'/tutorial/tutorialStep4'} component={TutorialStep4} />

                </div>
            </div>
        </div>
    )
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(Tutorial, comparisonFn);
