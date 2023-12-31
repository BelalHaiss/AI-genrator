import ToastUtil from './Toast';
import axios from 'axios';
let token: string | null;
export type ARGS = {
  url: string;
  requestOption?: { method: string; data?: any };
  successToast?: string | null;
  errorToast?: string | null;
};

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_HOST;

// axios.defaults.baseURL = '/api';
export const fetcher = async ({
  url,
  requestOption,
  successToast,
  errorToast
}: ARGS) => {
  // if (typeof window !== 'undefined') {
  //   token = window.localStorage.getItem('token');
  // }

  try {
    const res = await axios({
      url,
      method: requestOption?.method,
      data: requestOption?.data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (successToast) ToastUtil(successToast, 'success');
    return res.data;
  } catch (error: any) {
    console.log({ error });
    if (error.message === 'Network Error') {
      ToastUtil('برجاء الاتصال بالشبكة والمحاولة');
      return;
    }

    ToastUtil(errorToast || 'حدث خطا', 'error');
    return null;
  }
};
