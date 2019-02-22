import { admissionregistration } from '../admissionregistration.k8s.io';

export interface ObjectMeta {
  annotations?: Annotations;
  clusterName?: string;
  // TODO readonly creationTimestamp: Time;
  deletionGracePeriodSeconds?: number;
  // TODO readonly deletionTimestamp: Time;
  finalizers?: string[];
  generateName?: string;
  // TODO readonly generation: number
  initializers?: admissionregistration.k8s.io.v1alpha1.Initializer[];
  labels?: Labels;
  name?: string;
  namespace?: string;
  ownerReferences?: OwnerReference[];
  // TODO readonly resourceVersion: string;
  // TODO readonly selfLink: string;
  // TODO readonly uuid: string;
}

export interface ListMeta {
  continue?: string;
  resourceVersion?: string;
  // TODO readonly selfLink: string;
}

export interface Annotations { [key: string]: any; }

export interface Labels { [key: string]: string; }

export interface OwnerReference {
  apiVersion: 'core/v1';
  blockOwnerDeletion: boolean;
  controller: boolean;
  kind: 'OwnerReference';
  name: string;
  uid: string;
}

export interface LabelSelector {
  matchExpressions?: LabelSelectorRequirement[] | null;
  matchLabels?: {} | null;
}

export type LabelSelectorRequirement = LabelSelectorRequirementIn | LabelSelectorRequirementExists;

export interface LabelSelectorRequirementIn {
  key: string;
  operator: 'In' | 'NotIn';
  values: string[];
}

export interface LabelSelectorRequirementExists {
  key: string;
  operator: 'Exists' | 'DoesNotExist';
}

export type Time = string;
