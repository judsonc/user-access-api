export const INTERNAL_ERROR = {
  error: {
    status: 500,
    code: "IEx001",
    title: "Internal server error",
    detail: "There was an unknown internal server error",
  }
};

export const NOT_FOUND_FAIL = {
  error: {
    status: 404,
    code: "NFx001",
    title: "Not found",
    detail: "The path does not exist",
  }
};

export const BAD_REQUEST_FAIL = (detail = "The malformed request syntax") => ({
  error: {
    status: 400,
    code: "BRx001",
    title: "Bad request",
    detail,
  }
});
