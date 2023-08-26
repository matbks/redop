import { Card, CardContent, Typography } from '@material-ui/core';

function IssueDetails({ issue }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{issue.title}</Typography>
        <Typography variant="body2">{issue.description}</Typography>
        {/* Add other details as needed */}
      </CardContent>
    </Card>
  );
}
