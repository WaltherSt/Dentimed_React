import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Patient = {
  cedula: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  correo: string;
  direccion: string;
};

export const patientsApi = createApi({
  reducerPath: "patientApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8091/api",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPatients: builder.query<Patient[], null>({
      query: () => "/patients",
    }),
    getPatientById: builder.query<Patient, { cedula: string }>({
      query: ({ cedula }) => `/patients/${cedula}`,
    }),

    createPatient: builder.mutation<Patient, Patient>({
      query: (patient) => ({
        url: "/patients",
        method: "POST",
        body: patient,
      }),
    }),

    deletePatient: builder.mutation<void, string>({
      query: (cedula) => ({
        url: `/patients/${cedula}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPatientsQuery,
  useGetPatientByIdQuery,
  useCreatePatientMutation,
  useDeletePatientMutation,
} = patientsApi;
