import React from 'react';


const ProjectDataContext = React.createContext({});

export const ProjectDataProvider = ProjectDataContext.Provider;
export const ProjectDataConsumer = ProjectDataContext.Consumer;