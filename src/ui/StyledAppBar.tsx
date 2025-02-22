import { AppBar, AppBarProps, styled } from '@mui/material';

export const APP_BAR_HEIGHT = '64px';

const AppBarWithStyles = styled(AppBar)<AppBarProps>(() => ({
  backgroundColor: '#fff',
  height: APP_BAR_HEIGHT,
}));

export const StyledAppBar = (props: AppBarProps) => (
  <AppBarWithStyles position='static' {...props} />
);
