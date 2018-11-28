// @flow

import React from 'react';
import style from 'styled-components';

import type {DiagComponentProps} from 'react-flow-diagram';
import Background from './../../../assets/icons/database.png';
import FormDialog from '../component/FormDialog'
import { setCustom ,store } from 'react-flow-diagram'
/*
 * Presentational
 * ==================================== */

const DBStyle = style.div`
background-image : url(${Background});
display: flex;
flex-flow: row nowrap;
width: 50px;
height: 50px;
`;

const Name = style.span`
  position: absolute;
  top: 100%;
  width: 100%;
  padding: .5em;
  font-size: .8rem;
`;

const EditName = style.textarea`
  position: absolute;
  top: 100%;
  width: 100%;
  padding: .5em;
  border: none;
  font-size: .8rem;
  text-align: center;
  border-radius: .1rem;
  resize: none;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.8);
`;

export type DBProps = DiagComponentProps & {
  name: string,
  isEditing: boolean,
  toggleEdit: boolean => void,
  dialogBox : boolean,
  refreshName: (SyntheticEvent<HTMLTextAreaElement>) => void,
  handleKeyPress: (SyntheticKeyboardEvent<HTMLTextAreaElement>) => void,
  handleRef: HTMLTextAreaElement => void,
  showEditor: boolean => void
};
const DB = (props: DBProps) => (
  <DBStyle
    width={props.model.width}
    height={props.model.height}
    isEditing={props.isEditing}
    // onClick={() => {return props.showEditor}}
    onDoubleClick = {props.dialogBox}
  >
    <EditName
      value={props.name}
      onChange={props.refreshName}
      onKeyDown={props.handleKeyPress}
      innerRef={textarea => props.handleRef(textarea)}
      style={{display: props.isEditing ? 'block' : 'none'}}
    />
    <Name
      // onDoubleClick={() => props.toggleEdit(true)}
      // style={{display: !props.isEditing ? 'block' : 'none'}}
    >
      {props.model.type}
    </Name>
  </DBStyle>
);

/*
 * Container
 * ==================================== */

type DBComponentProps = DiagComponentProps;
type DBComponentState = {
  isEditing: boolean,
  name: string,
};
class DBComponent extends React.PureComponent<
  DBComponentProps,
  DBComponentState
  > {
    constructor(props){
      super(props);
  
      this.getEntityData = this.getEntityData.bind(this);
      this.dialogBoxStateChange = this.dialogBoxStateChange.bind(this);
    }
  textarea: ?HTMLTextAreaElement;

  state = {
    isEditing: false,
    isOpen : false,
    name: this.props.model.name,
  };

  componentWillUnmount() {
    this.textarea = null;
  }

  handleRef = (textarea: HTMLTextAreaElement) => {
    if (!this.textarea) {
      this.textarea = textarea;
    }
  };

  toggleEdit = (isEditing: boolean) => {
   
    const {textarea} = this;
    if (isEditing && textarea) {
      setTimeout(() => textarea.focus(), 16 * 4);
    }
    this.setState({isEditing});
  };

  dialogBox = () => {
    this.setState({ isOpen: true });
   return(<FormDialog isOpen={this.state.isOpen} getEntityData={this.getEntityData} dialogBoxStateChange = {this.dialogBoxStateChange}/>);
  }

  getEntityData(value){
    this.state.entityData = value;
    store.dispatch(setCustom({id: this.props.model.id, custom: this.state.entityData}));
  }

  dialogBoxStateChange(){
    this.setState({isOpen:false});
  }

  refreshName = (ev: SyntheticEvent<HTMLTextAreaElement>) => {
    this.setState({name: ev.currentTarget.value});
  };

  handleKeyPress = (ev: SyntheticKeyboardEvent<HTMLTextAreaElement>) => {
    console.log('on key press');
    switch (ev.key) {
      case 'Enter':
        this.toggleEdit(false);
        this.props.setName({id: this.props.model.id, name: this.state.name});
        break;
      case 'Escape':
        this.toggleEdit(false);
        this.setState({name: this.props.model.name});
        break;
      // no default
    }
  };

  showEditor = (isClicked: boolean) => {
    console.log('This.show called');
  }

  render() {
    return (
      <div>
      <DB
        {...this.props}
        isEditing={this.state.isEditing}
        name={this.state.name}
        toggleEdit={this.toggleEdit}
        dialogBox = {this.dialogBox}
        refreshName={this.refreshName}
        handleKeyPress={this.handleKeyPress}
        handleRef={this.handleRef}
        showEditor={this.showEditor}
      />
      <FormDialog isOpen={this.state.isOpen} getEntityData={this.getEntityData} dialogBoxStateChange = {this.dialogBoxStateChange}/>
      </div>
    );
  }
}

export default DBComponent;
