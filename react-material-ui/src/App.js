import './App.css';
import React from 'react';
import TabsMui from './Components/TabsMui';
import GridMui from './Components/GridMui';
import HiddenMui from './Components/HiddenMui';
import SwitchMui from './Components/SwitchMui';
import BoxMui from './Components/BoxMui';
import ContainerMui from './Components/ContainerMui';
import TextFieldMui from './Components/TextFieldMui';
import RadioMui from './Components/RadioMui';
import SliderMui from './Components/SliderMui';
import SelectBox from './Components/SelectBox';
import MuiButton from './Components/Button';
import ButtonGroupMui from './Components/ButtonGroup';
import CheckBoxMui from './Components/CheckBoxMui';

function App() {
  return (
    <div className="App">
      <h1>React Material UI</h1>
      <button type="button">Normal Button</button><br /><br /><hr />
      <MuiButton /><hr />
      <ButtonGroupMui /><hr />
      <CheckBoxMui /><hr />
      <RadioMui /><hr />
      <SliderMui /><hr />
      <SelectBox /><hr />
      <TextFieldMui /><hr />
      <SwitchMui /><hr />
      <BoxMui /><hr />
      <ContainerMui /><hr />
      <GridMui /><hr />
      <HiddenMui /><hr />
      <TabsMui /><hr />
    </div>
  );
}

export default App;
