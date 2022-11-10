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
            cardSettings={{ 
                headerField: "Id",
                contentField: "Summary",
                selectionType: "Multiple",
                grabberField: "Color",
                tagsField: "Tags"
            }}
            width="100%" height="100%"
        >
            <ColumnsDirective>
                {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
            </ColumnsDirective>
        </KanbanComponent>
    )
}


export default Kanban;