import styled from 'styled-components';

const commonInputCSS = `
    width: 100%;
    border: 2px solid #ccccff;
    border-radius: 20px;
    padding: 0 1rem;
`;

export const AddPatientDiv = styled.div`
    width: 100%;

    h2 {
        color: #0077c2;
        font-weight:bolder;
    }

    .react-datepicker-wrapper,
    .react-datepicker__input-container {
        width: 100%;
    }

    .react-datepicker-wrapper input {
        ${commonInputCSS}
    }
`;

export const AddPatientForm = styled.form`
    width: 50%;
    margin: 2rem auto;
`;

export const AddPatientFormGroup = styled.fieldset`
    margin: 1rem;
    display: flex;
    flex-direction: column;
`;

export const AddPatientLabel = styled.label`
    font-weight:bolder;
`;

export const AddPatientInput = styled.input`
    ${commonInputCSS}
`;

export const ValidationDiv = styled.div`
    margin-top: 1rem;
    font-style: italic;
    font-weight: bolder;
`;