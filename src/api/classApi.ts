import { ClassResponse, CreateClassRequest, ClassUpdateRequest } from '../types/entityclass';
import { ApiResponse, PageResponse } from '../types/api';
import axiosInstance from '../services/axios';

export const classApi = {
    getAll: (page?: number, size?: number, sort?: string) => {
        return axiosInstance.get<ApiResponse<PageResponse<ClassResponse>>>('/classes', {
            params: { page, size, sort }
        });
    },

    getById: (id: string) => {
        return axiosInstance.get<ApiResponse<ClassResponse>>(`/classes/${id}`);
    },

    create: (entityClass: Partial<CreateClassRequest>) => {
        return axiosInstance.post<ApiResponse<ClassResponse>>('/classes', entityClass);
    },

    update: (id: string, entityClass: Partial<ClassUpdateRequest>) => {
        return axiosInstance.put<ApiResponse<ClassResponse>>(`/classes/${id}`, entityClass);
    },

    patch: (id: string, entityClass: Partial<ClassUpdateRequest>) => {
        return axiosInstance.patch<ApiResponse<ClassResponse>>(`/classes/${id}`, entityClass);
    },

    delete: (id: string) => {
        return axiosInstance.delete<ApiResponse<void>>(`/classes/${id}`);
    },

    addStudents: (classId: string, ids: string[]) => {
        return axiosInstance.post<ApiResponse<void>>(`/classes/${classId}/students`, { ids });
    },

    removeStudent: (classId: string, id: string) => {
        return axiosInstance.delete<ApiResponse<void>>(`/classes/${classId}/students`, {
            data: { id }
        });
    },

    getByTeacher: (teacherId: string, page?: number, size?: number, sort?: string) => {
        const params: Record<string, any> = {};
        if (page !== undefined) params.page = page;
        if (size !== undefined) params.size = size;
        if (sort !== undefined) params.sort = sort;
        return axiosInstance.get<ApiResponse<ClassResponse[]>>(`/classes/teacher/${teacherId}`, { params });
    },
}; 