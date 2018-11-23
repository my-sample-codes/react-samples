import React, { Component } from 'react';
import { Card, Col, Row, Layout, Icon, Popover} from 'antd';
import './cards.css'
import './cardtable.css'
import Tables from './table';
import { Input } from 'antd';
import './SourceDefinition.css';

const Search = Input.Search;
var hoverContent = require('./../infomapper.js').default;
class CardTable extends Component 
{
    
    render() 
    {
      return (
        <Card className="cardtablestyle">
              <header className="dup-etl-header">Duplicate ETL Jobs</header>
              {/* <Icon className="info-icon" type="question-circle" style={{marginTop:"-10px"}} /> */}
              <Popover placement = "right" title="Datasets"
                               content={hoverContent.maparray.duplicate_etl_jobs}                               
                                  >
                               <Icon className="info-icon" type="question-circle" style={{marginTop:"-20px"}} />
              </Popover>
               <Search
                        placeholder="Search Source Name"
                        onSearch={value => console.log(value)}
                        className = "searchstyle"
                />
                <br/>
                <br/>
            <Tables/>
         </Card>
      );
    }
}

export default CardTable;