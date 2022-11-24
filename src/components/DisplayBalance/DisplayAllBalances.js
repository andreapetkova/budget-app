import { Segment, Grid } from "semantic-ui-react";
import { DisplaySingleBalance } from "./DisplaySingleBalance";

export const DisplayAllBalances = ({totalIncome, totalExpense}) => {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
        <Grid.Column>
            <DisplaySingleBalance title="Income" value={totalIncome} color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplaySingleBalance title="Expenses" value={totalExpense} color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};
