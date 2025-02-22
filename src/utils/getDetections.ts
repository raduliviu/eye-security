import { TDetections, TServerError } from './types';

export const getDetections = async (): Promise<TDetections[]> => {
  try {
    const response = await fetch(
      `https://front.heyering.com/detections?page=0&limit=100`,
      { headers: { Authorization: 'eye-am-hiring' } }
    );
    const data = await response.json();
    if (!response.ok) {
      const { error, message } = data as TServerError;
      const e = new Error(message);
      e.name = error;
      throw e;
    }
    return data as TDetections[];
  } catch (e) {
    if (e instanceof Error) {
      console.error(`${e.name} - ${e.message}`);
    }
    throw e;
  }
};
