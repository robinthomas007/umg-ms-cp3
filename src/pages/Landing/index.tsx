import Table from 'pages/Landing/components/Table';
import TableTools from 'pages/Landing/components/Tools';

export default function App() {
  return (
    <>
      <TableTools />
      <div style={{ paddingRight: '1rem', paddingLeft: '1rem' }}>
        <Table />
      </div>
    </>
  );
}
