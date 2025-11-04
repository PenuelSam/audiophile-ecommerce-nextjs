import type { FieldErrors, Resolver } from 'react-hook-form';
import { type ZodSchema } from 'zod';

export function zodResolver<TSchema extends ZodSchema>(schema: TSchema): Resolver<inferZod<TSchema>> {
  return async (values) => {
    const parsed = schema.safeParse(values);
    if (parsed.success) {
      return {
        values: parsed.data,
        errors: {}
      };
    }

    const formErrors: FieldErrors<inferZod<TSchema>> = {};

    for (const issue of parsed.error.issues) {
      const path = issue.path.join('.') || issue.code;
      set(formErrors, path, {
        type: issue.code,
        message: issue.message
      });
    }

    return {
      values: {},
      errors: formErrors
    };
  };
}

type inferZod<TSchema extends ZodSchema> = TSchema extends ZodSchema<infer Output> ? Output : never;

function set(target: FieldErrors, path: string, value: unknown) {
  const segments = path.split('.');
  let current: Record<string, unknown> = target;
  for (let i = 0; i < segments.length; i++) {
    const key = segments[i];
    if (i === segments.length - 1) {
      current[key] = value;
    } else {
      current[key] = current[key] || {};
      current = current[key] as Record<string, unknown>;
    }
  }
}
