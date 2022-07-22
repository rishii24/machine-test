import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Tooltip } from "@mui/material";

import { Typography } from "./Typography";
import { CustomSnackbar } from "./Snackbar";
import { BasicSelect } from "./Select";

import { ClickHook } from "./custom/ClickHook";

export const BasicTable = () => {
  const [userData, setUserData] = useState(mockData);
  const [open, setOpen] = useState(false);

  const [finalData, setFinalData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFinalData(userData);
  };

  useEffect(() => {
    if (finalData?.length > 2) {
      setOpen(!open);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  }, [finalData]);

  const innerRef = ClickHook((e) => {
    e.preventDefault();
    console.log(e);
    if (e.path?.length === 3) {
      setFinalData(userData);
    }
  });

  console.log(finalData);

  return (
    <div>
      <TableContainer>
        <Table sx={{ minWidth: 950 }}>
          <TableHead>
            <TableRow>
              <TableCell>Parents & Siblings</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Birth</TableCell>
              <TableCell>Birth Location</TableCell>
              <TableCell>Death</TableCell>
              <TableCell>Death Location</TableCell>
              <TableCell>Marriage</TableCell>
              <TableCell>Spouse</TableCell>
            </TableRow>
          </TableHead>
          <TableBody ref={innerRef}>
            {userData.map((data, idx) => {
              return (
                <TableRow key={idx}>
                  <TableCell
                    scope="row"
                    sx={{
                      borderLeft: idx === 2 ? 4 : 0,
                      borderColor: idx === 2 ? "#87CEEB" : "",
                    }}
                  >
                    <Typography
                      index={idx}
                      personValue={data.name}
                      handleSubmit={handleSubmit}
                      userdata={userData}
                      setUserData={setUserData}
                      name={"name"}
                    />
                  </TableCell>
                  <TableCell>
                    <div>
                      <BasicSelect
                        index={idx}
                        personValue={data.gender}
                        handleSubmit={handleSubmit}
                        userdata={userData}
                        setUserData={setUserData}
                        name={"gender"}
                        setOpen={setOpen}
                        open={open}
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Typography
                      index={idx}
                      personValue={data.birth}
                      handleSubmit={handleSubmit}
                      userdata={userData}
                      setUserData={setUserData}
                      name={"birth"}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      index={idx}
                      personValue={data.birthloc}
                      handleSubmit={handleSubmit}
                      userdata={userData}
                      setUserData={setUserData}
                      name={"birthloc"}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      index={idx}
                      personValue={data.death}
                      handleSubmit={handleSubmit}
                      userdata={userData}
                      setUserData={setUserData}
                      name={"death"}
                    />
                  </TableCell>
                  <Tooltip
                    title={data.deathloc.length > 20 ? data.deathloc : ""}
                  >
                    <TableCell>
                      <Typography
                        index={idx}
                        personValue={data.deathloc}
                        handleSubmit={handleSubmit}
                        userdata={userData}
                        setUserData={setUserData}
                        name={"deathloc"}
                      />
                    </TableCell>
                  </Tooltip>
                  <TableCell>
                    <Typography
                      index={idx}
                      personValue={data.marriage}
                      handleSubmit={handleSubmit}
                      userdata={userData}
                      setUserData={setUserData}
                      name={"marriage"}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      index={idx}
                      personValue={data.spouse}
                      handleSubmit={handleSubmit}
                      userdata={userData}
                      setUserData={setUserData}
                      name={"spouse"}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomSnackbar open={open} setopen={setOpen} message="Changes Saved" />
      <div style={{ fontSize: "1.5rem", marginTop: "2rem" }}>
        On pressing enter or clicking outside table you'd see the final output
        of changes you've made
      </div>
      <div>{finalData && JSON.stringify(finalData)}</div>
    </div>
  );
};

const mockData = [
  {
    id: 1,
    name: "Kyle Musk",
    gender: "F",
    birth: "21 Aug 2000",
    birthloc: "Austin",
    death: "22 Aug 2022",
    deathloc: "1527 Pond Reef Rd, Ketchikan, Alaska 99901, USA",
    marriage: "2021",
    spouse: "Robert Musk",
  },
  {
    id: 2,
    name: "Robert Musk",
    gender: "M",
    birth: "21 Mar 1963",
    birthloc: "Sydney",
    death: "12 Feb 2024",
    deathloc: "Munic, Germany",
    marriage: "2021",
    spouse: "Kyle Musk",
  },
  {
    id: 3,
    name: "Elon Musk",
    gender: "M",
    birth: "21 Mar 1988",
    birthloc: "India",
    death: "24 Mar 2045",
    deathloc: "Mars",
    marriage: "",
    spouse: "",
  },
];
