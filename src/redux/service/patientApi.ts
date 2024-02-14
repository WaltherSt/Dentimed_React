import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Patient = {
  cedula: number;
  nombres: string;
  apellidos: string;
  telefono: number;
  correo: string;
  direccion: string;
};

export const patientsApi = createApi({
  reducerPath: "patientApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8091/api",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers
    },
  }),
  endpoints: (builder) => ({
    getPatients: builder.query<Patient[], null>({
      query: () => "/patients",
    }),
    getPatientById: builder.query<Patient, { cedula: string }>({
      query: ({ cedula }) => `/patients/${cedula}`,
    }),
  }),
});

export const { useGetPatientsQuery, useGetPatientByIdQuery } = patientsApi;
