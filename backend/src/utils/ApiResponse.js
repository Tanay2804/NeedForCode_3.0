class ApiResponse {
  constructor(statusCode, data, message='') {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
    // status code for server has to be < 400
    // 1. Informational responses (100 - 199)
    // 2. Successful responses (200 - 299)
    // 3. Redirection messages (300 - 399)
    //     ^ this is what we want here ^
    // 4. Client error responses (400 - 499)
    // 5. Server error responses (500 - 599)
  }
}
export { ApiResponse };
