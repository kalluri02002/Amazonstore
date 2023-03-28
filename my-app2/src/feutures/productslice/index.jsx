const {createSlice, createAsyncThunk}=require("@reduxjs/toolkit")
const initialState ={
    productList:[],
    isLoading:false,
    isFailed :false
}
export const callProductListApi=createAsyncThunk("/product/callproductlistapi",async function() {
    try {
        const apiResponse =await fetch('https://dummyjson.com/products')
        const result =await apiResponse.json()
        return result

    }
    catch (error){
        console.log(error)
    }
})
const productSlice =createSlice({
    name :"product",
    initialState,
    // reducers:{
    //     getProducts :(state)=>{
    //         state.productList=data
    //     }

    // },
    extraReducers :{
        [callProductListApi.pending] : (state) =>{
            state.isLoading =true
        },
        [callProductListApi.fulfilled] : (state,action) =>{
            state.isLoading =false
            console.log(action)
            const {payload}=action;
            const {products}=payload;
            state.productList=products
        },
        [callProductListApi.rejected] : (state) =>{
            state.isLoading =false
            state.isFailed= true
        }
    }
})
export default productSlice.reducer;