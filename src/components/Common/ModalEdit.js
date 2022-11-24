import { Button, Modal } from "semantic-ui-react";
import { EntryForm } from "../Common/EntryForm";

export const ModalEdit = ({
  isOpen,
  setIsOpen,
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,
}) => {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={description}
          setDescription={setDescription}
          value={value}
          setValue={setValue}
          isExpense={isExpense}
          setIsExpense={setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
        <Button onClick={() => setIsOpen(false)} primary>Ok</Button>
      </Modal.Actions>
    </Modal>
  );
};
