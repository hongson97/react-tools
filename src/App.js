import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import LinkIcon from "@material-ui/icons/Link";
import FolderIcon from "@material-ui/icons/Folder";
import HttpIcon from "@material-ui/icons/Http";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Subdomain from "./components/subdomain";
import DirSearch from "./components/dirsearch";
import BrokenLink from "./components/brokenlink";
import Home from "./components/home";
import "./App.css"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function App() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    console.log("ALOOOO");
    setSelectedIndex(index);
  };

  return (
    <div className="BodyContainer">
      <Router>
        <List component="nav" aria-label="main mailbox folders">
          <Link to="/">
            <ListItem
              button
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>

          <Link to="/subdomain">
            <ListItem
              button
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <HttpIcon />
              </ListItemIcon>
              <ListItemText primary="Subdomain Finder" />
            </ListItem>
          </Link>

          <Link to="/dirsearch">
            <ListItem
              button
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Dirsearch Tool" />
            </ListItem>
          </Link>

          <Link to="/brokenlink">
            <ListItem
              button
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary="BrokenLink Checker" />
            </ListItem>
          </Link>
        </List>

        <Switch>
          <Route path="/subdomain">
            <Subdomain />
          </Route>
          <Route path="/dirsearch">
            <DirSearch />
          </Route>
          <Route path="/brokenlink">
            <BrokenLink />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

