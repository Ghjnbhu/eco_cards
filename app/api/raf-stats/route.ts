import { NextResponse } from 'next/server';

type Entry = {
  attempts: number;
  matched: number;
  mismatched: number;
  unmatched: Record<string, number>;
};

let stats: Record<string, Entry> = {};

function addAttempt(row: any) {
  const word = row?.word;
  const heard = row?.heard ?? '';
  const matched = !!row?.matched;
  if (!word) return false;

  const e =
    stats[word] ??
    (stats[word] = { attempts: 0, matched: 0, mismatched: 0, unmatched: {} });

  e.attempts += 1;
  if (matched) {
    e.matched += 1;
  } else {
    e.mismatched += 1;
    const key = heard || '';
    e.unmatched[key] = (e.unmatched[key] || 0) + 1;
  }
  return true;
}

export async function GET() {
  return NextResponse.json(stats);
}

export async function POST(request: Request) {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Accept an array (what lib/raf-stats.js actually sends)
  // or a single row object (in case of manual testing).
  const rows = Array.isArray(body) ? body : [body];
  let accepted = 0;
  for (const row of rows) {
    if (addAttempt(row)) accepted += 1;
  }

  if (accepted === 0) {
    console.warn('[raf-stats] rejected body:', JSON.stringify(body));
    return NextResponse.json({ error: 'No valid rows', got: body }, { status: 400 });
  }

  return NextResponse.json({ ok: true, accepted });
}

export async function DELETE() {
  stats = {};
  return NextResponse.json({ ok: true });
}