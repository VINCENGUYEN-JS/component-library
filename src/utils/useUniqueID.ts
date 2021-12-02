import { useState } from 'react';
import { customAlphabet } from 'nanoid/non-secure';

const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 10);

export const useUniqueID = (): string => {
  const [id] = useState(nanoid());
  return id;
};
