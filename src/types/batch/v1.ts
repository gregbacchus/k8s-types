import { core } from '../core';
import { meta } from '../meta';

export interface JobSpec {
  activeDeadlineSeconds: number;
  backoffLimit: number;
  completions: number;
  manualSelector: boolean;
  parallelism: number;
  selector: meta.v1.LabelSelector;
  template: core.v1.PodTemplateSpec;
  ttlSecondsAfterFinished: number;
}

export interface JobStatus {
  active: number;
  completionTime: meta.v1.Time;
  conditions: JobCondition[];
  failed: number;
  startTime: meta.v1.Time;
  succeeded: number;
}

export interface JobCondition {
  lastProbeTime: meta.v1.Time;
  lastTransitionTime: meta.v1.Time;
  message: string;
  reason: string;
  status: string;
  type: string;
}
