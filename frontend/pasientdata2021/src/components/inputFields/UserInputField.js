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
      font-style: comfortaa;
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
