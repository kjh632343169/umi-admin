import { request } from '@umijs/max';
export async function getMenuList(
  params?: { [key: string]: any },
  options?: { [key: string]: any },
) {
  return request<any>(`/api/v1/queryMenuList`, {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
}
