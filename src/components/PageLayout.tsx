import { styled, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FC, memo, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

const Title = styled(Typography)(() => ({
  textAlign: "left",
  color: "white",
  lineHeight: 1.15,
  fontSize: "3rem",
}));

const TitleContainer = styled("div")(() => ({
  width: "100%",
  backgroundColor: "#36454F",
  display: "flex",
  height: "100px",
  alignItems: "center",
  justifyContent: 'center'
}));

const SearchWrapper = styled("div")(() => ({
  marginLeft: "200px",
  position: "relative",
}));

const SearchIconWrapper = styled("div")(() => ({
  position: "absolute",
  height: "100%",
  right: 0,
  pointerEvents: "none",
  alignItems: "center",
  display: "flex",
  padding: "8px 8px 8px 8px",
  opacity: "1.0",
  zIndex: 1000,
}));

const SearchTextField = styled(TextField)(() => ({
  backgroundColor: "inherit",
  fontStyle: "italic",
  width: "800px",
  marginLeft: "auto",
  "& .MuiInputBase-input": {
    paddingLeft: `calc(1em + ${"24px"})`,
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: `25px 25px 25px 25px`,
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
}));

const Search = styled(SearchIcon)(() => ({
  color: "white",
  backgroundColor: "inherit",
}));

const PageLayout: FC<Props> = ({ children }) => {
  const [searchValue, setSerachValue] = useState("");
  return (
    <>
      <TitleContainer>
        <Title variant="h5">PRICE.</Title>
        <SearchWrapper>
          <SearchIconWrapper>
            <Search />
          </SearchIconWrapper>
          <SearchTextField
            variant="outlined"
            placeholder="What are you looking for?"
            value={searchValue}
            onChange={(event) => {
              setSerachValue(event.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Escape") {
                setSerachValue("");
              }
            }}
          />
        </SearchWrapper>
      </TitleContainer>
      <main>{children}</main>
    </>
  );
};

export default memo(PageLayout);
