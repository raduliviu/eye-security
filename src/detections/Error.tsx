import { Stack, Typography } from '@mui/material';

type TErrorProps = {
  errorName: string;
  errorMessage: string;
};

export const Error = ({ errorName, errorMessage }: TErrorProps) => {
  return (
    <Stack textAlign='center' paddingY={2}>
      <Typography variant='h5' color='error'>
        {errorName}
      </Typography>
      <Typography variant='h5' color='error'>
        {errorMessage}
      </Typography>
      <Typography variant='h4' color='warning'>
        Please try refreshing the page
      </Typography>
    </Stack>
  );
};
