import { Box, Grid, styled } from "@mui/material";
import { NextPage } from "next";
import Item, { ItemType } from "../../components/Item";
import PageLayout from "../../components/PageLayout";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "../../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const mockedData: ItemType[] = [
  {
    image:
      "https://lzd-img-global.slatic.net/g/p/b61785b7238fe1fd27195ff87b3f1685.png_720x720q80.jpg_.webp",
    title: "Some titile",
    price: "10.0",
    storeName: "Some store",
    merchant: "lazada",
    isRecommended: true,
    isAuthentic: true,
  },
  {
    image:
      "https://lzd-img-global.slatic.net/g/p/b61785b7238fe1fd27195ff87b3f1685.png_720x720q80.jpg_.webp",
    title: "Some titile",
    price: "10.0",
    storeName: "Some store",
    merchant: "lazada",
    isRecommended: false,
    isAuthentic: true,
  },
  {
    image:
      "https://lzd-img-global.slatic.net/g/p/b61785b7238fe1fd27195ff87b3f1685.png_720x720q80.jpg_.webp",
    title: "Some titile",
    price: "10.0",
    storeName: "Some store",
    merchant: "lazada",
    isRecommended: true,
    isAuthentic: false,
  },
  {
    image:
      "https://lzd-img-global.slatic.net/g/p/b61785b7238fe1fd27195ff87b3f1685.png_720x720q80.jpg_.webp",
    title: "Some titile",
    price: "10.0",
    storeName: "Some store",
    merchant: "lazada",
    isRecommended: false,
    isAuthentic: false,
  },
  {
    image:
      "https://lzd-img-global.slatic.net/g/p/b61785b7238fe1fd27195ff87b3f1685.png_720x720q80.jpg_.webp",
    title: "Some titile",
    price: "10.0",
    storeName: "Sports-Zone",
    merchant: "shopee",
    isRecommended: true,
    isAuthentic: true,
  },
];

const Center = styled("div")(() => ({
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Home: NextPage = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  useEffect(() => {
    axios
      .get(
        "https://cs5425-pipeline-app.azurewebsites.net/api/http-get-items?keyword=New%20Balance%20Shoes"
      )
      .then((response) => {
        setItems(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <PageLayout>
      <Box
        sx={{
          width: "100%",
          maxWidth: `3000px`,
          height: 550,
          margin: "auto",
          objectFit: `cover`,
          backgroundImage: `url('/Shoes.png')`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `100% 80%`,
        }}
      ></Box>
      <div className={styles.container}>
        {items.length > 0 ? (
          <Grid container spacing={3}>
            {items.map((item, index) => (
              <Grid item key={index} xs={12} sm={3}>
                <Item item={item} rank={index + 1}></Item>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Center>
            <CircularProgress size="6rem" color="inherit"></CircularProgress>
          </Center>
        )}
      </div>
    </PageLayout>
  );
};

export default Home;
