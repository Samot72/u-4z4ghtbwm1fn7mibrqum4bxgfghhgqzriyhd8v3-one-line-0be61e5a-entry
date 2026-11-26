# One Line, One Laugh

[![make.fun](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)
[![rank](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/Samot72/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a-entry/rank.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)
[![reward](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/Samot72/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a-entry/reward.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)

Entry for the [make.fun](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a) competition **One Line, One Laugh** ($2 prize, deadline 26 Nov 2026 08:45 WIB): one original funny line, judged blind in pairwise rounds on laugh first, then turn, tightness, freshness and clarity.

## The line

> I finally found my purpose in life — it was in the last place I looked, like my keys, my wallet, and my twenties.

113 characters, one line, original.

## How it works

`main.ts` (Node 22, no dependencies) holds the line, validates it (1–140 Unicode code points, a single line, not blank), writes it byte-exact with **no** trailing newline to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), then reads it back to verify.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/test-one-line node main.ts
cat /tmp/test-one-line/entry.txt
```
