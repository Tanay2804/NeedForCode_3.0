// Instead of writing try-catch for many functions
// and logics we can create a single higher order function
// that runs that logic and gives us the same output
// but with less and more secure code for middle wares this is used

// requestHandler====fxn to run
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise
    .resolve(requestHandler(req, res, next))
    .catch((error) =>
      next(error),
    );
  };
};

export { asyncHandler };

// less used way of creating an async handler of type TRY CATCH:
// its a syntax where we accept a function to run
// similar to:
// const asyncHandler = (func)=>{ async()=>{} } but we remove {}
//now we have this wrapper function

// OF TYPE TRY CATCH


// const asyncHandler = (fnxn) => async (req, res, next) => {
//   try {
//     await fnxn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
