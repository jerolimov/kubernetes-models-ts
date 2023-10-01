import { describe, it, expect, beforeEach } from "vitest";
import { Pipeline } from "../gen/tekton.dev/v1/Pipeline";
import { PipelineRun } from "../gen/tekton.dev/v1/PipelineRun";
import { Task } from "../gen/tekton.dev/v1/Task";
import { TaskRun } from "../gen/tekton.dev/v1/TaskRun";

describe("Pipeline", () => {
  let pipeline: Pipeline;

  beforeEach(() => {
    pipeline = new Pipeline({
      metadata: {
        name: "test-pipeline"
      },
      // TODO: spec is missing???
      // spec: {
      // }
    });
  });

  it("should set apiVersion", () => {
    expect(pipeline).toHaveProperty("apiVersion", "tekton.dev/v1");
  });

  it("should set kind", () => {
    expect(pipeline).toHaveProperty("kind", "Pipeline");
  });

  it("validate", () => {
    expect(() => pipeline.validate()).not.toThrow();
  });

  it("toJSON", () => {
    expect(pipeline.toJSON()).toEqual({
      apiVersion: "tekton.dev/v1",
      kind: "Pipeline",
      metadata: {
        name: "test-pipeline"
      },
    });
  });
});

describe("PipelineRun", () => {
  let pipelineRun: PipelineRun;

  beforeEach(() => {
    pipelineRun = new PipelineRun({
      metadata: {
        name: "test-pipelinerun"
      },
      // TODO: spec is missing???
      // spec: {
      // }
    });
  });

  it("should set apiVersion", () => {
    expect(pipelineRun).toHaveProperty("apiVersion", "tekton.dev/v1");
  });

  it("should set kind", () => {
    expect(pipelineRun).toHaveProperty("kind", "PipelineRun");
  });

  it("validate", () => {
    expect(() => pipelineRun.validate()).not.toThrow();
  });

  it("toJSON", () => {
    expect(pipelineRun.toJSON()).toEqual({
      apiVersion: "tekton.dev/v1",
      kind: "PipelineRun",
      metadata: {
        name: "test-pipelinerun"
      },
    });
  });
});

describe("Task", () => {
  let task: Task;

  beforeEach(() => {
    task = new Task({
      metadata: {
        name: "test-task"
      },
      // TODO: spec is missing???
      // spec: {
      // }
    });
  });

  it("should set apiVersion", () => {
    expect(task).toHaveProperty("apiVersion", "tekton.dev/v1");
  });

  it("should set kind", () => {
    expect(task).toHaveProperty("kind", "Task");
  });

  it("validate", () => {
    expect(() => task.validate()).not.toThrow();
  });

  it("toJSON", () => {
    expect(task.toJSON()).toEqual({
      apiVersion: "tekton.dev/v1",
      kind: "Task",
      metadata: {
        name: "test-task"
      },
    });
  });
});

describe("TaskRun", () => {
  let taskRun: TaskRun;

  beforeEach(() => {
    taskRun = new TaskRun({
      metadata: {
        name: "test-taskrun"
      },
      // TODO: spec is missing???
      // spec: {
      // }
    });
  });

  it("should set apiVersion", () => {
    expect(taskRun).toHaveProperty("apiVersion", "tekton.dev/v1");
  });

  it("should set kind", () => {
    expect(taskRun).toHaveProperty("kind", "TaskRun");
  });

  it("validate", () => {
    expect(() => taskRun.validate()).not.toThrow();
  });

  it("toJSON", () => {
    expect(taskRun.toJSON()).toEqual({
      apiVersion: "tekton.dev/v1",
      kind: "TaskRun",
      metadata: {
        name: "test-taskrun"
      },
    });
  });
});
