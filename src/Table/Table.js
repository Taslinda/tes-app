import React,{Component} from 'react';
import {Navbar, Dropdown} from 'react-bootstrap';
import './Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import BootstrapTable from 'react-bootstrap-table-next'
import axios from 'axios';  
import {Link} from 'react-router-dom';

function rankFormatter(cell, row, rowIndex, formatExtraData) { 
    return ( 
        <div>
         <button className="edit-button">Edit</button> 
        </div> 
); } 

class Table extends Component{
    state = {
        products: [],
        columns: [{
          dataField: 'family_card_number',
          text: ''
        },
        {
          dataField: 'head_id',
          text: ''
        },
        {
            dataField: 'actions',
            text: '',
            formatter:rankFormatter
          },
        ]
      } 
      

      componentDidMount(){
          axios.get('https://vps.carakde.id/api_takalarsehat/api/v1/households').then(response=>{
              this.setState({
                  products:response.data.households
              })
          })
      }
      
    render(){
        return(
            <div className="table-body">
                <Navbar className="table-navbar">
                    <div className="table-wrapper">
                        <div className="wrap1">
                            <h5 className="table-brand" href="#home">Daftar Keluarga</h5>
                        </div>
                        <div className="wrap2">
                            <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        </div>
                        <div className="wrap3">
                            <Dropdown>
                              <Dropdown.Toggle>
                                <FontAwesomeIcon icon={faEllipsisV} className="search-icon" />
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item href="/table" className="item-list">User</Dropdown.Item>
                                <Dropdown.Item href="/table" className="item-list">Logout</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="wrap4">
                            <p>No. KK</p>
                        </div>
                        <div className="wrap5">
                            <p>Kepala Keluarga</p>
                        </div>
                        <div className="wrap6">
                            <p>Aksi</p>
                        </div>
                    </div>
                </Navbar>
                <BootstrapTable 
                    striped
                    borderless
                    keyField='id' 
                    data={ this.state.products } 
                    columns={ this.state.columns }/>
                <Link to="/form1">
                    <button type="button" className="button-tambah">
                        <div className="button-text">+</div>
                    </button>
                </Link>
            </div>
        )
    }
}

export default Table;