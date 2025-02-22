import { DetectionsTable } from './DetectionsTable';
import { renderWithQueryClient } from '../utils/renderWithQueryClient';
import { getDetections } from '../utils/getDetections';
import { mockDetections } from '../utils/mockedData';

vi.mock('../utils/getDetections', () => ({
  getDetections: vi.fn(() => Promise.resolve(mockDetections)),
}));

describe('DetectionsTable component', async () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it('Should render mocked data', async () => {
    const { getByText } = renderWithQueryClient(<DetectionsTable />);

    await expect.element(getByText('Testing detection 1')).toBeInTheDocument();

    await expect.element(getByText('Testing detection 2')).toBeInTheDocument();
  });

  it('Should render error state', async () => {
    const mockError = new Error('Failed to fetch detections');
    mockError.name = 'FetchError';

    vi.mocked(getDetections).mockRejectedValueOnce(mockError);

    const { getByText } = renderWithQueryClient(<DetectionsTable />);

    await expect
      .element(getByText('Please try refreshing the page'))
      .toBeInTheDocument();

    await expect
      .element(getByText('Testing detection 1'))
      .not.toBeInTheDocument();
  });
});
