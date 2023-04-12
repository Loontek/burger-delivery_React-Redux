import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, POSTFIX } from "../../const";

const initialState = {
	products: [],
	isLoading: true,
	error: "",
};

export const productRequestAsync = createAsyncThunk(
	"product/fetch",
	(category) =>
		fetch(`${API_URL}${POSTFIX}?category=${category}`)
			.then((req) => req.json())
			.catch((error) => ({ error }))
);

const productSlice = createSlice({
	name: "product",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(productRequestAsync.pending.type, (state) => {
				state.error = "";
				state.isLoading = true;
			})
			.addCase(productRequestAsync.fulfilled.type, (state, action) => {
				state.error = "";
				state.isLoading = false;
				state.products = action.payload;
			})
			.addCase(productRequestAsync.rejected.type, (state, action) => {
				state.error = action.payload.error;
				state.isLoading = false;
			});
	},
});

export default productSlice.reducer;
