import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CVList = (props) => {
  // const [data, setData] = useState([]);

  // const handleCV = (candidate) => {
  //   console.log("clicked", candidate);
  // };

  // useEffect(() => {
  //   fetch("http://localhost:4000/information")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("data from database", data);
  //       setData(data);
  //       console.log(data);
  //     });
  // }, []);

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const classes = useStyles();
  // console.log(props.d);
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
              {props.d.map((row) => (
                <TableRow key={row._id}>
                  <TableCell align="center">{row.name}</TableCell>

                  <TableCell align="center">
                    <Link to="/cdDetails">
                      <button
                        className="btn btn-info"
                        onClick={() => props.handleCV(row)}
                      >
                        View
                      </button>
                    </Link>

                    <button
                      className="btn btn-danger ml-3"
                      onClick={() => props.handleRemove(row._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
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
