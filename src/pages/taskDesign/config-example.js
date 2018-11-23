// @flow

import Task from './task/component';
import taskIcon from './task/icon';
import Event from './event/component';
import eventIcon from './event/icon';
import csv from './filereader/component'
import fileIcon from './filereader/icon'
import DB from './db/component';
import dbIcon from './db/icon';
import excel from './excel/component';
import excelIcon from './excel/icon'
import end from './end/component';
import endIcon from './end/icon'
import type { SetCustomPayload ,ConfigState, CustomEntities } from 'react-flow-diagram';

const config: ConfigState = {
  entityTypes: {
    Task: {
      width: 125,
      height: 75,
      validLinkEntity : [
        "Event","csv"
      ],
    },
    Event: {
      width: 50,
      height: 50,
      validLinkEntity : [
        "DB","csv"
      ],
    },
    csv: {
      width: 64,
      height: 64,
      validLinkEntity : [
        "DB"
      ],
    },
    DB: {
      width: 64,
      height: 64,
      validLinkEntity : [
        "Event","csv"
      ],
    },
    Excel : {
      width: 64,
      height: 64,
      validLinkEntity : [
        "Task","csv"
      ],
    },
    End : {
      width: 64,
      height: 64,
      validLinkEntity : [
      ],
    },
  },
  gridSize: 15,
};

const customEntities: CustomEntities = {
  Task: {
    component: Task,
    icon: taskIcon,
  },
  Event: {
    component: Event,
    icon: eventIcon,
  },
  csv: {
    component: csv,
    icon: fileIcon,
  },
  DB: {
    component: DB,
    icon: dbIcon,
  },
  Excel :{
    component : excel,
    icon : excelIcon
  },
  End :{
    component : end,
    icon : endIcon
  }
};

export { config, customEntities};
// ,custom
