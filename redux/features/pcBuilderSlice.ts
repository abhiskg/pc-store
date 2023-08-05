import { IProduct } from "@/backend/interfaces/productType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PcBuilderState {
  Motherboard: null | IProduct;
  Processor: null | IProduct;
  RAM: null | IProduct;
  Power_Supply_Unit: null | IProduct;
  Storage_Device: null | IProduct;
  Monitor: null | IProduct;
  componentCount: number;
}

const initialState: PcBuilderState = {
  Motherboard: null,
  Monitor: null,
  Power_Supply_Unit: null,
  Processor: null,
  RAM: null,
  Storage_Device: null,
  componentCount: 0,
};

const pcBuilderSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addComponent: (state, action: PayloadAction<IProduct | null>) => {
      if (action.payload?.category === "Motherboard") {
        state.Motherboard = action.payload;
        state.componentCount += 1;
      } else if (action.payload?.category === "Monitor") {
        state.Monitor = action.payload;
        state.componentCount += 1;
      } else if (action.payload?.category === "Power_Supply_Unit") {
        state.Power_Supply_Unit = action.payload;
        state.componentCount += 1;
      } else if (action.payload?.category === "Processor") {
        state.Processor = action.payload;
        state.componentCount += 1;
      } else if (action.payload?.category === "RAM") {
        state.RAM = action.payload;
        state.componentCount += 1;
      } else if (action.payload?.category === "Storage_Device") {
        state.Storage_Device = action.payload;
        state.componentCount += 1;
      }
    },
  },
});

export const { addComponent } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
