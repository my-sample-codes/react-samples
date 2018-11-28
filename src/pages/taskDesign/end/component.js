// @flow

import React, {Component} from 'react';
import style from 'styled-components';
import Background from './../../../assets/circleEnd.png';
import type { DiagComponentProps } from 'react-flow-diagram';
 /* Presentational
 * ==================================== */

const EndStyle = style.div`
  background-image : url(${Background});
  background-color: #fff;
  display: flex;
  position: relative;
  flex-flow: row nowrap;
  align-items: center;
  width: 48px;
  height: 48px;
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

export type EndProps = DiagComponentProps & {
  name: string,
  isEditing: boolean,
  toggleEdit: boolean => void,
  refreshName: (SyntheticEvent<HTMLTextAreaElement>) => void,
  handleKeyPress: (SyntheticKeyboardEvent<HTMLTextAreaElement>) => void,
  handleRef: HTMLTextAreaElement => void,
};
const End = (props: EndProps) => (
  <EndStyle width={props.model.width} height={props.model.height}>
    <EditName
      value={props.name}
      onChange={props.refreshName}
      onKeyDown={props.handleKeyPress}
      innerRef={textarea => props.handleRef(textarea)}
      style={{ display: props.isEditing ? 'block' : 'none' }}
    />
    { <Name
      //onDoubleClick={() => props.dialogBox(updateState(true))}
     // style={{ display: !props.isEditing ? 'block' : 'none' }}
    >
      {props.model.type}
    </Name> }
  </EndStyle>
);

/*
 * Container
 * ==================================== */

type EndComponentProps = DiagComponentProps;
type EndComponentState = {
  isEditing: boolean,
  name: string,
};
class EndComponent extends React.PureComponent<
EndComponentProps,
EndComponentState
>  {
  textarea: ?HTMLTextAreaElement;
  state = {
    isEditing: false,
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
    }
  };

  render() {
    return (
      <div>
        <End
        {...this.props}
        isEditing={this.state.isEditing}
        name={this.state.name}
        toggleEdit={this.toggleEdit}
        refreshName={this.refreshName}
        handleKeyPress={this.handleKeyPress}
        handleRef={this.handleRef}
      />
</div>
      
    );
  }
}

export default EndComponent;

// function updateState(isOpen){
//   console.log('hoioooooooooooooo')
//   this.setState({isOpen})
// }
