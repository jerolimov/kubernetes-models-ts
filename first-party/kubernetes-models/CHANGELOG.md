# Change Log

## 3.1.0

### Minor Changes

- [#72](https://github.com/tommy351/kubernetes-models-ts/pull/72) [`6e51206`](https://github.com/tommy351/kubernetes-models-ts/commit/6e512067557a938db902a88c18595fc7c76e9b37) Thanks [@tommy351](https://github.com/tommy351)! - Update schema to Kubernetes v1.23.5.

### Patch Changes

- Updated dependencies [[`6e51206`](https://github.com/tommy351/kubernetes-models-ts/commit/6e512067557a938db902a88c18595fc7c76e9b37)]:
  - @kubernetes-models/apimachinery@0.2.0

## 3.0.1

### Patch Changes

- Updated dependencies []:
  - @kubernetes-models/apimachinery@0.1.0

## 3.0.0

### Major Changes

- [#66](https://github.com/tommy351/kubernetes-models-ts/pull/66) [`51cbc2b`](https://github.com/tommy351/kubernetes-models-ts/commit/51cbc2ba30ac417ee788f6a536a544191aadf69a) Thanks [@tommy351](https://github.com/tommy351)! - API machinery files are moved to the new package `@kubernetes-models/apimachinery`. You have to rewrite import paths as the following examples.

  ```ts
  // Before
  import { IObjectMeta } from "kubernetes-models/apimachinery/pkg/apis/meta/v1/ObjectMeta";

  // After
  import { IObjectMeta } from "@kubernetes-models/apimachinery/pkg/apis/meta/v1/ObjectMeta";
  ```

  This change makes CRD packages can import only API machinery files rather than the whole `kubernetes-models` package.

* [#66](https://github.com/tommy351/kubernetes-models-ts/pull/66) [`51cbc2b`](https://github.com/tommy351/kubernetes-models-ts/commit/51cbc2ba30ac417ee788f6a536a544191aadf69a) Thanks [@tommy351](https://github.com/tommy351)! - File paths are used to be `_definitions/<name>`, which are supposed to be hidden files, but sometimes IDE get confused and use them in import suggestions. In this version, files are moved to better locations, which should imporve the user experience of import suggestions. Below are examples of file paths.

  - `kubernetes-models/_definitions/IoK8sApiCoreV1Pod` -> `kubernetes-models/v1/Pod`
  - `kubernetes-models/_definitions/IoK8sApiAppsV1Deployment` -> `kubernetes-models/apps/v1/Deployment`

  Some file aliases are also removed to avoid hidden files being displayed in import suggestions. Here are some examples of removed file aliases.

  - `kubernetes-models/api/core/v1/Pod`
  - `kubernetes-models/api/apps/v1/Deployment`
  - `kubernetes-models/apiextensions-apiserver/pkg/apis/apiextensions/v1/CustomResourceDefinition`

  You might have to update import paths in your code if you are using any of the patterns above.

### Minor Changes

- [#68](https://github.com/tommy351/kubernetes-models-ts/pull/68) [`8b610d0`](https://github.com/tommy351/kubernetes-models-ts/commit/8b610d0130aebf48f9fb08bc9f6790f77281b4a9) Thanks [@tommy351](https://github.com/tommy351)! - All models with `apiVersion` and `kind` properties now come with a new static method `is`, which returns `true` when the input value contains the same `apiVersion` and `kind` with the model.

  This function implements TypeScript type guard, which is very useful for narrowing down types.

  Please noted that this function only checks `apiVersion` and `kind`, other properties may still be invalid.

  Below is an example of the type guard function.

  ```ts
  import { Pod } from "kubernetes-models/v1/Pod";

  if (Pod.is(value)) {
    // value is a Pod.
  }
  ```

### Patch Changes

- Updated dependencies [[`2b18c6b`](https://github.com/tommy351/kubernetes-models-ts/commit/2b18c6bcbfe1a414beabda00a6f1332449b2e748), [`04197d2`](https://github.com/tommy351/kubernetes-models-ts/commit/04197d23d5bc951b24a7e225f8d3070511861811), [`8b610d0`](https://github.com/tommy351/kubernetes-models-ts/commit/8b610d0130aebf48f9fb08bc9f6790f77281b4a9), [`e904810`](https://github.com/tommy351/kubernetes-models-ts/commit/e9048102c03569c19fc648ebff42b48e950dbc5c)]:
  - @kubernetes-models/base@3.0.0
  - @kubernetes-models/apimachinery@0.1.0

## 2.0.2

### Patch Changes

- [`0ddc606`](https://github.com/tommy351/kubernetes-models-ts/commit/0ddc606c531e1dbc06b2ddf102b9eeabd8bacea7) Thanks [@tommy351](https://github.com/tommy351)! - `apiVersion` and `kind` are no longer required in `volumeClaimTemplates` property of `StatefulSet` resource. (Fix [#44](https://github.com/tommy351/kubernetes-models-ts/issues/44))

## 2.0.1

### Patch Changes

- [`7c9d122`](https://github.com/tommy351/kubernetes-models-ts/commit/7c9d122689a55b644eb87b1661eb63c412302440) Thanks [@tommy351](https://github.com/tommy351)! - Rename extension of CommonJS files from `.cjs` to `.js`. (Revert [a9a3c18](https://github.com/tommy351/kubernetes-models-ts/commit/a9a3c189111b1f4c6975f1c53cde69e724c6f35b))

- Updated dependencies [[`7c9d122`](https://github.com/tommy351/kubernetes-models-ts/commit/7c9d122689a55b644eb87b1661eb63c412302440)]:
  - @kubernetes-models/base@2.0.1
  - @kubernetes-models/validate@2.0.1

## 2.0.0

### Major Changes

- [`f77a5c1`](https://github.com/tommy351/kubernetes-models-ts/commit/f77a5c154b093aaaccdb74ce309076f9dedf3cc9) Thanks [@tommy351](https://github.com/tommy351)! - Drop support of Node.js 10.

### Minor Changes

- [`0af92ab`](https://github.com/tommy351/kubernetes-models-ts/commit/0af92ab6320db857280c766f2a11bcefff1e0043) Thanks [@tommy351](https://github.com/tommy351)! - Update to Kubernetes v1.22.0.

  In order to maintain downward compatibility, older versions with removed APIs
  are merged into the latest version of Kubernetes OpenAPI specification.

### Patch Changes

- [`a9a3c18`](https://github.com/tommy351/kubernetes-models-ts/commit/a9a3c189111b1f4c6975f1c53cde69e724c6f35b) Thanks [@tommy351](https://github.com/tommy351)! - Rename extension of CommonJS files from `.js` to `.cjs`.

- Updated dependencies [[`7c1c04d`](https://github.com/tommy351/kubernetes-models-ts/commit/7c1c04dc0472a05d29bfd02a54855beb2bcb17db), [`a9a3c18`](https://github.com/tommy351/kubernetes-models-ts/commit/a9a3c189111b1f4c6975f1c53cde69e724c6f35b), [`f77a5c1`](https://github.com/tommy351/kubernetes-models-ts/commit/f77a5c154b093aaaccdb74ce309076f9dedf3cc9)]:
  - @kubernetes-models/validate@2.0.0
  - @kubernetes-models/base@2.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.7.1](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@1.7.0...kubernetes-models@1.7.1) (2021-05-30)

### Bug Fixes

- **generate:** Support nullable \$ref prop ([cb4979d](https://github.com/tommy351/kubernetes-models-ts/commit/cb4979dd9984c4cf6a91ae80a08f4696eef02828)), closes [#41](https://github.com/tommy351/kubernetes-models-ts/issues/41)

# [1.7.0](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@1.6.1...kubernetes-models@1.7.0) (2021-05-30)

### Features

- **validate:** Support quantity format ([66f502b](https://github.com/tommy351/kubernetes-models-ts/commit/66f502bbc902e81df3c22293937d45d82343d2aa))

## [1.6.1](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@1.6.0...kubernetes-models@1.6.1) (2021-05-20)

**Note:** Version bump only for package kubernetes-models

# [1.6.0](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@1.5.4...kubernetes-models@1.6.0) (2021-05-20)

### Features

- **generate:** Allow null in JSON schema ([ad6e4b7](https://github.com/tommy351/kubernetes-models-ts/commit/ad6e4b773c6967e1995146c35c5d3932050db794))
- **validate:** Upgrade to ajv v8 ([44c6ce5](https://github.com/tommy351/kubernetes-models-ts/commit/44c6ce5f50b4847b6228ec059cd8b802bb671281))

## [1.5.4](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@1.5.3...kubernetes-models@1.5.4) (2021-04-14)

**Note:** Version bump only for package kubernetes-models

## [1.5.3](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@1.5.2...kubernetes-models@1.5.3) (2021-04-14)

**Note:** Version bump only for package kubernetes-models

## [1.5.2](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@1.5.1...kubernetes-models@1.5.2) (2021-03-03)

### Bug Fixes

- Fix Node.js 10 support ([3cffdf0](https://github.com/tommy351/kubernetes-models-ts/commit/3cffdf0d0a0efc24fcc959d20c8bca657385488f))

## [1.5.1](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@1.5.0...kubernetes-models@1.5.1) (2021-03-03)

**Note:** Version bump only for package kubernetes-models

# [1.5.0](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@1.4.2...kubernetes-models@1.5.0) (2021-03-03)

### Features

- Rename extension of ESM files as ".mjs" ([025ac24](https://github.com/tommy351/kubernetes-models-ts/commit/025ac24948a07f2d48cc3fe4d3b6329749bc5c3a))

## [1.4.2](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@1.4.1...kubernetes-models@1.4.2) (2021-02-28)

**Note:** Version bump only for package kubernetes-models

## [1.4.1](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@1.4.0...kubernetes-models@1.4.1) (2021-02-28)

**Note:** Version bump only for package kubernetes-models

# [1.4.0](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@1.3.1...kubernetes-models@1.4.0) (2021-02-27)

### Features

- **export-map:** Add more options to generate command ([8558dae](https://github.com/tommy351/kubernetes-models-ts/commit/8558daedd09894c2098fa16dfd103858aeb40d5a))

## [1.3.1](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@1.3.0...kubernetes-models@1.3.1) (2021-02-27)

**Note:** Version bump only for package kubernetes-models

# [1.3.0](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@1.2.0...kubernetes-models@1.3.0) (2021-02-27)

### Features

- **crd-generate:** Generate aliases ([e16e6fe](https://github.com/tommy351/kubernetes-models-ts/commit/e16e6fe8736e95cfc48dcfe4ab2f244ac33bb380))
- **export-map:** Generate export map ([067b4e3](https://github.com/tommy351/kubernetes-models-ts/commit/067b4e303c0f662e113fc2ee65e8edf36a86c958))

# [1.2.0](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@1.1.0...kubernetes-models@1.2.0) (2021-02-22)

### Features

- **cert-manager:** Update to cert-manager v1.2.0 ([a200971](https://github.com/tommy351/kubernetes-models-ts/commit/a200971e3f51d3faa072c98456734aec797cee81))

# [1.1.0](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@1.0.3...kubernetes-models@1.1.0) (2021-02-07)

**Note:** Version bump only for package kubernetes-models

## [1.0.3](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@1.0.2...kubernetes-models@1.0.3) (2021-01-08)

**Note:** Version bump only for package kubernetes-models

## [1.0.2](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@1.0.1...kubernetes-models@1.0.2) (2020-12-15)

### Bug Fixes

- **openapi-generate:** Fix schema for JSON type ([9936430](https://github.com/tommy351/kubernetes-models-ts/commit/9936430ffcbe9630a7deee55628d2de236641607))

## [1.0.1](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@1.0.1...kubernetes-models@1.0.1) (2020-11-17)

## [1.0.1](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@1.0.0...kubernetes-models@1.0.1) (2020-10-16)

# [1.0.0](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@0.8.1...kubernetes-models@1.0.0) (2020-10-13)

### chore

- **deps:** Upgrade deps ([618d20b](https://github.com/tommy351/kubernetes-models-ts/commit/618d20b202ed91ee43814aa69e08a84f21d8ae1b))

### Features

- **kubernetes-models:** Upgrade to 1.19.2 ([2aaae5b](https://github.com/tommy351/kubernetes-models-ts/commit/2aaae5b0b7fdddaedf9f33aa88dc0c5813380432))

### BREAKING CHANGES

- **deps:** Drop support for Node.js 8

## [0.8.1](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@0.8.0...kubernetes-models@0.8.1) (2020-07-21)

# [0.8.0](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@0.7.3...kubernetes-models@0.8.0) (2020-05-03)

### Features

- **kubernetes-models:** Update to v1.18.3 ([1b28104](https://github.com/tommy351/kubernetes-models-ts/commit/1b2810435b04bce55a8cf96e59a690bd33a4cb11))

## [0.7.3](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@0.7.2...kubernetes-models@0.7.3) (2019-10-14)

## [0.7.2](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@0.7.1...kubernetes-models@0.7.2) (2019-09-01)

### Features

- Generate CRD ([bbd4930](https://github.com/tommy351/kubernetes-models-ts/commit/bbd4930d54650175261a62a5317dc9e6909dc147))

## [0.7.1](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@0.7.0...kubernetes-models@0.7.1) (2019-09-01)

# [0.7.0](https://github.com/tommy351/kubernetes-models-ts/compare/kubernetes-models@0.6.2-alpha.0...kubernetes-models@0.7.0) (2019-09-01)

## 0.6.2-alpha.0 (2019-09-01)