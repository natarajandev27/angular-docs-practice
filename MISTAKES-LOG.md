Angular Bootcamp — Mistakes Log
A running log of every real bug/error hit during the docs bootcamp.
Format: What broke → Why → Fix (+ "connects to" note when a bug echoes a past one).

---

July 2
NG0951: Required query called too early
What broke: Called `this.headerText` (which reads a `.required()` signal query) inside the constructor.
Why: The constructor runs before Angular resolves any view/content queries — signal OR decorator. Constructor is a hard floor for all queries.
Fix: Moved the read into `ngAfterViewInit()`.
Key lesson: `.required()` throws NG0951 at RUNTIME (not compile-time) — the code compiles fine, the browser throws when the query can't resolve.

NG0100: ExpressionChangedAfterItHasBeenCheckedError
What broke: Assigned `this.headerText = this.header.text` inside `ngAfterViewInit()`, then bound `headerText` in the template.
Why: Angular's change detection already checked that binding once (value `''`) before `ngAfterViewInit()` ran and changed it — mismatch caught in dev mode.
Fix: Preferred signal-based `computed()` instead, which integrates with reactivity and avoids manual lifecycle assignment. (Alternatives: `Promise.resolve().then(...)` or `cdr.detectChanges()`.)

TypeError: Cannot read 'text' of undefined (static:true misuse)
What broke: Tried to read `this.header.text` inside the constructor, even with `{ static: true }` set on the `@ViewChild`.
Why: `static: true` only moves availability up to `ngOnInit()` — NEVER the constructor. The constructor is a hard floor for ALL queries, no exceptions.
Fix: Moved the read into `ngOnInit()`.

------Dynamic component input key mismatch (deliberate break)
What broke: Renamed the inputs-object key to `userName` (capital N) while the component's input was `username`.
Why: `NgComponentOutlet` builds inputs from a runtime object the template checker can't inspect — so a mismatched/required input fails at RUNTIME, not compile-time.
Fix: Matched the key exactly to the input name.
Connects to: the input-vs-query timing rule — "the checker reads your CODE, not your CONDITIONS." A dynamically-built inputs object is, to the checker, a condition.

------LeafContent copy-paste ghost
What broke: `createComponent(LeafContent)` — `LeafContent` was the docs example's class, didn't exist in my project.
Why: Copied a class name from docs instead of using my own `NotificationComponent`.
Fix: Imported and used `NotificationComponent`.
Note: This one IS compile-time (TS: "Cannot find name 'LeafContent'") — the class name is visible in source, so the checker catches it. Good contrast to the runtime cases above.

------Silent effect (constructor misspelling)
What broke: An `effect()` never ran — not on load, not on signal change. Total silence, no error.
Why: The `constructor` was misspelled → became a plain method Angular never calls → the `effect()` inside it never registered.
Fix: Corrected the spelling; effect then ran once on creation + on every change as expected.
Connects to: the Day 6 note about declaring `implements OnInit` etc. for compile-time safety — a silently-not-running lifecycle method is very often a typo'd hook/method name.

-----Two-instance red herring + observer-effect log (debugging saga)
What broke: A conditional computed appeared "stuck at 0" while another binding showed count incrementing — seemingly impossible.
Why (part 1): Misread which button was clicked (Toggle vs Increment) and misread what `0` meant (`0 * 2 = 0`). The computed was truthful all along.
Why (part 2): Adding `this.count()` to the diagnostic `console.log` made count a TRACKED dependency of the computed — the act of observing changed the behavior being tested (dynamic-dependency experiment).
Fix: Removed the incidental read from the log; dynamic dependencies then behaved exactly as documented (false-branch → count not tracked → increments silent).
Key lesson: Hold the contradiction, extract ground truth (log the actual values), don't accept an answer-shaped story. Watch for the observer effect in reactive experiments.

---

<!-- TEMPLATE for new entries:

## [Date] — [Short title / error code]
- **What broke:**
- **Why:**
- **Fix:**
- **Connects to:** (optional — which past bug does this echo?)
