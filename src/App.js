import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import { DisplaySingleBalance } from "./components//DisplayBalance/DisplaySingleBalance";
import { DisplayAllBalances } from "./components/DisplayBalance/DisplayAllBalances";
import { EntryLinesAll } from "./components/History/EntryLinesAll";
import { MainHeader } from "./components/Common/MainHeader";
import { NewEntryForm } from "./components/AddNewTransaction/NewEntryForm";
import { data } from "./mockData";
import { ModalEdit } from "./components/Common/ModalEdit";

function App() {
  const [entries, setEntries] = useState(data);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpense += Number(entry.value));
      } else {
        return (totalIncome += Number(entry.value));
      }
    });
    setTotal(totalIncome - totalExpense);
    setExpenseTotal(totalExpense);
    setIncomeTotal(totalIncome)
  }, [entries]);

  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const editEntry = (id) => {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  };

  const addEntry = () => {
    setEntries(
      entries.concat({
        id: entries.length + 1,
        description,
        value,
        isExpense,
      })
    );
    resetEntry();
  };

  const resetEntry = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
  };

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplaySingleBalance title="Your Balance" value={total} size="small" />

      <DisplayAllBalances totalIncome={incomeTotal} totalExpense={expenseTotal}/>

      <MainHeader title="History" type="h3" />
      <EntryLinesAll
        entries={entries}
        onDelete={deleteEntry}
        setIsOpen={setIsOpen}
        onEdit={editEntry}
      />

      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm
        onEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;
