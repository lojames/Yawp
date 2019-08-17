export const unescaper = escaped =>
  escaped.replace(/\\u([0-9a-f]{4})/g,(match, offset) =>
    String.fromCharCode(parseInt(offset, 16)));
