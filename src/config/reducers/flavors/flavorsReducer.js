const initialState = [
  {
    Crust: "NORMAL",
    Flavor: "BEEF-NORMAL",
    Order_ID: 1,
    Size: "M",
    Table_No: 1,
    Timestamp: "2019-12-03T18:21:08.669365"
  },
  {
    Crust: "THIN",
    Flavor: "CHEESE",
    Order_ID: 2,
    Size: "S",
    Table_No: 5,
    Timestamp: "2019-12-03T18:21:08.708470"
  },
  {
    Crust: "NORMAL",
    Flavor: "CHICKEN-FAJITA",
    Order_ID: 3,
    Size: "L",
    Table_No: 3,
    Timestamp: "2019-12-03T18:21:08.710006"
  }
]

const FlavorsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
export default FlavorsReducer