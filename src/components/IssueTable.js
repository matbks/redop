import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

function IssueTable() {
  // Mocked data for now
  const issues = [
    { id: 1, title: 'Issue 1', description: 'Description for issue 1' },
    { id: 2, title: 'Issue 2', description: 'Description for issue 2' },
    // ... add more issues as needed
  ];

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Description</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {issues.map(issue => (
          <TableRow key={issue.id}>
            <TableCell>{issue.title}</TableCell>
            <TableCell>{issue.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
