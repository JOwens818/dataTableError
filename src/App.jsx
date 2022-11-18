import {
  Button,
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableSelectAll,
  TableSelectRow,
  TableToolbar,
  TableBatchAction,
  TableBatchActions,
  TableToolbarContent,
} from '@carbon/react';
import React from 'react';

function App() {
  const data = [
    {
      id: '1',
      DEPTCODE: '10',
      DEPTNAME: 'FINANCE',
      LOCATION: 'EDINBURGH',
      LAST_UPD_ID: null,
      LAST_UPD_TIME: '2022-06-06 15:56:21.060735',
    },
    {
      id: '2',
      DEPTCODE: '20',
      DEPTNAME: 'SOFTWARE',
      LOCATION: 'PADDINGTON',
      LAST_UPD_ID: null,
      LAST_UPD_TIME: '2022-06-06 15:56:21.060735',
    },
    {
      id: '3',
      DEPTCODE: '30',
      DEPTNAME: 'SALES',
      LOCATION: 'MAIDSTONEhgukyhu',
      LAST_UPD_ID: '548208IL',
      LAST_UPD_TIME: '2022-10-25 11:54:46.137256',
    },
    {
      id: '4',
      DEPTCODE: '50',
      DEPTNAME: 'ADMIN',
      LOCATION: 'BIRMINGHAM',
      LAST_UPD_ID: null,
      LAST_UPD_TIME: '2022-06-06 15:56:21.060735',
    },
    {
      id: '5',
      DEPTCODE: '12',
      DEPTNAME: null,
      LOCATION: 'bjmhnmnm',
      LAST_UPD_ID: '548208IL',
      LAST_UPD_TIME: '2022-10-25 12:00:34.049374',
    },
    {
      id: '6',
      DEPTCODE: '13',
      DEPTNAME: null,
      LOCATION: 'sdfvcc',
      LAST_UPD_ID: '548208IL',
      LAST_UPD_TIME: '2022-10-25 12:01:05.662858',
    },
  ];

  const headers = [
    {
      key: 'id',
      header: 'id',
    },
    {
      key: 'DEPTCODE',
      header: 'DEPTCODE',
    },
    {
      key: 'DEPTNAME',
      header: 'DEPTNAME',
    },
    {
      key: 'LOCATION',
      header: 'LOCATION',
    },
    {
      key: 'LAST_UPD_ID',
      header: 'LAST_UPD_ID',
    },
    {
      key: 'LAST_UPD_TIME',
      header: 'LAST_UPD_TIME',
    },
  ];

  return (
    <div>
      <DataTable useZebraStyles={true} rows={data} headers={headers} isSortable>
        {({
          rows,
          headers,
          getHeaderProps,
          getRowProps,
          getTableProps,
          getSelectionProps,
          getToolbarProps,
          getBatchActionProps,
        }) => (
          <TableContainer>
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  <TableSelectAll {...getSelectionProps()} />
                  {headers.map((header) => (
                    <TableHeader
                      key={header.key}
                      {...getHeaderProps({ header })}
                    >
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id} {...getRowProps({ row })}>
                    <TableSelectRow {...getSelectionProps({ row })} />
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
    </div>
  );
}

export default App;
