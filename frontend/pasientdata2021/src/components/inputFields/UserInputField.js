import styled from "styled-components"

function UserInputField({placeholder, type, marginTop}) {

    const UserInputField = styled.input`
      padding: 0px;
      outline: none;
      height: 50px;
      width: 100%;
      font-size: 20px;
      margin-bottom: 10px;
      margin-top: ${props => props.marginTop ? "none" : marginTop};
      border: none;
      border-bottom: 2px solid black;
      background-color: #7BEFB2;
      font-family: 'Comfortaa';
      color: #4E4E4E;
    `;

    return (
        <>
            <UserInputField type={type} id="email" name="email" placeholder={placeholder}/>
        </>
    )
};

UserInputField.defaultProps = {
    type: "text",
}

export default UserInputField
