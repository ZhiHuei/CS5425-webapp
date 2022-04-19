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
  width: "fit-content",
  padding: "0 10px 0 10px",
}));

const Label = styled(Typography)<Props>(({ item }) => ({
  textAlign: "center",
  fontWeight: 400,
  fontSize: "1.0rem",
  padding: "10px",
  border: `5px solid`,
  borderColor: item.isRecommended ? "lightgreen" : "#ff726f",
  borderTop: 0,
  borderRight: 0,
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
          padding: `0px !important`,
        }}
      >
        <Grid item>
          {isRecommended ? (
            <Title
              variant="h4"
              style={{
                background: "lightgreen",
              }}
            >
              RECOMMENDED
            </Title>
          ) : (
            <Title
              variant="h4"
              style={{
                background: "#ff726f",
                color: "white",
              }}
            >
              THINK TWICE
            </Title>
          )}
        </Grid>
        <Grid item marginLeft="auto">
          {isAuthentic ? (
            <Label
              item={item}
              variant="body1"
              style={{
                background: `black`,
                color: `white`,
              }}
            >
              AUTHENTIC
            </Label>
          ) : (
            <Label
              item={item}
              variant="body1"
              style={{
                background: `white`,
                color: `black`,
                fontWeight: 550
              }}
            >
              IMITATION
            </Label>
          )}
        </Grid>
      </Grid>
      <img src={image}></img>
      <div>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h4" color="red">
          S${price}
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
