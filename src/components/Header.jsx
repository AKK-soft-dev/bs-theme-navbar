import {
  Box,
  AppBar,
  Toolbar,
  Button as MuiButton,
  alpha,
  styled,
  Link,
  Stack,
  ButtonBase,
  useTheme,
} from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import { useContext } from "react";
import { ToggleTheme } from "../ThemeProvider";
import { BrandIcon } from "./BrandIcon";

const StyledButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  color: theme.palette.primary.light,
  ...theme.typography.h6,
  fontWeight: 700,
  fontSize: "1rem",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
  },
}));

const Button = styled(ButtonBase)(({ theme }) => ({
  ...theme.typography.h6,
  fontSize: "1rem",
  textTransform: "none",
  padding: theme.spacing(1, 2),
  borderRadius: "7px",
  transition: theme.transitions.create("all"),
}));

const StyledLink = styled((props) => (
  <MuiButton component={Link} endIcon={<ArrowDownIcon />} {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: 500,
  color: alpha(theme.palette.text.primary, 0.95),
  padding: theme.spacing(1, 1.2),
  "& .MuiButton-endIcon": {
    marginLeft: 0.2,
  },
}));

const pages = ["Landings", "Pages", "Account", "Mega Menu"];

export const Header = () => {
  const { toggleMode } = useContext(ToggleTheme);
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: (theme) => theme.palette.background.paper, boxShadow: 2 }}
    >
      <Toolbar>
        <BrandIcon />
        <StyledButton
          variant="contained"
          disableRipple
          disableElevation
          startIcon={<ListIcon />}
          sx={{
            ml: 1,
          }}
        >
          Category
        </StyledButton>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          {pages.map((page) => (
            <StyledLink href="#" key={page}>
              {page}
            </StyledLink>
          ))}
          <Link
            href="#"
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: (theme) => alpha(theme.palette.text.primary, 0.9),
            }}
          >
            <MoreIcon />
          </Link>
        </Box>
        <Button
          onClick={toggleMode}
          sx={{
            padding: (theme) => theme.spacing(1.2),
            borderRadius: "100%",
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? theme.palette.background.default
                : theme.palette.grey[100],
            mr: 2,
            color: "text.secondary",
          }}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeIcon fontSize="medium" />
          ) : (
            <LightModeIcon fontSize="medium" />
          )}
        </Button>
        <Stack direction="horizontal" columnGap={1}>
          <Button
            sx={(theme) => ({
              ...(theme.palette.mode === "dark"
                ? {
                    border: 1,
                    borderColor: "common.white",
                    color: "common.white",
                    "&:hover": {
                      backgroundColor: "common.white",
                      color: "common.black",
                    },
                  }
                : {
                    border: 1,
                    borderColor: "common.black",
                    color: "common.black",
                    "&:hover": {
                      backgroundColor: "common.black",
                      color: "common.white",
                    },
                  }),
            })}
          >
            Sign in
          </Button>
          <Button
            sx={(theme) => ({
              ...(theme.palette.mode === "dark"
                ? {
                    backgroundColor: "common.white",
                    color: "common.black",
                  }
                : {
                    backgroundColor: "common.black",
                    color: "common.white",
                  }),
            })}
          >
            Sing up
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
