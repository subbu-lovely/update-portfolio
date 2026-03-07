import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Error404 from "../pages/errors/error404/Error";
import ResumePage from "../pages/resume/Resume.js";
import Experience from "../pages/experience/Experience";

export default class Main extends Component {
  componentDidMount() {
    document.documentElement.style.setProperty(
      "--scrollbar-color",
      this.props.theme.imageHighlight
    );
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.theme &&
      this.props.theme &&
      prevProps.theme.imageHighlight !== this.props.theme.imageHighlight
    ) {
      document.documentElement.style.setProperty(
        "--scrollbar-color",
        this.props.theme.imageHighlight
      );
    }
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          {/* Home Page */}
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />

          <Route
            path="/home"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />

          {/* Education Page */}
          <Route
            path="/education"
            render={(props) => (
              <Education {...props} theme={this.props.theme} />
            )}
          />

          {/* Open Source Page */}
          <Route
            path="/opensource"
            render={(props) => (
              <Opensource {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/experience"
            render={(props) => (
              <Experience {...props} theme={this.props.theme} />
            )}
          />

          {/* Projects Page */}
          <Route
            path="/projects"
            render={(props) => <Projects {...props} theme={this.props.theme} />}
          />

          {/* Resume Page */}
          <Route
            path="/resume"
            render={(props) => (
              <ResumePage {...props} theme={this.props.theme} />
            )}
          />

          {/* Contact Page */}
          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={this.props.theme} />}
          />

          {/* 404 Page */}
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
