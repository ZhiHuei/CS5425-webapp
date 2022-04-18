import { Grid, styled, Typography } from "@mui/material";
import { FC, memo } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export type ItemType = {
  image: string;
  title: string;
  price: string;
  storeName: string;
  merchant: string;
  isRecommended: boolean;
  isAuthentic: boolean;
};

type Props = {
  item: ItemType;
};

const Wrapper = styled("div")<Props>(({ item }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: `column`,
  width: "100%",
  border: `5px solid`,
  borderColor: item.isRecommended ? "lightgreen" : "#ff726f",
  borderRadius: 7,
  height: `100%`,
  "> img": {
    maxHeight: `450px`,
    objectFit: `cover`,
    borderRadius: `5px 5px 0 0`,
  },
  "> div": {
    padding: `1rem`,
    height: `100%`,
  },
}));

const StyledDiv = styled("div")(() => ({
  display: `flex`,
  alignItems: "center",
}));

const Title = styled(Typography)(() => ({
  marginTop: "20px",
  textAlign: "center",
  fontWeight: 550,
  fontSize: "1.3rem",
}));

const Item: FC<Props> = ({ item }) => {
  const {
    image,
    title,
    price,
    storeName,
    merchant,
    isRecommended,
    isAuthentic,
  } = item;

  return (
    <Wrapper item={item}>
      <Grid
        container
        direction="row"
        sx={{
          padding: `0px !important`
        }}
      >
        <Grid item>
          {isRecommended ? (
            <Title
              variant="h4"
              style={{
                width: "fit-content",
                background: "lightgreen",
                padding: "0 10px 0 10px",
              }}
            >
              RECOMMENDED
            </Title>
          ) : (
            <Title
              variant="h4"
              style={{
                width: "fit-content",
                background: "#ff726f",
                padding: "0 10px 0 10px",
                color: "white",
              }}
            >
              THINK TWICE
            </Title>
          )}
        </Grid>
      </Grid>
      <img src={image}></img>
      <div>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h4" color="red">
          ${price}
        </Typography>
      </div>
      <Grid container direction="row">
        <Grid item>
          <StyledDiv>
            <LocationOnIcon />
            <Typography variant="body1">{storeName}</Typography>
          </StyledDiv>
        </Grid>
        <Grid item marginLeft="auto">
          {merchant}
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Item;
