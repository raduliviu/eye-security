import { Stack, Typography } from '@mui/material';
import { DetectionsTable } from './DetectionsTable';

export const Detections = () => {
  return (
    <>
      <Stack textAlign='center' py={4}>
        <Typography variant='h1'>Detections</Typography>
        <Typography variant='h6'>
          Security alerts from customer networks
        </Typography>
      </Stack>
      <DetectionsTable />
    </>
  );
};
