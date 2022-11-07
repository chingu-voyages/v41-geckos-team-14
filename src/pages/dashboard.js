import React from "react";
import { ColumnDirective, ColumnsDirective, KanbanComponent } from "@syncfusion/ej2-react-kanban";

import '../App.css';

function Dashboard() {

    return(
        <KanbanComponent>
            <ColumnsDirective>
                <ColumnDirective headerText="To Do" keyField="Open"></ColumnDirective>
                <ColumnDirective headerText="In Progress" keyField="In Progress"></ColumnDirective>
                <ColumnDirective headerText="Done" keyField="Done"></ColumnDirective>
            </ColumnsDirective>
        </KanbanComponent>
    )

}

export default Dashboard;