import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

function IssueTable({ issues }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Description</TableCell>
          {/* Add other columns as needed */}
        </TableRow>
      </TableHead>
      <TableBody>
        {issues.map(issue => (
          <TableRow key={issue.id} onClick={() => navigateToIssueDetails(issue.id)}>
            <TableCell>{issue.title}</TableCell>
            <TableCell>{issue.description}</TableCell>
            {/* Add other cells as needed */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
