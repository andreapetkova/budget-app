import { Button } from "semantic-ui-react";

export const ButtonSaveOrCancel = ({ onEntry }) => {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary onClick={() => onEntry()}>
        Ok
      </Button>
    </Button.Group>
  );
};
