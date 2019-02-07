import { API } from './config';

export async function getCurrency() {
  const res = await fetch(API);
  const data = res.json();

  return data;
}
