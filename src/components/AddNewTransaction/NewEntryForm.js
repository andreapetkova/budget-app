import { Form } from "semantic-ui-react";
import { EntryForm } from "../Common/EntryForm";
import { ButtonSaveOrCancel } from "./ButtonSaveOrCancel";

export const NewEntryForm = ({
  onEntry,
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,
}) => {
  return (
    <Form unstackable>
      <EntryForm
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ButtonSaveOrCancel
        onEntry={onEntry}
      />
    </Form>
  );
};
