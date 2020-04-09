import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function Footer(props) {
    return (
        <BottomNavigation onChange={props.scrollToTop} showLabels className="footer">
            <BottomNavigationAction label="Back to Top" icon={<ArrowUpwardIcon />} />
        </BottomNavigation>
    )
}

export default Footer;