import React, { Component } from "react";
import { Link } from "react-router-dom";
import PatientNav from "./PatientNav";
import Footer from './PatientFooter'
import { getData } from "../../../actions/actions";

import Loader from "react-loader-spinner";

//Redux
import { connect } from "react-redux";

import {
  Jumbotron,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

import { PatientWrapper } from './PNavbarWrapper'
import { Redirect } from "react-router-dom";

class PatientHome extends Component {

  componentDidMount() {
    this.props.getData();
  }


  render() {
    if (this.props.user.providerId  ) {
      return <Redirect to='/doctorhub' />
    }

    if(this.props.fetchingData){
      return <PatientWrapper > 
        <div className='loader'>
        <Loader type="Ball-Triangle" color="#00BFFF" height="80" width="60" />
        </div>
        </PatientWrapper>
    }
    
    return (
      <PatientWrapper>
        <PatientNav />
        <Jumbotron>
          <h1 className="display-3">Hello, {this.props.user.username}</h1>
          <p className="lead">
            Welcome to the Immunization Tracker’s patient hub. <br />
            Here you will be able to get up to date with news of immunizations
            and outbreaks.
          </p>
          <hr className="my-2" />
          <p className="lead">
            <Link to="/addpatient">
              <Button color="primary">Add Patient</Button>
            </Link>
          </p>
        </Jumbotron>
        <div className="cardContainer">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://static01.nyt.com/newsgraphics/2019/04/25/measles/d62a776fa92c637e53f0cdb12871f2a7f1824bc2/Measles-1050.png"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>New York Times</CardTitle>
              <CardSubtitle>
                Measles Cases Surpass 700 as Outbreak Continues Unabated.
              </CardSubtitle>
              <CardText>
                The outbreak is now the worst in decades. Children under age 5
                account for about half of the cases.
              </CardText>
              <form action="https://www.nytimes.com/2019/04/29/health/measles-outbreak-cdc.html">
                <input className="button" type="submit" value="Learn More" />
              </form>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://patch.com/img/cdn20/users/22992871/20190430/041522/styles/T800x600/public/vaccine.jpg?width=725"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>PATCH</CardTitle>
              <CardSubtitle>Immunizations Week</CardSubtitle>
              <CardText>
                State officials say its a crucial time to get vaccinated against
                preventable diseases like the measles, which is at a high in the
                state.
              </CardText>
              <form action="https://patch.com/michigan/across-mi/michigan-promotes-immunizations-week-measles-outbreak-soars">
                <input className="button" type="submit" value="Learn More" />
              </form>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.npr.org/assets/img/2019/04/29/CN_Final.gif"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>NPR</CardTitle>
              <CardSubtitle>All Tech Considerd</CardSubtitle>
              <CardText>
                As Artificial Intelligence Moves Into Medicine, The Human Touch
                Could Be A Casualty
              </CardText>
              <form action="https://www.npr.org/sections/health-shots/2019/04/30/718413798/as-artificial-intelligence-moves-into-medicine-the-human-touch-could-be-a-casual">
                <input className="button" type="submit" value="Learn More" />
              </form>
            </CardBody>
          </Card>
        </div>
        <Footer />
      </PatientWrapper>
    );
  }
}


const mapStateToProps = ({user,fetchingData}) => {
  return {
    user,
    fetchingData
  };
};

export default connect(
  mapStateToProps,
    {getData}
)(PatientHome);
