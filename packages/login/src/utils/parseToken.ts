export function parseToken(token: string) {
  try {
    return JSON.parse(atob(token.split(".")[1])).group_name;
  } catch (e) {
    console.log("Invalid token provided for decoding:", token);
    throw e;
  }
}
