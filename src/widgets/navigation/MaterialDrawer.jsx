import Drawer from "@material-ui/core/Drawer";
import React, {Component} from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import MaterialDrawerList from "./MaterialDrawerList";

export default class MaterialDrawer extends Component {

    state = {
        isOpen: true
    };

    static style = {
        width: 1000,
        flexShrink: 0,
        whiteSpace: "nowrap"
    };

    static propTypes = {
        footer:PropTypes.any,
        header:PropTypes.any,
        onItemClick:PropTypes.func,
        initialIsOpen: PropTypes.bool,
        classes: PropTypes.object.isRequired,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func
    };


    get isOpen() {
        return this.state.isOpen;
    }

    set isOpen(isOpen) {
        this.setState({isOpen});
    }

    get header() {

    }

    get body() {

    }

    get footer() {

    }

    get materialList() {


        let list;

        let {
            items,
            onItemClick
        } = this.props;

        if (items !== undefined) {
            list = (
                <MaterialDrawerList
                    items={items}
                    onItemClick={(e,itemId) => {
                        (onItemClick || (
                            (drawer, itemId) => {
                                console.log(`Unhandled click on ${itemId}`);
                            }
                        ))(this,itemId,e);
                    }}
                />
            );
        }

        return list;
    }

    componentDidMount() {
        this.setState({isOpen: this.props.initialIsOpen});
    }

    render() {

        let {
            classes,
            onMouseLeave,
            onMouseEnter
        } = this.props;

        let {
            isOpen
        } = this.state;

        return (
            <Drawer
                variant="permanent"
                style={{
                    width: 1000
                }}
                //TODO: This has to change to provide for a more Design relative design
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: isOpen,
                    [classes.drawerClose]: !isOpen
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: isOpen,
                        [classes.drawerClose]: !isOpen
                    })
                }}
                onMouseEnter={e => {
                    if (onMouseEnter !== undefined) onMouseEnter(this);
                }}

                onMouseLeave={() => {
                    if (onMouseLeave !== undefined) onMouseLeave(this);
                }}

            >

                {this.props.header}
                {this.materialList}
                <div style={{flexGrow:1}}/>
                {this.props.footer}
            </Drawer>
        );
    }
}

