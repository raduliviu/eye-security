import { Box } from '@mui/material';
import { DataGrid, GridSortModel } from '@mui/x-data-grid';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getDetections } from '../utils/getDetections';

import { Error } from './Error';
import { QuickFilter } from './QuickFilter';
import { tableColumns } from './tableColumns';

export const DetectionsTable = () => {
  const [sortModel, setSortModel] = useState<GridSortModel>([
    { field: 'severity', sort: 'asc' },
  ]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ['detections'],
    queryFn: getDetections,
    // Made it to not retry failed queries so that you can more easily see the error state
    retry: false,
  });

  return (
    <Box sx={{ height: 'auto', width: '90%', margin: '0 auto' }}>
      {error && <Error errorMessage={error.message} errorName={error.name} />}
      <DataGrid
        rows={data}
        columns={tableColumns}
        sortModel={sortModel}
        loading={isLoading}
        onSortModelChange={(model) => setSortModel(model)}
        slots={{
          toolbar: QuickFilter,
        }}
        pageSizeOptions={[5, 10, 25]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    </Box>
  );
};
