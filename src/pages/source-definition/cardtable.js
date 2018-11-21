import React, { Component } from 'react';
import { Card, Col, Row, Layout} from 'antd';
import './cards.css'
import './cardtable.css'
import Tables from './table';
import { Input } from 'antd';

const Search = Input.Search;
class CardTable extends Component 
{
    
    render() 
    {
      return (
        <Card className="cardtablestyle">
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