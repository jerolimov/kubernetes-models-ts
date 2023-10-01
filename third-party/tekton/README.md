# @kubernetes-models/tekton

[Tekton](https://tekton.dev/) Pipelines models.

## Installation

Install with npm.

```sh
npm install @kubernetes-models/tekton
```

## Usage

```js
import { Application } from "@kubernetes-models/argo-cd/argoproj.io/v1alpha1/Application";

// Create a new Application
const app = new Application({
  metadata: {
    name: "guestbook"
  },
  spec: {
    project: "default",
    source: {
      repoURL: "https://github.com/argoproj/argocd-example-apps.git",
      targetRevision: "HEAD",
      path: "guestbook"
    },
    destination: {
      server: "https://kubernetes.default.svc",
      namespace: "guestbook"
    }
  }
});

// Validate against JSON schema
app.validate();
```

## License

MIT
