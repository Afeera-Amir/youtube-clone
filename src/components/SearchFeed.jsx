import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchTerm } = useParams()
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "92vh",
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
          }}
        >
          Search results for:  <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Box>
  );
};

export default SearchFeed;
