import styled from "styled-components"

function UserInputField({placeholder}) {

    const UserInputField = styled.input`
      height: 100%;
      padding: 0px;
      border: 0px;
      outline: none;
      height: 50px;
      width: 100%;
      font-size: 20px;
      margin-bottom: 10px;
      border-width: 0 0 5px;
      border-color: black;  
    `;

    return (
        <>
            <UserInputField type="text" id="email" name="email" placeholder={placeholder}/>
        </>
    )
};

export default UserInputField
