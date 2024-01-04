import '../App.css';
import { GridView, LocalDataProvider } from 'realgrid';
import { useEffect, useRef } from 'react';
import { columns, fields, rows } from '../components/realgrid-data';
import 'realgrid/dist/realgrid-style.css';

function GridSample() {
  const realgridElement = useRef<any>(null);
  console.log('GridSample 호출');

  useEffect(() => {
    console.log('useEffect...');
    const container = realgridElement.current;
    if (
      container !== null &&
      container !== undefined &&
      realgridElement.current
    ) {
      console.log('useEffect 1', container);
      const dp = new LocalDataProvider(false);
      // const gv = new GridView(container);

      // gv.setDataSource(dp);
      // dp.setFields(fields);
      // gv.setColumns(columns);
      // dp.setRows(rows);

      return () => {
        dp.clearRows();
        // gv.destroy();
        dp.destroy();
      };
    }
  }, []);

  return (
    <div className="App">
      <h2>RealGrid2 React Sample</h2>
      {realgridElement && (
        <div
          id="gridView"
          style={{ height: '500px', width: '100%' }}
          ref={realgridElement}
        />
      )}
    </div>
  );
}

export default GridSample;
