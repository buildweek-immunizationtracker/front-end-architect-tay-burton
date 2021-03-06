import styled from "styled-components";




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

.loader{
  width: 300px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
}

  .jumbotron {
    background-image: url("https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80");
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