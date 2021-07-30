import {
  Grid,
  Box,
  Typography,
  Divider,
  makeStyles,
  Button,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
}));

export default function Job() {
  const jobId = useParams().id;
  const job = useSelector((store) => store.student.jobs[jobId]);
  const classes = useStyles();
  return (
    <Box pr={25} mb={50}>
      <Box>
        <Grid style={{ marginBottom: 24 }}>
          <Typography>Summary</Typography>
          <Divider />
        </Grid>
        <Grid container justify="center">
          <Grid
            item
            xs={4}
            style={{
              backgroundImage: `url(${job.company_logo_url})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          ></Grid>
          <Grid item xs={7}>
            <Box>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                }}
              >
                <li style={{ marginTop: "10px" }}>
                  Position -{" "}
                  <span style={{ fontWeight: 700 }}>{job.position}</span>
                </li>
                <li style={{ marginTop: "10px" }}>
                  Position Type -{" "}
                  <span style={{ fontWeight: 700 }}>In Office Full Time</span>
                </li>
                <li style={{ marginTop: "10px" }}>
                  Company / Firm Name -{" "}
                  <span style={{ fontWeight: 700 }}>{job.company_name}</span>
                </li>
                <li style={{ marginTop: "10px" }}>
                  Sector -{" "}
                  <span style={{ fontWeight: 700 }}>
                    Networking and Security
                  </span>
                </li>
                <li style={{ marginTop: "10px" }}>
                  Job Location -{" "}
                  <span style={{ fontWeight: 700 }}>Bangalore, Karnataka</span>
                </li>
                <li style={{ marginTop: "10px" }}>
                  Cost to Company (CTC) -{" "}
                  <span style={{ fontWeight: 700 }}>10 lpa</span>
                </li>
                <li style={{ marginTop: "10px" }}>
                  Company Website -{" "}
                  <span style={{ fontWeight: 700 }}>www.goldmansachs.com</span>
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
        <Grid style={{ marginBottom: 24 }}>
          <Typography>Additional Data</Typography>
          <Divider />
          <Box>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut <strong>aliquip ex ea commodo consequat</strong>. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia{" "}
              <strong>deserunt mollit</strong> anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore{" "}
              <em>eu fugiat nulla pariatur</em>. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris n
            </p>
            <ol>
              <li>list item1</li>
              <li>list item 2</li>
              <li>list item 3</li>
            </ol>
            <p>
              <a href="http://www.http//whoisrishave.com">
                www.http://whoisrishave.com
              </a>
            </p>
            <table
              style={{ borderCollapse: "collapse", width: "100%" }}
              border="1"
            >
              <tbody>
                <tr>
                  <td style={{ width: "17.3303%" }}>Thead1</td>
                  <td style={{ width: "17.3303%" }}>Thead 2</td>
                  <td style={{ width: "17.3303%" }}>Thead3</td>
                  <td style={{ width: "17.3303%" }}>Thead4</td>
                  <td style={{ width: "17.3303%" }}>Thead5</td>
                </tr>
                <tr>
                  <td style={{ width: "17.3303%" }}>data1</td>
                  <td style={{ width: "17.3303%" }}>data2</td>
                  <td style={{ width: "17.3303%" }}>data2</td>
                  <td style={{ width: "17.3303%" }}>data34</td>
                  <td style={{ width: "17.3303%" }}>data5</td>
                </tr>
                <tr>
                  <td style={{ width: "17.3303%" }}>data6</td>
                  <td style={{ width: "17.3303%" }}>data7</td>
                  <td style={{ width: "17.3303%" }}>data8</td>
                  <td style={{ width: "17.3303%" }}>data9</td>
                  <td style={{ width: "17.3303%" }}>data10</td>
                </tr>
                <tr>
                  <td style={{ width: "17.3303%" }}>data11</td>
                  <td style={{ width: "17.3303%" }}>data12</td>
                  <td style={{ width: "17.3303%" }}>data13</td>
                  <td style={{ width: "17.3303%" }}>data14</td>
                  <td style={{ width: "17.3303%" }}>data15</td>
                </tr>
                <tr>
                  <td style={{ width: "17.3303%" }}>data 16</td>
                  <td style={{ width: "17.3303%" }}>data1</td>
                  <td style={{ width: "17.3303%" }}>data17</td>
                  <td style={{ width: "17.3303%" }}>data 19</td>
                  <td style={{ width: "17.3303%" }}>data20</td>
                </tr>
              </tbody>
            </table>
          </Box>
        </Grid>
        <Grid>
          <Typography>Applicable Course</Typography>
          <Divider />
          <Box mt={3}>
            <Grid container>
              <Grid item container justify="center" xs={6}>
                <Grid item>
                  <Typography>B.Tech:</Typography>
                </Grid>
                <Grid item>
                  <ol style={{ margin: 0 }}>
                    <li>Computer Science and Engineering</li>
                    <li>Electronics Engineering</li>
                    <li>Civil Engineering</li>
                  </ol>
                </Grid>
              </Grid>
              <Grid item container justify="center" xs={6}>
                <Grid item>
                  <Typography>B.Tech:</Typography>
                </Grid>
                <Grid item>
                  <ol style={{ margin: 0 }}>
                    <li>Computer Science and Engineering</li>
                    <li>Electronics Engineering</li>
                    <li>Civil Engineering</li>
                  </ol>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
      <Box mt={3}>
        <Box>
          <Typography>Eligibility Criteria</Typography>
          <Divider />
        </Box>
        <Box>
          <Box m={2}>
            <Typography>B.Tech</Typography>
            <Divider />
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                listStyle: "none",
                justifyContent: "space-between",
              }}
            >
              <li>
                Minimum CGPA -
                <span style={{ fontWeight: 700 }}> 8.5 and above</span>
              </li>
              <li>
                Minimum Attendance -
                <span style={{ fontWeight: 700 }}> 60%</span>
              </li>
              <li>
                Minimum Acceptable Backlogs -
                <span style={{ fontWeight: 700 }}> 3</span>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <Box m={2}>
            <Typography>M.Tech</Typography>
            <Divider />
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                listStyle: "none",
                justifyContent: "space-between",
              }}
            >
              <li>
                Minimum CGPA -
                <span style={{ fontWeight: 700 }}> 8.5 and above</span>
              </li>
              <li>
                Minimum Attendance -
                <span style={{ fontWeight: 700 }}> 60%</span>
              </li>
              <li>
                Minimum Acceptable Backlogs -
                <span style={{ fontWeight: 700 }}> 3</span>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
      <Box mt={8}>
        <Grid container justify="flex-end" alignItems="center">
          <Typography>Deadline is in 2 minutes and 40 seconds</Typography>
          <Box ml={1}>
            <Button variant="contained" color="primary">
              Apply
            </Button>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
