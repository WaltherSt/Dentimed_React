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
    baseUrl: import.meta.env.VITE_BACKEND_URL,
  }),
  tagTypes: ["Patients"],
  endpoints: (builder) => ({
    getPatients: builder.query<Patient[],void>({
      query: () => "/patients",
      providesTags: ["Patients"],
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
      invalidatesTags: ["Patients"],
    }),

    deletePatient: builder.mutation<void, string>({
      query: (cedula) => ({
        url: `/patients/${cedula}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Patients"],
    }),

    updatePatient: builder.mutation<Patient, { patient: Patient }>({
      query: ({ patient }) => ({
        url: `/patients/${patient.cedula}`,
        method: "PATCH",
        body: patient,
      }),
      invalidatesTags: ["Patients"],
    }),
  }),
});

export const {
  useGetPatientsQuery,
  useGetPatientByIdQuery,
  useCreatePatientMutation,
  useDeletePatientMutation,
  useUpdatePatientMutation,
} = patientsApi;
