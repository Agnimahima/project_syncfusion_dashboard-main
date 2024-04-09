import React, { useEffect, useState } from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Edit,
  Toolbar,
  Page,
  Search,
  Sort,
  Inject,
  Selection,
  CommandColumn
} from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
// import '@syncfusion/ej2-base/styles/material.css';
// import '@syncfusion/ej2-react-grids/styles/material.css';
// import '@syncfusion/ej2-react-buttons/styles/material.css';
import { customersGrid } from '../data/dummy';
import { Header } from '../components';
import { base_url } from '../api/api';
import axios from 'axios'
const Softwares = () => {

  const [customersData, setcustomersData]=useState([]);
  
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sortSettings, setSortSettings] = useState({ columns: [] });
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchText, setSearchText] = useState('');


  useEffect(()=>{
    getAllUser();
  },[currentPage, pageSize, sortSettings, searchText])

  //const selectionsettings = { persistSelection: true };
  // const toolbarOptions = ['Delete'];
  // const editing = { allowDeleting: true, allowEditing: true };
  const ToolbarOptions = ['Search'];

  const CommandOptions = [
  { type: 'Edit', buttonOption: { iconCss: 'e-icons e-edit', cssClass: 'e-flat' } },
  { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } }
];
  const getAllUser=()=>{
    axios.get(`${base_url}/softwarecontroller`).then((response)=>{
      console.log(response.data)
      setcustomersData(response.data)
      setTotalPages(response.data.totalPages);
    },
    (error)=>{
      console.log(error)
    })
  };




  const handleSort = (e) => {
    const sortedColumns = e.columns.map((column) => ({
      field: column.field,
      direction: column.direction
    }));
    setSortSettings({ columns: sortedColumns });
  };

  // Handle page size change
  const handlePageSizeChange = (e) => {
    setPageSize(parseInt(e.target.value, 10));
  };

  // Handle page navigation
  const handlePageChange = (e) => {
    setCurrentPage(e.currentPage);
  };

  // Handle search event
  const handleSearch = (e) => {
    setSearchText(e.searchString);
  };

  // Handle checkbox selection
  const handleRowSelected = (e) => {
    const selectedItems = e.selectedRowIndexes.map((index) => customersData[index].softwareId);
    setSelectedItems(selectedItems);
  };

  const handleDelete = () => {
    // if (selectedItems.length > 0) {
    //   const updatedData = customersData.filter((item) => !selectedItems.includes(item.id));
    //   setData(updatedData);
    //   setSelectedItems([]);
  
    //   // Perform API call or any other necessary action to delete the selected items
    //   // You can use axios.delete or any other method to send a request to your API
    //   // Example:
    //   axios.delete('/api/data', { data: { selectedItems } })
    //     .then((response) => {
    //       console.log('Selected items deleted successfully');
    //     })
    //     .catch((error) => {
    //       console.error('Error deleting items:', error);
    //     });
    // }
  };


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
       {/* <input type="text" value={filterSettings.text || ''} onChange={handleSearchChange} placeholder="Search" /> */}
      <Header category="Page" title="Software" />
      <GridComponent
        dataSource={customersData}
        allowPaging={true}
        pageSettings={{ pageSize: pageSize, currentPage: currentPage, totalRecordsCount: totalPages }}
        allowSorting={true}
        sortSettings={sortSettings}
        allowEditing={true}
        editSettings={{ allowDeleting: true }}
        allowSelection={true}
        selectionSettings={{ checkboxMode: 'ResetOnRowClick', persistSelection: true }}
        toolbar={ToolbarOptions}
        actionComplete={getAllUser}
        rowSelected={handleRowSelected}
        delete={handleDelete}
      >
         
        <ColumnsDirective>
        <ColumnDirective field='softwareId' headerText='ID'  />

        <ColumnDirective field='softName' headerText='SoftwareName' />
        <ColumnDirective field='client' headerText='Client' />
        <ColumnDirective field='company' headerText='Company' />
        <ColumnDirective field='location' headerText='Location' />
        <ColumnDirective field='projectManager' headerText='Project Manager' />
        {/* <ColumnDirective headerText="Edit" width="100" commands={CommandOptions} /> */}
        </ColumnsDirective>
        <Inject services={[Page, Sort, Edit, Toolbar, Search, Selection]} />
        
        {/* sort */}
      </GridComponent>
    </div>
  );
};

export default Softwares;// exporting
