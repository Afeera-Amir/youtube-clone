import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import ChannelCard from "./ChannelCard";
import { Videos } from "./";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVidoes] = useState([]);

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVidoes(data?.items)
    );
  }, [id]);

  return (
    <Box
      sx={{
        minHeight: "95vh",
      }}
    >
      <Box>
        <div
          style={{
            background: "rgb(36,34,0)",
            background:
              "linear-gradient(90deg, rgba(36,34,0,1) 0%, rgba(9,121,108,1) 35%, rgba(255,0,125,1) 100%)",
            height: "300px",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "150px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
