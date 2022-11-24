import { Form, Segment, Checkbox } from "semantic-ui-react";

export const EntryForm = ({description, setDescription, value, setValue, isExpense,setIsExpense}) => {
  return (
    <>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New Shiny Thing"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <Form.Input
          icon="dollar"
          iconPosition="left"
          width={4}
          label="Value"
          placeholder="100.00"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="Expense"
          checked={isExpense}
          onChange={() => {
            setIsExpense((prevState) => !prevState);
          }}
        />
      </Segment>
    </>
  );
};
