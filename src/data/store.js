import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://localhost:8000/api",
  allDoctors: [],
  allSpecializations: [],
  fileredSpecialzations: [],
  selectedSpecializations: 1,
});
