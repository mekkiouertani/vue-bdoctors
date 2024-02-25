import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://localhost:8000/api",
  basePathImage: "http://localhost:8000/",
  basePathCV: "http://localhost:8000/",
  allDoctors: [],
  allSpecializations: [],
  filteredSpecializations: [],
  selectedSpecializations: "",
  filteredDoctor: [],
  call: false,
  isLoading: false,
});
