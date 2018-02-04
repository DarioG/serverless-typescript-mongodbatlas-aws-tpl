import { Collection } from '../models/collection';

export function create(body: any) {
  return Collection.create(body)
    .then((result) => ({
      body: JSON.stringify(result),
      statusCode: 200,
    })).catch((err) => ({
      body: 'Request could not be created.',
      headers: { 'Content-Type': 'text/plain' },
      statusCode: err.statusCode || 500,
    }));
}
