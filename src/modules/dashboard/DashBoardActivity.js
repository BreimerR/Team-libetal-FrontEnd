import React, {Component} from "react";
import Column from "../../widgets/Column";
import Row from "../../widgets/Row";
import Flex from "../../widgets/Flex";
import MaterialSelect from "../../widgets/input/MaterialSelect";
import MaterialDivider from "../../widgets/MaterialDivider";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MaterialIcon from "../../widgets/MaterialIcon";
import Chip from "@material-ui/core/Chip";
import MaterialBtn from "../../widgets/MaterialBtn";
import Colors from "../../Colors";
import PaginationController from "../../widgets/pagination/PaginationController";
import MaterialTextView from "../../widgets/MaterialTextView";
import Settings from "../../utils/Settings";
import HeaderOption from "./widgets/HeaderOption";
import Footer from "../Footer";
import MaterialCol from "../../widgets/grid/MaterialCol";
import Paper from "@material-ui/core/Paper";
import MaterialRow from "../../widgets/grid/MaterialRow";

export default class DashBoardActivity extends Component {

    state = {
        pageItemsCountKeys: [10, 25, 50, 100],
        pageItemsCountIndex: 0,
        visiblePageIndexControls: 5,
        searchOptions: [
            {
                key: 0,
                value: "All"
            }
        ],
        itemsPerPage: 10,
        totalItems: 1000,
        currentSelectIndex: 0,
        currentFilters: []
    };

    constructor(props) {
        super(props);
        this.bindEvents();
    }


    bindEvents() {

    }

    get createAction() {
        return (
            <MaterialBtn
                content={"New Action"}
                color={Colors.green}
                textColor={Colors.white}
            />
        );
    }

    get secondarySearchPlaceHolder() {
        return "";
    }

    onPagerPageUpdate(e, b, c) {

    }

    get paginationSelect() {
        return (
            <MaterialSelect

                selectionItems={this.state.pageItemsCountKeys.map((v, i) => ({
                    key: i,
                    value: v
                }))}
                selectionHeader={
                    <MaterialRow paddingLR={4}>
                        <MaterialTextView
                            text={`Table items count`}
                            textColor={Settings.colorSecondary}
                            fontSize={12}
                        />
                    </MaterialRow>
                }
                onChange={(e, n) => {
                    this.setState({pageItemsCountIndex: n.props.value});
                }}
                value={this.state.pageItemsCountIndex}
                style={{marginTop: 0}}
                color={"secondary"}

            />
        );
    }

    createFilterOption(id, title, menuItems, textColor = "green", iconColor = "white") {
        return (
            <HeaderOption
                title={title}
                btnColor={Colors.transparent}
                textColor={Colors[textColor]}
                id={id}
                menuItems={menuItems}
            />
        );
    }

    get paginationController() {
        return (
            <PaginationController
                onUpdate={this.onPagerPageUpdate}
                visiblePageIndexControls={this.state.visiblePageIndexControls}
                totalItems={this.state.totalItems}
                startPage={1}
                itemsPerPage={this.state.pageItemsCountKeys[this.state.pageItemsCountIndex]}/>
        );
    }

    get head() {
        return (
            <>
                <MaterialCol xs={12} lg={8} alignItems={Flex.CENTER}>
                    <MaterialRow justify={Flex.CENTER} alignItems={Flex.CENTER} paddingTop={32}>
                        <MaterialSelect
                            disableUnderline
                            style={{position: "relative", marginTop: 0, marginLeft: 6}}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.state.searchOptions[this.state.currentSelectIndex].value}
                            renderValue={() => this.state.searchOptions[this.state.currentSelectIndex].value}
                            selectionItems={this.state.searchOptions}
                            onChange={
                                (e, b, c) => {
                                    this.setState({currentSelectIndex: b.props.value});
                                }
                            }
                        />
                        <MaterialDivider height={24} orientation={MaterialDivider.VERTICAL} spacing={6}/>
                        <InputBase
                            placeholder={this.secondarySearchPlaceHolder}
                            style={{flexGrow: .8}}
                        />
                        <IconButton>
                            <MaterialIcon icon={"Search"}/>
                        </IconButton>
                        <Chip size={"small"} label={"by: @Chris"} color={"secondary"}/>
                        <Chip size={"small"} label={"by: @Chris"} onDelete={() => {
                        }}/>
                        <IconButton style={{padding: 6, margin: 2}}>
                            <MaterialIcon icon={"Save"}/>
                        </IconButton>
                    </MaterialRow>
                    <MaterialDivider width={"80%"} orientation={"horizontal"}/>
                </MaterialCol>
                <MaterialCol xs={12} lg={4} justify={Flex.CENTER} alignItems={Flex.END}>
                    {this.createAction}
                </MaterialCol>
            </>
        );
    }

    get body() {

    }

    render() {
        return (
            <Paper style={{borderRadius: 0}}>
                <MaterialCol alignItems={Flex.SPACE_AROUND} style={{paddingLeft: 8, paddingRight: 8}}>
                    <Row>
                        {this.head}
                    </Row>
                    <Row>
                        {this.body}
                    </Row>
                </MaterialCol>
                <Footer style={{marginTop: 10}}/>
            </Paper>
        );

    }

}