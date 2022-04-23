import { Box, Grid, Paper, styled, Typography } from "@mui/material";
import type { NextPage } from "next";
import PageLayout from "../components/PageLayout";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import routes from "../routes";
import { useRouter } from "next/router";

const InfoWrapper = styled(Grid)(() => ({
  padding: "50px 0 50px 0",
}));

const GridItem = styled(Grid)(() => ({
  flexGrow: 1,
}));
const Title = styled(Typography)(() => ({
  marginTop: "50px",
  textAlign: "center",
  fontWeight: 550,
  fontSize: "2.5rem",
}));

const Description = styled(Typography)(() => ({
  textAlign: "center",
  fontWeight: 300,
  fontSize: "2.0rem",
}));

const BoxItem = styled(Typography)(() => ({
  paddingLeft: "20px",
  textAlign: "left",
  fontWeight: 600,
  fontSize: "1.5rem",
}));

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <PageLayout>
      <Box
        sx={{
          width: "100%",
          maxWidth: `3000px`,
          height: 650,
          margin: "auto",
          backgroundImage: `url('/Banner.png')`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `100% 100%`,
        }}
      ></Box>
      <div className={styles.container}>
        <Title variant="h4">SITE GUIDE</Title>
        <Description variant="h4">
          How to identify which items on various sites are safe for purchase
          based on our 2 labels.
        </Description>
        <InfoWrapper container spacing={8} direction="row">
          <Grid container item xs={6} justifyContent="flex-end">
            <Paper
              variant="outlined"
              sx={{
                height: 500,
                width: "100%",
                maxWidth: 1000,
                borderWidth: 5,
                borderRadius: 7,
                borderColor: "lightgreen",
                backgroundColor: `rgba(144, 238, 144, 0.2)`,
              }}
            >
              <Title
                variant="h4"
                style={{
                  width: "fit-content",
                  background: "lightgreen",
                  margin: "20px",
                  padding: "0 20px 0 20px",
                }}
              >
                RECOMMENDED
              </Title>
              <Grid container style={{ gap: 59 }} direction="row">
                <GridItem item xs={5.5}>
                  <BoxItem>Good Condition</BoxItem>
                </GridItem>
                <GridItem item xs={5.5}>
                  <BoxItem>Responsive Seller</BoxItem>
                </GridItem>
                <GridItem item xs={5.5}>
                  <BoxItem>Well Packaged</BoxItem>
                </GridItem>
                <GridItem item xs={5.5}>
                  <BoxItem>Positive Reviews</BoxItem>
                </GridItem>
                <GridItem item xs={5.5}>
                  <BoxItem>Efficient Delivery</BoxItem>
                </GridItem>
                <GridItem item xs={5.5}>
                  <BoxItem>{`>`}XX Quantities Sold</BoxItem>
                </GridItem>
                <GridItem item xs={5.5}>
                  <BoxItem>Reliable Site</BoxItem>
                </GridItem>
              </Grid>
            </Paper>
          </Grid>
          <Grid container item xs={6}>
            <Paper
              variant="outlined"
              sx={{
                height: 500,
                width: "100%",
                borderWidth: 5,
                borderRadius: 7,
                borderColor: "#ff726f",
                maxWidth: 1000,
                backgroundColor: `rgba(255, 114, 111, 0.1)`,
              }}
            >
              <Title
                variant="h4"
                style={{
                  width: "fit-content",
                  background: "#ff726f",
                  margin: "20px",
                  padding: "0 20px 0 20px",
                  color: "white",
                }}
              >
                THINK TWICE!
              </Title>
              <Grid container style={{ gap: 59 }} direction="row">
                <GridItem item xs={5.5}>
                  <BoxItem>Poor/Bad Condition</BoxItem>
                </GridItem>
                <GridItem item xs={5.5}>
                  <BoxItem>Less Responsive Seller</BoxItem>
                </GridItem>
                <GridItem item xs={5.5}>
                  <BoxItem>Poorly Packaged</BoxItem>
                </GridItem>
                <GridItem item xs={5.5}>
                  <BoxItem>Negative Reviews</BoxItem>
                </GridItem>
                <GridItem item xs={5.5}>
                  <BoxItem>Delayed Delivery</BoxItem>
                </GridItem>
                <GridItem item xs={5.5}>
                  <BoxItem>Little/No Quantities Sold</BoxItem>
                </GridItem>
                <GridItem item xs={5.5}>
                  <BoxItem>Reliable Site</BoxItem>
                </GridItem>
              </Grid>
            </Paper>
          </Grid>
        </InfoWrapper>
        <Title variant="h4">Categories</Title>
        <InfoWrapper
          container
          spacing={6}
          direction="row"
          justifyContent="center"
        >
          <Grid
            item
            onClick={() => router.push(routes.SHIRT)}
            style={{ cursor: "pointer" }}
          >
            <Image
              alt="shoe"
              src="/Shoes.png"
              height={300}
              width={500}
              objectFit="cover"
              quality={100}
            />
          </Grid>
          <Grid
            item
            onClick={() => router.push(routes.BAG)}
            style={{ cursor: "pointer" }}
          >
            <Image
              alt="bags"
              src="/Bags.png"
              height={300}
              width={500}
              objectFit="cover"
              quality={100}
            />
          </Grid>
          <Grid item>
            <Image
              alt="mountains"
              src="/mountains.jpg"
              height={300}
              width={500}
              objectFit="cover"
              quality={100}
            />
          </Grid>
        </InfoWrapper>
      </div>
    </PageLayout>
  );
};

export default Home;
