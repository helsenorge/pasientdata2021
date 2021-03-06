import styled from "styled-components"

const UserInputFieldStyle = styled.input`
    padding: 0px;
    outline: none;
    height: 50px;
    width: 100%;
    font-size: 20px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 2px solid black;
    background-color: #7BEFB2;
    font-family: 'Comfortaa';
    color: #4E4E4E;
    `;


function UserInputField({className, placeholder, type, onChange, value}) {
    return (
        <>
            <UserInputFieldStyle className={className} type={type} value={value} name="email" placeholder={placeholder} onChange={onChange}/>
        </>
    )
};

UserInputField.defaultProps = {
    type: "text",
}

export default UserInputField
