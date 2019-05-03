import React, { Component } from "react";
import { connect } from "react-redux";
import DocNav from "./DocNav";

import { getData } from "../../../actions/actions";

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

import {DocWrapper} from "./DocWrapper";
import DocFooter from "./DocFooter";

import { Redirect } from "react-router-dom";



class DocHompage extends Component {


  componentDidMount() {
    this.props.getData();
  }

    render() {
      if (!this.props.user.providerId ) {
        return <Redirect to='/patienthub' />
      }
        return (
                <DocWrapper>
                <DocNav/>
        <Jumbotron>
          <h1 className="display-3">Hello,</h1>
          <p className="lead">
            Welcome to the Immunization Tracker’s medical provider hub. <br />
            Here you will be able track patient's immunizations. 
          </p>
          <hr className="my-2" />
          <p className="lead">
            <Button color="primary">View Patients</Button>
          </p>
        </Jumbotron>
        <div className="cardContainer">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://media.graytvinc.com/images/810*455/vaccine+generic+cdc+mgn+with+credits.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>DENVER (KKTV)</CardTitle>
              <CardSubtitle>
                
              </CardSubtitle>
              <CardText>
              Colorado vaccine bill passes committee, heads to full Senate
              </CardText>
              <form  action="https://www.kktv.com/content/news/Immunization-exemption-proposal-at-Colorado-legislature-brings-in-hundreds-for-testimony-509356151.html">
                <input className='button' type="submit" value="Learn More" />
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
              <CardTitle>Times Enterprise</CardTitle>
              <CardSubtitle>No good reason to refuse immunization</CardSubtitle>
              <CardText>
              To be fair, and accurate, there are a few — very few — medical exceptions for immunizations, according to the Centers for Disease Control. 
              </CardText>
              <form  action="https://www.timesenterprise.com/opinion/editorials/no-good-reason-to-refuse-immunization/article_a5849322-52b8-56f4-9e79-d8ea372dbced.html">
                <input className='button' type="submit" value="Learn More" />
              </form>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.wctrib.com/sites/default/files/styles/16x9_860/public/fieldimages/37/0430/1bbf8cynpk0ymcgg7dh4ja9mhhqqirpw.jpg?itok=UUpM3shm"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Tribune News</CardTitle>
              <CardSubtitle>Public health nurse recognized for immunization work</CardSubtitle>
              <CardText>
              Gloria Tobias, RN, PHN, of Madison has been named a 2019 CDC Childhood Immunization Champion for her dedication to promoting childhood immunization in Minnesota.
              </CardText>
              <form  action="https://www.wctrib.com/business/announcements/4606354-public-health-nurse-recognized-immunization-work">
                <input className='button' type="submit" value="Learn More" />
              </form>
            </CardBody>
          </Card>
        </div>
        <DocFooter/>
      </DocWrapper>
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
)(DocHompage);
  