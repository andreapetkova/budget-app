import { Container } from "semantic-ui-react";
import { EntryLine } from "./EntryLine";

export const EntryLinesAll = ({ entries, onDelete, setIsOpen, onEdit }) => {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine key={entry.id} {...entry} onDelete={onDelete} setIsOpen={setIsOpen} onEdit={onEdit}/>
      ))}
    </Container>
  );
};
