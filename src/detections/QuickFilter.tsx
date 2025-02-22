import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid';

export const QuickFilter = () => {
  return (
    <GridToolbarContainer
      sx={{
        margin: '0 auto',
        width: '100%',
        justifyContent: 'space-evenly',
        paddingY: 1,
      }}
    >
      <GridToolbarColumnsButton />
      <GridToolbarQuickFilter sx={{ width: '85%' }} />
    </GridToolbarContainer>
  );
};
