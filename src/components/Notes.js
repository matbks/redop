import { List, ListItem, ListItemText } from '@material-ui/core';

function Notes({ notes }) {
  return (
    <List>
      {notes.map(note => (
        <ListItem key={note.id}>
          <ListItemText primary={note.content} />
        </ListItem>
      ))}
    </List>
  );
}

export default Notes;