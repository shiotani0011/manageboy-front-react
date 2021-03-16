import React, { useState, useEffect, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { DEFAULT_API_LOCALHOST } from "../config/env";
import { Link } from "react-router-dom";

import {
  initialState,
  membersActionTyps,
  membersReducer,
} from "../reducers/members";
import axios from "axios";
import { SettingsInputSvideoSharp } from "@material-ui/icons";

const columns = [
  { id: "id", label: "ID", minWidth: 100 },
  { id: "first_name", label: "名前" },
  { id: "last_name" },
  {
    id: "start_date",
    label: "受講期間",
    minWidth: 120,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "end_date",
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

// function createData(id, first_name, last_name, start_date, end_date, mem) {
//   return { id, first_name, last_name, start_date, end_date, mem };
// }

// const rows = [
//   createData("1", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
//   createData("2", "山田花子", "2021/03/01", "2021/04/01", "簡単なメモ"),
//   createData("3", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
//   createData("4", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
//   createData("5", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
//   createData("11", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
//   createData("101", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
//   createData("999", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
//   createData("999", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
//   createData("999", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
//   createData("999", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
//   createData("999", "田中太郎", "2021/03/01", "2021/04/01", "簡単なメモ"),
// ];

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

  // const axiosMembers = () => {
  //   axios
  //     .get("http://localhost:4001/api/members")
  //     .then((res) => {
  //       this.setState({ members: res.data });
  //     })
  //     .catch((data) => {
  //       console.log(data);
  //     });
  // };

  // const [state, dispatch] = useReducer(membersReducer, initialState);

  // useEffect(() => {
  //   dispatch({ type: membersActionTyps.FETCHING });
  //   fetchMembers().then((res) =>
  //     dispatch({
  //       type: membersActionTyps.FETCH_SUCCESS,
  //       payload: {
  //         members: res.members,
  //       },
  //     })
  //   );
  // }, []);

  // データ取得
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`${DEFAULT_API_LOCALHOST}/api/members`);
      console.log(result);
      console.log(result.data);
      setMembers(result.data);
    }
    fetchData();
  }, []);

  return (
    <>
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
              {members.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.first_name}>
                          <Link to="/find">
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </Link>
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
          count={members.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};
