import { Box, Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import Item, { ItemType } from "../../components/Item";
import PageLayout from "../../components/PageLayout";
import styles from "../../styles/Home.module.css";

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
    isAuthentic: true,
  },
];

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Box
        sx={{
          width: "100%",
          maxWidth: `2600px`,
          height: 550,
          margin: "auto",
          objectFit: `cover`,
          backgroundImage: `url('/Shoes.png')`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `100% 80%`,
        }}
      ></Box>

      <div className={styles.container}>
        <Grid container spacing={3}>
          {mockedData.map((item, index) => (
            <Grid item key={index} xs={12} sm={3}>
              <Item item={item}></Item>
            </Grid>
          ))}
        </Grid>
      </div>
    </PageLayout>
  );
};

export default Home;
