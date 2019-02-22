import { apps } from './types';

// import { apps } from '@pulumi/kubernetes/types/input';
import * as YAML from 'yaml';

const deployment: apps.v1.Deployment = {
  apiVersion: 'apps/v1',
  kind: 'Deployment',
  metadata: {
    annotations: {
      'asd/asd': 'test',
    },
    labels: {
      app: 'test',
    },
    name: 'my-deployment',
    namespace: 'test',
  },
  spec: {
    selector: {
      matchExpressions: [{
        key: 'app',
        operator: 'Exists',
      }],
    },
    template: {
      metadata: {
      },
      spec: {
        containers: [{
          name: 'test',
        }],
        tolerations: [{
          effect: 'PreferNoSchedule',
          key: 'asd',
          operator: 'Equal',
          value: 'test',
        }],
      },
    },
  },
};

console.log(YAML.stringify(deployment));
