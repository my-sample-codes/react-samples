// @flow

import React, {Component} from 'react';
import style from 'styled-components';

import type { DiagComponentProps } from 'react-flow-diagram';
import { setCustom ,store ,diagramOn} from 'react-flow-diagram'
import Background from './../../../assets/excel.png';
import FormDialog from '../component/FormDialog'

/*
 * Presentational
 * ==================================== */

const EventExcelStyle = style.div`
  background-image : url(${Background});
  background-color: #fff;
  display: flex;
  position: relative;
  flex-flow: row nowrap;
  align-items: center;
  width: 50px;
  height: 50px;
  justify-content: center;
`;

const Name = style.span`
  position: absolute;
  top: 100%;
  width: 200%;
  padding: .5em;
  font-size: .8rem;
`;

const EditName = style.textarea`
  position: absolute;
  top: 100%;
  width: 200%;
  padding: .5em;
  border: none;
  font-size: .8rem;
  text-align: center;
  border-radius: .1rem;
  resize: none;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.8);
`;

export type EventProps = DiagComponentProps & {
  name: string,
  isEditing: boolean,
  toggleEdit: boolean => void,
  dialogBox : boolean,
  refreshName: (SyntheticEvent<HTMLTextAreaElement>) => void,
  handleKeyPress: (SyntheticKeyboardEvent<HTMLTextAreaElement>) => void,
  handleRef: HTMLTextAreaElement => void,
};
const Excel = (props: EventProps) => (
  <EventExcelStyle width={props.model.width} height={props.model.height}  onDoubleClick = {props.dialogBox}>
    <EditName
      value={props.name}
      onChange={props.refreshName}
      onKeyDown={props.handleKeyPress}
      innerRef={textarea => props.handleRef(textarea)}
      style={{ display: props.isEditing ? 'block' : 'none' }}
    />
    <Name
     // onDoubleClick={() => props.dialogBox()}
     // style={{ display: !props.isEditing ? 'block' : 'none' }}
    >
      {props.model.type}
    </Name>
  </EventExcelStyle>
);

/*
 * Container
 * ==================================== */

type ExcelEventComponentProps = DiagComponentProps;
type ExcelEventComponentState = {
  isEditing: boolean,
  name: string,
};
class ExcelEventComponent extends React.PureComponent<
  ExcelEventComponentProps,
  ExcelEventComponentState
>  {
  textarea: ?HTMLTextAreaElement;
  dialogBox : ?FormDialog;
  constructor(props){
    super(props);

    this.getEntityData = this.getEntityData.bind(this);
    this.dialogBoxStateChange = this.dialogBoxStateChange.bind(this);
  }
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
     const { textarea } = this;
     if (isEditing && textarea) {
       setTimeout(() => textarea.focus(), 16 * 4);
     }
     this.setState({ isEditing });
  };

  handleClickOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  dialogBox = (isOpen : boolean) => {
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
    this.setState({ name: ev.currentTarget.value });
  };

  handleKeyPress = (ev: SyntheticKeyboardEvent<HTMLTextAreaElement>) => {
    switch (ev.key) {
      case 'Enter':
        this.toggleEdit(false);
        this.props.setName({ id: this.props.model.id, name: this.state.name });
        break;
      case 'Escape':
        this.toggleEdit(false);
        this.setState({ name: this.props.model.name });
        break;
      // no default
    }
  };

  render() {

    console.log('In event component')
    return (
      <div>

        <Excel
        {...this.props}
        isEditing={this.state.isEditing}
        name={this.state.name}
        toggleEdit={this.toggleEdit}
        dialogBox = {this.dialogBox}
        hello = {this.hello}
        refreshName={this.refreshName}
        handleKeyPress={this.handleKeyPress}
        handleRef={this.handleRef}
      />
      <FormDialog isOpen={this.state.isOpen} getEntityData={this.getEntityData} dialogBoxStateChange = {this.dialogBoxStateChange}/>
</div>
      
    );
  }
}

export default ExcelEventComponent;