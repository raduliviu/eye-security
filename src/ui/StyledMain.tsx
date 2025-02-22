import { Box, BoxProps, styled } from '@mui/material';
import { APP_BAR_HEIGHT } from './StyledAppBar';

const BoxWithStyles = styled(Box)<BoxProps>(() => ({
  backgroundColor: '#192440',
  minHeight: `calc(100vh - ${APP_BAR_HEIGHT})`,
  paddingBottom: 32,
}));

export const StyledMain = (props: BoxProps) => (
  <BoxWithStyles component='main' {...props} />
);
