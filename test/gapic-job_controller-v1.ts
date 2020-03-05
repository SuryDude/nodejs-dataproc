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
const jobcontrollerModule = require('../src');


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
describe('v1.JobControllerClient', () => {
    it('has servicePath', () => {
        const servicePath = jobcontrollerModule.v1.JobControllerClient.servicePath;
        assert(servicePath);
    });
    it('has apiEndpoint', () => {
        const apiEndpoint = jobcontrollerModule.v1.JobControllerClient.apiEndpoint;
        assert(apiEndpoint);
    });
    it('has port', () => {
        const port = jobcontrollerModule.v1.JobControllerClient.port;
        assert(port);
        assert(typeof port === 'number');
    });
    it('should create a client with no option', () => {
        const client = new jobcontrollerModule.v1.JobControllerClient();
        assert(client);
    });
    it('should create a client with gRPC fallback', () => {
        const client = new jobcontrollerModule.v1.JobControllerClient({
            fallback: true,
        });
        assert(client);
    });
    it('has initialize method and supports deferred initialization', async () => {
        const client = new jobcontrollerModule.v1.JobControllerClient({
            credentials: { client_email: 'bogus', private_key: 'bogus' },
            projectId: 'bogus',
        });
        assert.strictEqual(client.jobControllerStub, undefined);
        await client.initialize();
        assert(client.jobControllerStub);
    });
    it('has close method', () => {
        const client = new jobcontrollerModule.v1.JobControllerClient({
            credentials: { client_email: 'bogus', private_key: 'bogus' },
            projectId: 'bogus',
        });
        client.close();
    });
    describe('submitJob', () => {
        it('invokes submitJob without error', done => {
            const client = new jobcontrollerModule.v1.JobControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.ISubmitJobRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.submitJob = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.submitJob(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes submitJob with error', done => {
            const client = new jobcontrollerModule.v1.JobControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.ISubmitJobRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.submitJob = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.submitJob(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('getJob', () => {
        it('invokes getJob without error', done => {
            const client = new jobcontrollerModule.v1.JobControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IGetJobRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.getJob = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.getJob(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes getJob with error', done => {
            const client = new jobcontrollerModule.v1.JobControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IGetJobRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.getJob = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.getJob(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('updateJob', () => {
        it('invokes updateJob without error', done => {
            const client = new jobcontrollerModule.v1.JobControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IUpdateJobRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.updateJob = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.updateJob(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes updateJob with error', done => {
            const client = new jobcontrollerModule.v1.JobControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IUpdateJobRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.updateJob = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.updateJob(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('cancelJob', () => {
        it('invokes cancelJob without error', done => {
            const client = new jobcontrollerModule.v1.JobControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.ICancelJobRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.cancelJob = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.cancelJob(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes cancelJob with error', done => {
            const client = new jobcontrollerModule.v1.JobControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.ICancelJobRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.cancelJob = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.cancelJob(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('deleteJob', () => {
        it('invokes deleteJob without error', done => {
            const client = new jobcontrollerModule.v1.JobControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IDeleteJobRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.deleteJob = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.deleteJob(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes deleteJob with error', done => {
            const client = new jobcontrollerModule.v1.JobControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IDeleteJobRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.deleteJob = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.deleteJob(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('listJobs', () => {
        it('invokes listJobs without error', done => {
            const client = new jobcontrollerModule.v1.JobControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IListJobsRequest = {};
            // Mock response
            const expectedResponse = {};
            // Mock Grpc layer
            client._innerApiCalls.listJobs = (actualRequest: {}, options: {}, callback: Callback) => {
                assert.deepStrictEqual(actualRequest, request);
                callback(null, expectedResponse);
            };
            client.listJobs(request, (err: FakeError, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            });
        });
    });
    describe('listJobsStream', () => {
        it('invokes listJobsStream without error', done => {
            const client = new jobcontrollerModule.v1.JobControllerClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.dataproc.v1.IListJobsRequest = {};
            // Mock response
            const expectedResponse = {response: 'data'};
            // Mock Grpc layer
            client._innerApiCalls.listJobs = (actualRequest: {}, options: {}, callback: Callback) => {
                assert.deepStrictEqual(actualRequest, request);
                callback(null, expectedResponse);
            };
            const stream = client.listJobsStream(request, {}).on('data', (response: {}) =>{
                assert.deepStrictEqual(response, expectedResponse);
                done();
            }).on('error', (err: FakeError) => {
                done(err);
            });
            stream.write(expectedResponse);
        });
    });
});
