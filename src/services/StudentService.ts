import apiClient from './AxiosClient'
import type {  AxiosResponse } from 'axios'
import type { StudentItem } from '@/type'

export default {
  getStudents(perPage: number, page: number): Promise<AxiosResponse<StudentItem[]>> {
    return apiClient.get<StudentItem[]>('/students?_limit=' + perPage + '&_page=' + page)
  },
  getAllStudents(): Promise<AxiosResponse<StudentItem[]>> {
    return apiClient.get<StudentItem[]>('/students')
  },
}