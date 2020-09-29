import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";

const CVList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/information")
      .then((res) => res.json())
      .then((data) => {
        console.log("data from database", data);
        setData(data);
        console.log(data);
      });
  }, []);

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const classes = useStyles();
  console.log(data);
  return (
    <div>
      <h1 className="text-center display-3">CVList</h1>

      <div className="table">
        <TableContainer component={Paper}>
          <div className="tables-head d-flex justify-content-center">
            <h1>Recent CV</h1>
          </div>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="center">{row.name}</TableCell>

                  <TableCell align="center">
                    <button className="btn btn-info">View</button>
                    <button className="btn btn-danger">Delete</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default CVList;
