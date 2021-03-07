// import React from "react";

// export const Show = () => {
//   return <div>詳細表示画面</div>;
// };

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "id", label: "ID", minWidth: 100 },
  { id: "name", label: "名前", minWidth: 170 },
  {
    id: "startDate",
    label: "受講期間",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "endDate",
    label: "受講終了日",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "memo",
    label: "備考",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(id, name, startDate, endDate, memo) {
  // const density = population / size;
  return { id, name, startDate, endDate, memo };
}

const rows = [
  createData("1", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
  createData("2", "山田花子", "2021/03/01", "2021/04/01", "簡単なメモ"),
  createData("3", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
  createData("4", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
  createData("5", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
  createData("11", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
  createData("101", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
  createData("999", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
  createData("999", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
  createData("999", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
  createData("999", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
  createData("999", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 600,
  },
});

export const Show = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
