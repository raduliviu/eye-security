import { Chip } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

export const tableColumns: GridColDef[] = [
  { field: 'eyed', headerName: 'EyeD', width: 150 },
  { field: 'title', headerName: 'Title', width: 300 },
  {
    field: 'severity',
    headerName: 'Severity',
    width: 80,
    renderCell: ({ value }) => (
      <Chip label={value} color={value === 'high' ? 'error' : 'default'} />
    ),
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 80,
  },
  { field: 'resolutionStatus', headerName: 'Resolution', width: 100 },
  { field: 'categoryRef', headerName: 'Category', width: 80 },
  { field: 'service', headerName: 'Service', width: 100 },
  { field: 'createdAt', headerName: 'Created At', width: 100 },
  { field: 'updatedAt', headerName: 'Updated At', width: 100 },
  { field: 'triggeredAt', headerName: 'Triggered At', width: 100 },
  { field: 'acknowledgedAt', headerName: 'Acknowledged At', width: 100 },
  { field: 'acknowledgedBy', headerName: 'Acknowledged By', width: 100 },
  { field: 'resolvedAt', headerName: 'Resolved At', width: 100 },
  { field: 'resolvedBy', headerName: 'Resolved By', width: 100 },
  {
    field: 'pagerdutyIncidentId',
    headerName: 'Pager Duty Incident ID',
    width: 150,
  },
];
