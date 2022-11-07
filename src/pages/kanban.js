import React from "react";
import { ColumnDirective, ColumnsDirective, KanbanComponent } from "@syncfusion/ej2-react-kanban";

import '../App.css';
import { kanbanData, kanbanGrid } from "../data/dummyData"

function Kanban() {
        return(
        <KanbanComponent
            id="kanban"
            keyField="Status"
            dataSource={kanbanData}
            cardSettings={{ contentField: "Summary", headerField: "Id" }}
        >
            <ColumnsDirective>
                {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                {/* <ColumnDirective headerText="To Do" keyField="Open"></ColumnDirective> */}
                {/* <ColumnDirective headerText="In Progress" keyField="In Progress"></ColumnDirective>
                <ColumnDirective headerText="Done" keyField="Done"></ColumnDirective> */}
            </ColumnsDirective>
        </KanbanComponent>
    )
}


export default Kanban;