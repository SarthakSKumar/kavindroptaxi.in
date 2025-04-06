export interface BookingConfirmationField {
  key: string;
  label: string;
  value: (formData) => string;
  isTruncated?: boolean;
}

export const bookingConfirmationFields: BookingConfirmationField[] = [
  {
    key: "name",
    label: "Name",
    value: (formData) => formData.name,
  },
  {
    key: "mobile",
    label: "Mobile",
    value: (formData) => formData.mobile,
  },
  {
    key: "pickup",
    label: "From",
    value: (formData) => formData.pickup,
    isTruncated: true,
  },
  {
    key: "destination",
    label: "To",
    value: (formData) => formData.destination,
    isTruncated: true,
  },
  {
    key: "date",
    label: "Date",
    value: (formData) => formData.date,
  },
  {
    key: "time",
    label: "Time",
    value: (formData) => formData.time,
  },
  {
    key: "vehicle",
    label: "Vehicle",
    value: (formData) => formData.selectedVehicle?.name || "",
  },
];
