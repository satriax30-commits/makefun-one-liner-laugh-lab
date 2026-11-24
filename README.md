# One-Liner Laugh Lab

[![make.fun](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![rank](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/satriax30-commits/makefun-one-liner-laugh-lab/rank.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![reward](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/satriax30-commits/makefun-one-liner-laugh-lab/reward.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)

One short funny line answering a prompt — the excuse a robot vacuum gives
after eating a sock — for the
[One-Liner Laugh Lab](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
bounty on [make.fun](https://make.fun/).

## The line

> I ate your sock because it was the only thing in this house that ever tried to run away from me.

## Run

```sh
node main.ts /output
```

Deterministic, standard library only. `main.ts` writes the line to
`<output>/entry.txt`, validates the 1–200 character gate, and reads the file
back to confirm it matches byte for byte.
