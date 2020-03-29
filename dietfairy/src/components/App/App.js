import React, { useEffect, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { useSearchQuery, useEatingsList, useSidebar } from "../../hooks";
import Nav from "../Nav/Nav";
import Grid from "../Grid/Grid";
import About from "../About/About";
import Food from "../Food/Food";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Forgot from "../Forgot/Forgot";
import Spinner from "../Spinner/Spinner";
import Page from "../Page/Page";

const Signup = lazy(() => import("../Signup/Signup"));
const Login = lazy(() => import("../Login/Login"));

/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import { globalStyles, showSidebarStyles, hideSidebarStyles } from "./styles";

const App = () => {
  const { searchQuery } = useSearchQuery();
  const {
    setEatings,
    clearEatings,
    toggleLoadingOff,
    toggleLoadingOn,
    loading
  } = useEatingsList();
  const { showSidebar } = useSidebar();

  useEffect(() => {
    if (searchQuery !== "") {
      toggleLoadingOn();

      const fetchFoods = food => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${Drink}`;
        fetch(url)
          .then(raw => raw.json())
          .then(({ foods }) => setEatings(foods))
          .then(toggleLoadingOff);
      };

      const delayBeforeSearch = setTimeout(() => {
        fetchFoods(searchQuery);
      }, 1000);

      return () => clearTimeout(delayBeforeSearch);
    } else {
      clearEatings();
      toggleLoadingOff();
    }
  }, [searchQuery]);

  return (
    <div
      css={showSidebar ? showSidebarStyles : hideSidebarStyles}
      data-testid="application"
    >
      <Global styles={globalStyles} />
      <Sidebar />
      <Nav />
      <React.Suspense fallback={<Page />}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (loading ? <Spinner /> : <Grid />)}
          />
          <Route
            path="/food/"
            render={({ location }) => <Food location={location} />}
          />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/forgot" component={Forgot} />
          <Route
            component={({ location }) => {
              return (
                <div
                  css={css`
                    padding: 50px;
                    width: 100%;
                    text-align: center;
                  `}
                >
                  The page <code>{location.pathname}</code> could not be found.
                </div>
              );
            }}
          />
        </Switch>
      </React.Suspense>
      <Footer />
    </div>
  );
};

export default App;
