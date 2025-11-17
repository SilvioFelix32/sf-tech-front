export type StripTimestamps<T> = {
  [K in keyof T as K extends 'createdAt' | 'updatedAt' ? never : K]:
    T[K] extends (infer U)[]
      ? StripTimestamps<U>[]
      : T[K] extends object
        ? StripTimestamps<T[K]>
        : T[K];
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  if (value === null) return false;
  if (Array.isArray(value)) return false;
  if (value instanceof Date) return false;
  return typeof value === 'object';
}

export function sanitazePayload<T>(payload: T): StripTimestamps<T> {
  const omitKeys = new Set(['createdAt', 'updatedAt']);

  const sanitize = (value: unknown): unknown => {
    if (Array.isArray(value)) {
      return value.map((item) => sanitize(item));
    }

    if (isPlainObject(value)) {
      const result: Record<string, unknown> = {};
      for (const [key, val] of Object.entries(value)) {
        if (omitKeys.has(key)) continue;
        result[key] = sanitize(val);
      }
      return result;
    }

    return value;
  };

  return sanitize(payload) as StripTimestamps<T>;
}