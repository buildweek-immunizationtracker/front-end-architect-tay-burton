import styled from 'styled-components';

export const MedicalRegistrationWrapper = styled.div`
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffffff;
        
        width: 600px;
        height: 600px;
        
        margin: 3em auto;
        border-radius: 1.5em;
        box-shadow: 0px 10px 20px 2px #4d4dff;
    }

    .inputContainer{
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    h1{
        margin-top: 60px;
        margin-bottom: 20px;
        color: #6666ff;
        font-family: "Ubuntu", sans-serif;
    }
    
    .input{
        font-weight: 600;
        font-size: 14px;
        margin: 20px;
        color:#000080;
        background: #e6e6ff;
        padding: 10px 20px;
        border: none;
        border-radius: 20px;
        outline: none;
        box-sizing: border-box;
        border: 2px solid #ccccff;
    }

    .submit{
        font-family: "Ubuntu", sans-serif;
        cursor: pointer;
        border: 2px solid #6666ff;
        border-radius: 20px;
        box-sizing: border-box;
        border: 2px solid #ccccff
        color:#e6e6ff;
        background: #1a1aff;
        padding: 10px 30px;
        margin-top: 20px;
    }

    .alreadyRegistered{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Ubuntu", sans-serif;
        font-size 12px;
    }

    .alreadyRegistered:hover{
        color: #1a1aff;
    }

    a{
        color: #1a1aff;
    }
    
    a:hover{
        color: #e6b800;
    }

    
`;