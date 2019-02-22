import { meta } from '../meta';

export interface PodDisruptionBudgetList {
  apiVersion: 'policy/v1beta1';
  items: PodDisruptionBudget[];
  kind: 'PodDisruptionBudgetList';
  metadata?: meta.v1.ListMeta;
}

export interface PodDisruptionBudget {
  apiVersion: 'policy/v1beta1';
  kind: 'PodDisruptionBudget';
  metadata?: meta.v1.ObjectMeta;
  spec?: PodDisruptionBudgetSpec;
  status?: PodDisruptionBudgetStatus;
}

export type PodDisruptionBudgetSpec = PodDisruptionBudgetSpecMax | PodDisruptionBudgetSpecMin;

export interface PodDisruptionBudgetSpecMax {
  maxUnavailable: number;
  selector: meta.v1.LabelSelector;
}

export interface PodDisruptionBudgetSpecMin {
  minUnavailable: number;
  selector: meta.v1.LabelSelector;
}

export interface PodDisruptionBudgetStatus {
  currentHealthy: number;
  desiredHealthy: number;
  disruptedPods: DisruptedPods;
  disruptionsAllowed: number;
  expectedPods: number;
  observedGeneration: number;
}

export interface DisruptedPods { [key: string]: any; } // TODO value = time
