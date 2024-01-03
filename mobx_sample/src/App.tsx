import React, { Component, useEffect, useRef } from 'react';
import { observer, PropTypes } from 'mobx-react';
import _ from 'lodash';
import { GridView, LocalDataProvider } from 'realgrid';
import { columns, fields, rows } from './realgrid-data.js';

const App = () => {
  const realgridElement = useRef<any>();

  useEffect(() => {
    const container = realgridElement.current;
    const dp = new LocalDataProvider(true);
    const gv = new GridView(container);

    gv.setDataSource(dp);
    dp.setFields(fields);
    gv.setColumns(columns);
    dp.setRows(rows);

    return () => {
      dp.clearRows();
      gv.destroy();
      dp.destroy();
    };
  }, []);

  return (
    <div className="App">
      <h2>RealGrid2 React Sample</h2>
      <div style={{ height: '500px', width: '100%' }} ref={realgridElement} />
    </div>
  );
};

export default App;
