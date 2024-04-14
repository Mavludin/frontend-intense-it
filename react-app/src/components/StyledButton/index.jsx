import styled from "styled-components";

export const StyledButton = ({ text, active, green,  ...buttonProps }) => {
  return (
    <Button green={green} active={active} {...buttonProps}>
      {text}
    </Button>
  );
};

const Button = styled.button`
  padding: 5px 15px;

  background-color: ${(props) => {
    if (props.disabled) return "gray";

    if (props.green) return 'green'

    return props.active ? "brown" : "crimson";
  }};
  font-weight: 600;
  font-size: 18px;

  color: white;
`;
