import {GrpcClient} from '@mitch528/react-native-grpc';
import { FrontendServiceClient } from '../gencode/protos-frontend/frontend/FrontendService.client';
import { RNGrpcTransport } from './RNTransport';



const nativeClientInstance = GrpcClient

/**
 * function to initialize the native Grpc Client using which we can have any Client Server instance created
 * Please make sure that you change the value of the host in set host while testing
 * There are certain errors which can be faced while using the host , you need to catch the error wherever you
 * are getting the promise of the response to debug those errors
 */
function initializeNativeClient(){
    // TODO : use the host from the yaml config file
    nativeClientInstance.setHost('0.tcp.in.ngrok.io:12935');
    // TODO : use this value from yaml config file
    nativeClientInstance.setInsecure(true);

}

initializeNativeClient()

/**
 * Native Client exportion for data sharing for the server instanced data for now, we can remove this 
 * once we are in a stable position on the Service Client side
 */
export const NativeClient = nativeClientInstance

/**
 * This is the Service Client which can be directly used to make RPC calls with the request parameters 
 * and the headers, metadata for the RPC call happening
 * This Client wont be able to support streaming for now as we have not implemented in the {RNGrpcTransport}
 */
export const ServiceClient = new FrontendServiceClient(
    new RNGrpcTransport(NativeClient),
  );