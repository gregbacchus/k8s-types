import { core } from '../core';
import { meta } from '../meta';

export interface Deployment {
  apiVersion: 'apps/v1';
  kind: 'Deployment';
  metadata: meta.v1.ObjectMeta;
  spec: DeploymentSpec;
}

export interface DeploymentSpec {
  minReadySeconds?: number;
  paused?: boolean;
  progressDeadlineSeconds?: number;
  replicas?: number;
  revisionHistoryLimit?: number;
  selector: meta.v1.LabelSelector;
  strategy?: DeploymentStrategy;
  template: core.v1.PodTemplateSpec;
}

export interface LabelSelectorRequirement {
  key: string;
  operator: string;
  values: string[];
}

export type DeploymentStrategy = RollingUpdateDeploymentStrategy | RecreateDeploymentStrategy;

export interface RollingUpdateDeploymentStrategy {
  type: 'RollingUpdate';
  rollingUpdate: RollingUpdateDeploymentStrategy;
}

export interface RecreateDeploymentStrategy {
  type: 'Recreate';
}
