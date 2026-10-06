# Dependency Upgrade Readiness Gate demo

Small npm projects used to demonstrate the Kestra **Dependency Upgrade Readiness Gate** blueprint (`dependency-upgrade-readiness-gate`). Each project has a committed `package-lock.json` and tests written with Node's built-in test runner (`node --test`), so every case is deterministic.

| `project_path` | `package` → `target_version` | Expected verdict |
| --- | --- | --- |
| `npm/app` | `lodash` → `4.17.21` | PASS |
| `npm/app` | `uuid` → `9.0.1` | BLOCK: `CANDIDATE_TEST_FAILED` (`uuid/v4` deep import no longer exists) |
| `npm/app` | `rimraf` → `2.7.1` | WARN: `DEPRECATED_PACKAGE` (adds deprecated `glob` and `inflight`) |
| `npm/app` | `core-js` → `2.6.12` | WARN: `DEPRECATED_PACKAGE`, `INSTALL_SCRIPT_PRESENT` |
| `npm/app` | `lodash` → `4.17.99` | BLOCK: `RESOLUTION_FAILED` (version does not exist) |
| `npm/app` | `inflight` → `1.0.6` | BLOCK: `PACKAGE_NOT_DIRECT` |
| `npm/failing` | `lodash` → `4.17.21` | INCONCLUSIVE: `BASELINE_FAILED` (tests already fail) |
| `npm/notest` | `lodash` → `4.17.21` | WARN: `NO_TEST_SCRIPT` |
| `npm/evil-npmrc` | `lodash` → `4.17.21` | PASS, with the project's `.npmrc` (which points npm at `127.0.0.1:9`) removed by the gate |
| `npm/tarball-dep` | `lodash` → `4.17.21` | BLOCK: `NON_REGISTRY_DEPENDENCY` (a dependency is downloaded from codeload.github.com) |

The `.npmrc` in `npm/evil-npmrc` and the tarball dependency in `npm/tarball-dep` are intentional: they exercise the gate's registry protections.
