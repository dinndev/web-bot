import React from 'react';
import ReactDOM from 'react-dom';
import Chatpack from './components/Chatpack'
import { fontAwesomeInit } from './font-awesome'
import './tailwind.css'
import './index.scss';


const $offwhite = "#FEFEE2";
const $pink = "#FF4362";
const $darkblue = "#080059";
const $yellow = "#FFDE7D";
const $orange = "#FF5A43";

const styles = {
  background: `linear-gradient(45deg, ${$pink}, ${$orange})`
}

fontAwesomeInit()

ReactDOM.render(
  <Chatpack styles={styles} />,
  document.getElementById('root')
);
