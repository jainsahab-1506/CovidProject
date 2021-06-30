import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
export default function StateData(props) {
    const classes = useStyles();
   return(
    <>
        <TableContainer component={Paper} class="w-50 m-auto">
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">STATE</StyledTableCell>
                <StyledTableCell align="center">CONFIRMED</StyledTableCell>
                <StyledTableCell align="center">RECOVERED</StyledTableCell>
                <StyledTableCell align="center">ACTIVE</StyledTableCell>
                <StyledTableCell align="center">DEATHS</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {props.statedata.map((data, index) => (
                
                <StyledTableRow key={index}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {data.state}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {data.confirmed}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {data.recovered}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {data.active}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {data.deaths}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
   );
}