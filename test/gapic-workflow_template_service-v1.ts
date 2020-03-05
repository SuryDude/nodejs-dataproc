// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import { describe, it } from 'mocha';
const workflowtemplateserviceModule = require('../src');


const FAKE_STATUS_CODE = 1;
class FakeError{
    name: string;
    message: string;
    code: number;
    constructor(n: number){
        this.name = 'fakeName';
        this.message = 'fake message';
        this.code = n;
    }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError|null, response?: {} | null): void;
}

export class Operation{
    constructor(){};
    promise() {};
}
function mockSimpleGrpcMethod(expectedRequest: {}, response: {} | null, error: FakeError | null) {
    return (actualRequest: {}, options: {}, callback: Callback) => {
        assert.deepStrictEqual(actualRequest, expectedRequest);
        if (error) {
            callback(error);
        } else if (response) {
            callback(null, response);
        } else {
            callback(null);
        }
    };
}
function mockLongRunningGrpcMethod(expectedRequest: {}, response: {} | null, error?: {} | null) {
    return (request: {}) => {
        assert.deepStrictEqual(request, expectedRequest);
        const mockOperation = {
          promise: function() {
            return new Promise((resolve, reject) => {
              if (error) {
                reject(error);
              }
              else {
                resolve([response]);
              }
            });
          }
        };
        return Promise.resolve([mockOperation]);
    };
}
describe('v1.WorkflowTemplateServiceClient', () => {
    it('has servicePath', () => {
        const servicePath = workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient.servicePath;
        assert(servicePath);
    });
    it('has apiEndpoint', () => {
        const apiEndpoint = workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient.apiEndpoint;
        assert(apiEndpoint);
    });
    it('has port', () => {
        const port = workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient.port;
        assert(port);
        assert(typeof port === 'number');
    });
    it('should create a client with no option', () => {
        const client = new workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient();
        assert(client);
    });
    it('should create a client with gRPC fallback', () => {
        const client = new workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient({
            fallback: true,
        });
        assert(client);
    });
    it('has initialize method and supports deferred initialization', async () => {
        const client = new workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient({
            credentials: { client_email: 'bogus', private_key: 'bogus' },
            projectId: 'bogus',
        });
        assert.strictEqual(client.workflowTemplateServiceStub, undefined);
        await client.initialize();
        assert(client.workflowTemplateServiceStub);
    });
    it('has close method', () => {
        const client = new workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient({
            credentials: { client_email: 'bogus', private_key: 'bogus' },
            projectId: 'bogus',
        });
        client.close();
    });
    describe('createWorkflowTemplate', () => {
        it('invokes createWorkflowTemplate without error', done => {
            const client = new workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.ICreateWorkflowTemplateRequest = {};
            request.parent = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.createWorkflowTemplate = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.createWorkflowTemplate(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes createWorkflowTemplate with error', done => {
            const client = new workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.ICreateWorkflowTemplateRequest = {};
            request.parent = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.createWorkflowTemplate = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.createWorkflowTemplate(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('getWorkflowTemplate', () => {
        it('invokes getWorkflowTemplate without error', done => {
            const client = new workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IGetWorkflowTemplateRequest = {};
            request.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.getWorkflowTemplate = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.getWorkflowTemplate(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes getWorkflowTemplate with error', done => {
            const client = new workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IGetWorkflowTemplateRequest = {};
            request.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.getWorkflowTemplate = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.getWorkflowTemplate(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('updateWorkflowTemplate', () => {
        it('invokes updateWorkflowTemplate without error', done => {
            const client = new workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IUpdateWorkflowTemplateRequest = {};
            request.template = {};
            request.template.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.updateWorkflowTemplate = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.updateWorkflowTemplate(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes updateWorkflowTemplate with error', done => {
            const client = new workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IUpdateWorkflowTemplateRequest = {};
            request.template = {};
            request.template.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.updateWorkflowTemplate = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.updateWorkflowTemplate(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('deleteWorkflowTemplate', () => {
        it('invokes deleteWorkflowTemplate without error', done => {
            const client = new workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IDeleteWorkflowTemplateRequest = {};
            request.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.deleteWorkflowTemplate = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.deleteWorkflowTemplate(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes deleteWorkflowTemplate with error', done => {
            const client = new workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IDeleteWorkflowTemplateRequest = {};
            request.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.deleteWorkflowTemplate = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.deleteWorkflowTemplate(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('instantiateWorkflowTemplate', () => {
        it('invokes instantiateWorkflowTemplate without error', done => {
            const client = new workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IInstantiateWorkflowTemplateRequest = {};
            request.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.instantiateWorkflowTemplate = mockLongRunningGrpcMethod(
                request,
                expectedResponse
            );
            client.instantiateWorkflowTemplate(request).then((responses: [Operation]) => {
                const operation = responses[0];
                return operation? operation.promise() : {};
            }).then((responses: [Operation]) => {
                assert.deepStrictEqual(responses[0], expectedResponse);
                done();
            }).catch((err: {}) => {
                done(err);
            });
        });

        it('invokes instantiateWorkflowTemplate with error', done => {
            const client = new workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IInstantiateWorkflowTemplateRequest = {};
            request.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.instantiateWorkflowTemplate = mockLongRunningGrpcMethod(
                request,
                null,
                error
            );
            client.instantiateWorkflowTemplate(request).then((responses: [Operation]) => {
                const operation = responses[0];
                return operation? operation.promise() : {};
            }).then(() => {
                assert.fail();
            }).catch((err: FakeError) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                done();
            });
        });
    });
    describe('instantiateInlineWorkflowTemplate', () => {
        it('invokes instantiateInlineWorkflowTemplate without error', done => {
            const client = new workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IInstantiateInlineWorkflowTemplateRequest = {};
            request.parent = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.instantiateInlineWorkflowTemplate = mockLongRunningGrpcMethod(
                request,
                expectedResponse
            );
            client.instantiateInlineWorkflowTemplate(request).then((responses: [Operation]) => {
                const operation = responses[0];
                return operation? operation.promise() : {};
            }).then((responses: [Operation]) => {
                assert.deepStrictEqual(responses[0], expectedResponse);
                done();
            }).catch((err: {}) => {
                done(err);
            });
        });

        it('invokes instantiateInlineWorkflowTemplate with error', done => {
            const client = new workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IInstantiateInlineWorkflowTemplateRequest = {};
            request.parent = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.instantiateInlineWorkflowTemplate = mockLongRunningGrpcMethod(
                request,
                null,
                error
            );
            client.instantiateInlineWorkflowTemplate(request).then((responses: [Operation]) => {
                const operation = responses[0];
                return operation? operation.promise() : {};
            }).then(() => {
                assert.fail();
            }).catch((err: FakeError) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                done();
            });
        });
    });
    describe('listWorkflowTemplates', () => {
        it('invokes listWorkflowTemplates without error', done => {
            const client = new workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IListWorkflowTemplatesRequest = {};
            request.parent = '';
            // Mock response
            const expectedResponse = {};
            // Mock Grpc layer
            client._innerApiCalls.listWorkflowTemplates = (actualRequest: {}, options: {}, callback: Callback) => {
                assert.deepStrictEqual(actualRequest, request);
                callback(null, expectedResponse);
            };
            client.listWorkflowTemplates(request, (err: FakeError, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            });
        });
    });
    describe('listWorkflowTemplatesStream', () => {
        it('invokes listWorkflowTemplatesStream without error', done => {
            const client = new workflowtemplateserviceModule.v1.WorkflowTemplateServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IListWorkflowTemplatesRequest = {};
            request.parent = '';
            // Mock response
            const expectedResponse = {response: 'data'};
            // Mock Grpc layer
            client._innerApiCalls.listWorkflowTemplates = (actualRequest: {}, options: {}, callback: Callback) => {
                assert.deepStrictEqual(actualRequest, request);
                callback(null, expectedResponse);
            };
            const stream = client.listWorkflowTemplatesStream(request, {}).on('data', (response: {}) =>{
                assert.deepStrictEqual(response, expectedResponse);
                done();
            }).on('error', (err: FakeError) => {
                done(err);
            });
            stream.write(expectedResponse);
        });
    });
});
