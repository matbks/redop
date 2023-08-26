import { AppBar, Typography } from '@material-ui/core';

function HomeScreen() {
  return (
    <div>
      <AppBar position="static">
        <Typography variant="h6">
          Home Screen
        </Typography>
      </AppBar>
      {/* Other components like Issue Table go here */}
    </div>
  );
}

export default HomeScreen;
