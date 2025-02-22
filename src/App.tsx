import { Link, Toolbar } from '@mui/material';
import { EyeLogo } from './ui/EyeLogo';
import { StyledAppBar } from './ui/StyledAppBar';
import { StyledMain } from './ui/StyledMain';
import { Detections } from './detections/Detections';

export const App = () => {
  return (
    <>
      <StyledAppBar>
        <Toolbar>
          <Link href='https://www.eye.security/'>
            <EyeLogo />
          </Link>
        </Toolbar>
      </StyledAppBar>
      <StyledMain>
        <Detections />
      </StyledMain>
    </>
  );
};
