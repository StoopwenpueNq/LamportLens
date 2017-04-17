// JSONL parsing for the verifier, mirroring the validation rules that the
// Python model applies. Errors are collected, not thrown, so a partially
// readable snapshot still produces a full result.

import { AccountRecord, MAX_ACCOUNT_DATA_LEN } from "./rent.js";

export interface ParseError {
  line: number;
  message: string;
}

function requireNonEmptyString(obj: Record<string, unknown>, key: string, line: number): string {
