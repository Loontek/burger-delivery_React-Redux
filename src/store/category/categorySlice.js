import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, POSTFIX } from "../../const";

const initialState = {
  category: [],
  error: "",
  activeCategory: 5,
};

export const categoryRequestAsync = createAsyncThunk("category/fetch", (data, obj) => {
  console.log("data: ", data);
  console.log("obj: ", obj);

  return fetch(`${API_URL}${POSTFIX}/category`)
    .then((req) => req.json())
    .catch((error) => ({ error }));
});

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    changeCategory(state, action) {
      console.log("action: ", action);
      console.log("state: ", state);

      state.activeCategory = action.payload.indexCategory;
    },
  },
  extraReducers: {
    [categoryRequestAsync.pending.type]: (state) => {
      state.error = "";
    },
    [categoryRequestAsync.fulfilled.type]: (state, action) => {
      state.error = "";
      state.category = action.payload;
    },
    [categoryRequestAsync.rejected.type]: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;
