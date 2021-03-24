import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { CreateButton } from "./CreateButton";
import { fetchMember } from "../apis/auth.api";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { CreateModal } from "./CreateModal";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  useEffect(() => {
    fetchMember(1).then((data) => console.log(data));
  }, []);

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles((theme) => ({
  table: {
    minWidth: 500,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export const Find = ({ match }) => {
  const classes = useStyles2();
  const [loading, setLoading] = useState(false);

  const [member, setMember] = useState({
    id: 1,
    first_name: "",
    last_name: "",
    first_name_kana: "",
    last_name_kana: "",
    github_id: "",
    twitter_id: "",
    start_date: "",
    repository_url: "",
    memo: "",
  });

  const requestMember = async () => {
    setLoading(true);
    try {
      const data = await fetchMember(match.params.id);
      setMember(data.member);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    requestMember().then();
  }, []);

  return (
    <>
      {loading && (
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Box display="flex" alignItems="center" justifyContent="space-around">
        <Typography variant="h3" gutterBottom>
          受講生詳細データ
          {member.id}
        </Typography>
        <CreateButton buttonName={"戻る"} />
      </Box>
      <hr size="1" />
      <Box mt={20} display="flex" alignItems="center" justifyContent="center">
        <TableContainer
          component={Paper}
          style={{
            width: "60vw",
          }}
        >
          <Table className={classes.table} aria-label="custom pagination table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  id
                </TableCell>
                <TableCell style={{ width: 170 }} align="right">
                  {member.id}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  氏名
                </TableCell>
                <TableCell style={{ width: 170 }} align="right">
                  {member.first_name} {member.last_name}
                  <CreateModal
                    modalName="編集"
                    dataName="氏名"
                    updateName="first_name"
                    updateNameSub="last_name"
                    memberId={member.id}
                    updateData={member.first_name}
                    updateDataSub={member.last_name}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  GitHub_ID
                </TableCell>
                <TableCell style={{ width: 170 }} align="right">
                  {member.github_id}
                  <CreateModal
                    modalName="編集"
                    dataName="GitHub_ID"
                    updateName="github_id"
                    memberId={member.id}
                    updateData={member.github_id}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  twitter_id
                </TableCell>
                <TableCell style={{ width: 170 }} align="right">
                  {member.twitter_id}
                  <CreateModal
                    modalName="編集"
                    dataName="twitter_id"
                    updateName="twitter_id"
                    memberId={member.id}
                    updateData={member.twitter_id}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  受講開始日
                </TableCell>
                <TableCell style={{ width: 170 }} align="right">
                  {member.start_date}
                  <CreateModal
                    modalName="編集"
                    dataName="受講開始日"
                    updateName="start_date"
                    memberId={member.id}
                    updateData={member.start_date}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  リポジトリ URL
                </TableCell>
                <TableCell style={{ width: 170 }} align="right">
                  {member.repository_url}
                  <CreateModal
                    modalName="編集"
                    dataName="リポジトリURL"
                    updateName="repository_url"
                    memberId={member.id}
                    updateData={member.repository_url}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  備考
                </TableCell>
                <TableCell style={{ width: 170 }} align="right">
                  {member.memo}
                  <CreateModal
                    modalName="編集"
                    dataName="備考"
                    updateName="memo"
                    memberId={member.id}
                    updateData={member.memo}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        mt={5}
        display="flex"
        alignItems="center"
        justifyContent="space-around"
      >
        <CreateButton buttonName={"編集"} />
        <CreateButton buttonName={"削除"} />
      </Box>
    </>
  );
};
