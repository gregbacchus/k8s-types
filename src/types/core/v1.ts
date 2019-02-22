import { meta } from '../meta';
import * as resource from './resource';
import { Handler } from './v1';

export interface PodTemplateSpec {
  metadata: meta.v1.ObjectMeta;
  spec: PodSpec;
}

export type PodSpec = HostPodSpec | NonHostPodSpec;

export interface BasePodSpec {
  activeDeadlineSeconds?: number;
  affinity?: Affinity;
  automountServiceAccountToken?: boolean;
  containers: Container[];
  dnsConfig?: PodDNSConfig;
  dnsPolicy?: 'ClusterFirstWithHostNet' | 'ClusterFirst' | 'Default' | 'None';
  enableServiceLinks?: boolean;
  hostIPC?: boolean;
  hostPID?: boolean;
  hostname?: string;
  imagePullSecrets?: LocalObjectReference[];
  initContainers?: Container[];
  nodeName?: string;
  nodeSelector?: NodeSelector;
  priority?: number;
  priorityClassName?: string;
  readinessGates?: PodReadinessGate[];
  restartPolicy?: 'Always' | 'OnFailure' | 'Never';
  runtimeClassName?: string;
  schedulerName?: string;
  securityContext?: PodSecurityContext;
  serviceAccount?: string;
  serviceAccountName?: string;
  shareProcessNamespace?: boolean;
  subdomain?: string;
  terminationGracePeriodSeconds?: number;
  tolerations?: Toleration[];
  volumes?: Volume[];
}

export interface HostPodSpec extends BasePodSpec {
  hostNetwork: true;
}

export interface NonHostPodSpec extends BasePodSpec {
  hostAliases?: HostAlias[];
  hostNetwork?: false;
}

export interface Affinity {
  // TODO
}

export interface PodDNSConfig {
  // TODO
}

export interface HostAlias {
  // TODO
}

export interface LocalObjectReference {
  // TODO
}

export interface NodeSelector { [key: string]: string; }

export interface Container {
  args?: string[];
  command?: string[];
  env?: EnvVar[];
  envFrom?: EnvFromSource[];
  image?: string;
  imagePullPolicy?: 'Always' | 'Never' | 'IfNotPresent';
  lifecycle?: Lifecycle;
  livenessProbe?: Probe;
  name?: string;
  ports?: ContainerPort[];
  readinessProbe?: Probe;
  resources?: ResourceRequirements;
  securityContext?: SecurityContext;
  stdin?: boolean;
  stdinOnce?: boolean;
  terminationMessagePath?: string;
  terminationMessagePolicy?: string;
  tty?: boolean;
  volumeDevices?: VolumeDevice[];
  volumeMounts?: VolumeMount[];
  workingDir?: string;
}

export type EnvVar = EnvVarValue | EnvVarFrom;

export interface EnvVarValue {
  name: string;
  value: string;
}

export interface EnvVarFrom {
  name: string;
  valueFrom: EnvVarSource;
}

export type EnvVarSource = { configMapKeyRef: ConfigMapKeySelector }
  | { fieldRef: ObjectFieldSelector }
  | { resourceFieldRef: ResourceFieldSelector }
  | { secretKeyRef: SecretKeySelector };

export interface ConfigMapKeySelector {
  key: string;
  name: string;
  optional?: boolean;
}

export interface ObjectFieldSelector {
  apiVersion: string;
  fieldPath: string;
}

export interface ResourceFieldSelector {
  containerName: string;
  divisor: resource.Quantity;
  resource: string;
}

export interface SecretKeySelector {
  key: string;
  name: string;
  optional?: boolean;
}

export type EnvFromSource = EnvFromSourceConfigMap | EnvFromSourceSecret;

export interface EnvFromSourceConfigMap {
  configMapRef: ConfigMapEnvSource;
  prefix?: string;
}

export interface EnvFromSourceSecret {
  prefix?: string;
  secretRef: SecretEnvSource;
}

export interface ConfigMapEnvSource {
  name: string;
  optional?: boolean;
}

export interface SecretEnvSource {
  name: string;
  optional?: boolean;
}

export interface Lifecycle {
  postStart: Handler;
  preStop: Handler;
}

export type Handler = HandlerExec | HandlerHttp | HandlerTCP;

export interface HandlerExec {
  exec: ExecAction;
}

export interface HandlerHttp {
  httpGet: HTTPGetAction;
}

export interface HandlerTCP {
  tcpSocket: TCPSocketAction;
}

export interface ExecAction {
  command: string[];
}

export interface HTTPGetAction {
  host: string;
  httpHeaders?: HTTPHeader[];
  path: string;
  port?: string | number;
  scheme?: string;
}

export interface TCPSocketAction {
  host: string;
  port: string | number;
}

export interface HTTPHeader {
  name: string;
  value: string;
}

export interface Probe {
  // TODO
}

export interface ContainerPort {
  // TODO
}

export interface ResourceRequirements {
  // TODO
}

export interface SecurityContext {
  // TODO
}

export interface VolumeDevice {
  // TODO
}

export interface VolumeMount {
  // TODO
}

export interface PodReadinessGate {
  conditionType: string;
}

export interface PodSecurityContext {
  fsGroup?: number;
  runAsGroup?: number;
  runAsNonRoot?: boolean;
  runAsUser?: number;
  seLinuxOptions?: SELinuxOptions;
  supplementalGroups?: number[];
  sysctls?: Sysctl[];
}

export interface SELinuxOptions {
  // TODO
}

export interface Sysctl {
  // TODO
}

export type Toleration = TolerationExists | TolerationEqual | TolerationNoExecuteExists | TolerationNoExecuteEqual;

export interface TolerationExists {
  effect?: 'NoSchedule' | 'PreferNoSchedule';
  key?: string;
  operator: 'Exists';
}

export interface TolerationEqual {
  effect?: 'NoSchedule' | 'PreferNoSchedule';
  key: string;
  operator: 'Equal';
  value: string;
}

export interface TolerationNoExecuteExists {
  effect: 'NoExecute';
  key?: string;
  operator: 'Exists';
  tolerationSeconds?: number;
}

export interface TolerationNoExecuteEqual {
  effect: 'NoExecute';
  key: string;
  operator: 'Equal';
  tolerationSeconds?: number;
  value: string;
}

export interface Volume {
  // TODO
}

export interface ObjectReference {
  apiVersion: 'core/v1';
  fieldPath: string;
  kind: 'ObjectReference';
  name: string;
  namespace: string;
  resourceVersion: string;
  uid: string;
}

export interface KeyToPath {
  key: string;
  mode: number;
  path: string;
}
