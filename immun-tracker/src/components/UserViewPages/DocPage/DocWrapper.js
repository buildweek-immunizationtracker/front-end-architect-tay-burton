import styled from "styled-components";

import img from './martin-brosy-758535-unsplash-min.jpg'


export const DocNavbarWrapper = styled.div`
  .navbar {
      background: linear-gradient(to right, #ffd740, #80d6ff );
      color: #ffff74;
      .logo{
          color: #0077c2;
          text-decoration: none;
          font-size: 1.25rem;
      }
      .mr-2{
          background:#ffd740;
          outline: none; 
      }
      .link{
        color: #0077c2;
        
        text-decoration: none;
      }
  }
`;

export const DocWrapper = styled.div`
  .jumbotron {
    background-image: url(${img});
    background-color: #cccccc;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    h1 {
      color: #0077c2;

      font-weight: 600;
    }
    p {
      color: #0077c2;

      font-weight: 600;
    }
    
  }
  .cardContainer {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    .card {
      margin: 13px;
      width: 50%;
    }
  }
  .button, button  {
    background: linear-gradient(to right, #ffd740, #80d6ff);
    border: none;
    border-radius: 5px;
    color: white;
    padding: 11px 23px;
  }
`;

export const Footer = styled.div`
       .nav{
        background: linear-gradient(to right, #ffd740, #80d6ff );
        display: flex;
        margin-top: 39px;
        justify-content: center;
        a{
            color: #0077c2;
        }
       }
`

export const Patient = styled.div`
.s{
  display: flex;
  justify-content: center;
}
.card-body {display: flex;
justify-content: center;
padding-top: 50px;
height: auto;
width: 50%;
margin: 50px;
}
.imun{
  margin: 20px;
  border: 1px solid black;
  width: 50%
}
`