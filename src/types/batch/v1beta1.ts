import { batch } from '.';
import { core } from '../core';
import { meta } from '../meta';

export interface CronJobList {
  apiVersion: 'batch/v1beta1';
  items: CronJob[];
  kind: 'CronJobList';
  metadata?: meta.v1.ListMeta;
}

export interface CronJob {
  apiVersion: 'batch/v1beta1';
  kind: 'CronJob';
  metadata?: meta.v1.ObjectMeta;
  spec?: CronJobSpec;
  status?: CronJobStatus;
}

export interface CronJobSpec {
  concurrencyPolicy?: 'Allow' | 'Forbid' | 'Replace';
  failedJobsHistoryLimit?: number;
  jobTemplate: JobTemplateSpec;
  schedule: string;
  startingDeadlineSeconds?: number;
  successfulJobsHistoryLimit?: number;
  suspend?: boolean;
}

export interface JobTemplateSpec {
  metadata: meta.v1.ObjectMeta;
  spec: batch.v1.JobSpec;
}

export interface CronJobStatus {
  active: core.v1.ObjectReference[];
  lastScheduleTime: meta.v1.Time;
}
