import { core } from '../core';
import { meta } from '../meta';

export interface HorizontalPodAutoscalerList {
  apiVersion: 'autoscaling/v2beta2';
  items: HorizontalPodAutoscaler[];
  kind: 'HorizontalPodAutoscalerList';
  metadata: meta.v1.ListMeta;
}

export interface HorizontalPodAutoscaler {
  apiVersion: 'autoscaling/v2beta2';
  kind: 'HorizontalPodAutoscaler';
  metadata: meta.v1.ObjectMeta;
  spec: HorizontalPodAutoscalerSpec;
  status: HorizontalPodAutoscalerStatus;
}

export interface HorizontalPodAutoscalerSpec {
  maxReplicas?: number;
  metrics: MetricSpec[];
  minReplicas?: number;
  scaleTargetRef: CrossVersionObjectReference;
}

export interface MetricSpec {
  external: ExternalMetricSource;
  object: ObjectMetricSource;
  pods: PodsMetricSource;
  resource: ResourceMetricSource;
  type: 'Object' | 'Pods' | 'Resource'; // TODO
}

export interface ExternalMetricSource {
  metric: MetricIdentifier;
  target: MetricTarget;
}

export interface ObjectMetricSource {
  describedObject: CrossVersionObjectReference;
  metric: MetricIdentifier;
  target: MetricTarget;
}

export interface PodsMetricSource {
  metric: MetricIdentifier;
  target: MetricTarget;
}

export interface ResourceMetricSource {
  name: string;
  target: MetricTarget;
}

export type MetricTarget = MetricTargetUtilization | MetricTargetValue | MetricTargetAverageValue;

export interface MetricTargetUtilization {
  averageUtilization: number;
  type: 'Utilization';
}

export interface MetricTargetValue {
  type: 'Value';
  value: core.resource.Quantity;
}

export interface MetricTargetAverageValue {
  averageValue: core.resource.Quantity;
  type: 'AverageValue';
}

export interface CrossVersionObjectReference {
  apiVersion: string;
  kind: string;
  name: string;
}

export interface HorizontalPodAutoscalerStatus {
  conditions: HorizontalPodAutoscalerCondition[];
  currentMetrics: MetricStatus[];
  currentReplicas: number;
  desiredReplicas: number;
  lastScaleTime: meta.v1.Time;
  observedGeneration: number;
}

export interface HorizontalPodAutoscalerCondition {
  lastTransitionTime: meta.v1.Time;
  message: string;
  reason: string;
  status: string;
  type: string;
}

export interface MetricStatus {
  external: ExternalMetricStatus;
  object: ObjectMetricStatus;
  pods: PodsMetricStatus;
  resource: ResourceMetricStatus;
  type: 'Object' | 'Pods' | 'Resource'; // TODO
}

export interface ExternalMetricStatus {
  current: MetricValueStatus;
  metric: MetricIdentifier;
}

export interface ObjectMetricStatus {
  current: MetricValueStatus;
  describedObject: CrossVersionObjectReference;
  metric: MetricIdentifier;
}

export interface PodsMetricStatus {
  current: MetricValueStatus;
  metric: MetricIdentifier;
}

export interface ResourceMetricStatus {
  current: MetricValueStatus;
  name: string;
}

export interface MetricValueStatus {
  averageUtilization: number;
  averageValue: core.resource.Quantity;
  value: core.resource.Quantity;
}

export interface MetricIdentifier {
  name: string;
  selector: meta.v1.LabelSelector;
}
