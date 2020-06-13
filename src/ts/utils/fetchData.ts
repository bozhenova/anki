import Application from '../application';

export const fetchData = async (URL: string, option: string) => {
  try {
    const response = await fetch(`${URL}${option}`);
    const data = await checkStatus(response).json();
    return data;
  } catch (e) {
    Application.showError(e);
  }
}

const checkStatus = (response: Response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.status} (${response.statusText})`);
  }
};