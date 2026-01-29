# Unit Testing Training Course - State File

> **For Claude:** Read this file at the start of any session to understand the course progress and context.

## ⚠️ IMPORTANT: Update Triggers

**Claude MUST update this file when:**
1. Student says **"NEXT"** → Mark current lesson complete, update "Current Position" to next lesson
2. Student completes an **exercise** → Update exercise status, add to "Code Review Feedback Log"
3. A new **lesson is delivered** → Add concepts to "Key Concepts Covered"
4. New **files are created** → Update "Project Files" section
5. **Module completed** → Update module status in "Course Structure"
6. Student **asks a question** → Add Q&A to "Questions & Answers" section
7. **Pattern observed** → Update "Learning Patterns" (strengths, areas to reinforce, common mistakes)
8. **Code style noticed** → Update "Code Style Preferences"

**Always update the "Last updated" timestamp at the bottom.**

---

## Student Profile

- **Experience Level:** Tech Lead, years of JS/TS experience
- **GraphQL:** Experienced
- **Testing:** Beginner (never written unit tests before)
- **Learning Style:** Udemy-style lessons with theory → demo → exercise → review
- **Pace Control:** Student says "NEXT" to advance, "CHECK" for review

---

## Learning Patterns

> Track what the student finds easy/difficult to tailor future lessons.

### Strengths
- Quick to implement after seeing examples
- Good instinct for edge cases (e.g., testing zero, same numbers)
- Responsive to feedback - immediately applies corrections

### Areas to Reinforce
- Test naming conventions (initially used imperative instead of third-person)
- *(Add more as patterns emerge)*

### Common Mistakes Made
- Initially added duplicate test (divide by zero) - learned to avoid redundancy
- *(Track recurring issues to address proactively)*

---

## Code Style Preferences

> Match the student's style when writing examples.

```typescript
// Observed preferences (update as patterns emerge):
// - Semicolons: No (omits them)
// - Quotes: Single quotes
// - Trailing commas: No
// - Spacing in objects: { a: 1 } vs {a:1} - TBD
```

---

## Real-World Context

> What will the student actually test at work? Tailor examples accordingly.

- **Stack:** Node.js, TypeScript, GraphQL, PostgreSQL
- **Role:** Tech Lead (needs to teach others too)
- **Project types:** *(Ask student to fill in - API services? Full-stack apps?)*
- **Testing priorities:** *(Ask student - what breaks most often?)*

---

## Code Review Feedback Log

> Track feedback given on exercises to avoid repeating and to build on progress.

### Exercise 1.1 (math.test.ts)
- ✅ Good edge case coverage
- ✅ Quickly fixed naming conventions
- ✅ Added suggested edge case (subtract same numbers)
- ⚠️ Had duplicate test initially - removed after feedback

### Exercise 2.1 (user.test.ts)
- *(Awaiting submission)*

---

## Course Structure

| Module | Topic | Status |
|--------|-------|--------|
| 1 | Foundations | 🟡 In Progress |
| 2 | Vitest Deep Dive | ⬜ Not Started |
| 3 | Mocking & Stubbing | ⬜ Not Started |
| 4 | Async Testing | ⬜ Not Started |
| 5 | Testing GraphQL | ⬜ Not Started |
| 6 | Database Testing (PostgreSQL) | ⬜ Not Started |
| 7 | Integration Testing | ⬜ Not Started |
| 8 | Advanced Patterns | ⬜ Not Started |
| 9 | Capstone Project | ⬜ Not Started |

---

## Lesson Progress

### Module 1: Foundations

| Lesson | Topic | Status |
|--------|-------|--------|
| 1.1 | What is Unit Testing? | ✅ Complete |
| 1.2 | Matchers & Assertions | 🟡 In Progress |
| 1.3 | Setup & Teardown | ⬜ Not Started |
| 1.4 | Test Organization | ⬜ Not Started |

---

## Current Position

**Module:** 1 - Foundations
**Lesson:** 1.2 - Matchers & Assertions
**Status:** Exercise 2.1 assigned, awaiting student submission

### Exercise 2.1 Requirements:
Student needs to create `src/__tests__/user.test.ts` with tests for:
1. `isValidEmail(email)` - 3+ tests (valid, no @, no .)
2. `addRole(user, role)` - 2+ tests (adds role, doesn't mutate original)
3. `hasRole(user, role)` - 2+ tests (returns true/false appropriately)

---

## Key Concepts Covered

### Lesson 1.1
- What unit tests are and why they matter
- The testing pyramid (Unit → Integration → E2E)
- FIRST principles (Fast, Isolated, Repeatable, Self-validating, Timely)
- AAA pattern (Arrange-Act-Assert)
- Test structure: `describe()`, `it()`, `expect()`
- Test naming conventions (third-person verbs)

### Lesson 1.2
- `toBe()` vs `toEqual()` (reference vs deep equality)
- Truthiness matchers (`toBeTruthy`, `toBeFalsy`, `toBeNull`, etc.)
- Negation with `.not`
- Number matchers (`toBeGreaterThan`, `toBeCloseTo`)
- String matchers (`toContain`, `toMatch`)
- Array matchers (`toContain`, `toContainEqual`, `toHaveLength`)
- Object matchers (`toMatchObject`, `toHaveProperty`)
- Error matchers (`toThrow`)

---

## Project Files

```
nodejs-unit-testing-training/
├── package.json
├── tsconfig.json
├── vitest.config.ts
├── COURSE_STATE.md          ← This file
├── src/
│   ├── math.ts              ← Lesson 1.1 demo code
│   ├── user.ts              ← Lesson 1.2 demo code
│   ├── __tests__/
│   │   ├── math.test.ts     ← Lesson 1.1 exercises (complete)
│   │   └── matchers-demo.test.ts  ← Lesson 1.2 reference
│   ├── exercises/           ← Empty, for future exercises
│   └── solutions/           ← Empty, for solutions
```

---

## Commands

```bash
npm run test        # Watch mode
npm run test:run    # Single run
npm run test:coverage  # With coverage report
```

---

## Questions & Answers

> Questions asked during the course and their answers, for future reference.

*(No questions asked yet)*

---

## Notes for Claude

- Student prefers concise feedback
- Review code thoroughly but kindly
- Focus on practical, real-world patterns
- GraphQL + PostgreSQL context is important for later modules
- **CRITICAL:** Update this file on every NEXT, CHECK (exercise complete), or new lesson delivery

---

## Update Log

| Date | Update |
|------|--------|
| Session 1 | Course initialized, Lessons 1.1 complete, 1.2 in progress |

---

*Last updated: Lesson 1.2 in progress - Exercise 2.1 assigned*
