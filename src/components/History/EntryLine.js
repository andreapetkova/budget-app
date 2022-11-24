import { Segment, Grid, Icon } from "semantic-ui-react";

export const EntryLine = ({id, description, value, isExpense = false, onDelete, setIsOpen, onEdit}) => {

  return (
    <>
    <Segment color={isExpense ? 'red' : 'green'}>
      <Grid columns={3} textAlign="right">
        <Grid.Row>
          <Grid.Column width={10} textAlign="left">
            {description}
          </Grid.Column>
          <Grid.Column width={3} textAlign="right">
            {value}
          </Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" onClick={() => {onEdit(id)}} bordered></Icon>
            <Icon name="trash" onClick={() => onDelete(id)} bordered></Icon>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    </>
  );
};
